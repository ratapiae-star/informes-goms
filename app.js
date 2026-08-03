/* ==========================================================================
   Informes de Calidad — GOMS
   Vanilla JS SPA. No build step, no external network dependency at runtime
   (jsPDF is vendored locally in /vendor). Data lives in IndexedDB so the
   app is fully usable offline; PDFs are generated on-device.
   ========================================================================== */

/* ---------------------------- Report type catalog ---------------------------- */
const REPORT_TYPES = {
  fortificacion: {
    id: 'fortificacion',
    short: 'Materiales Fortificación',
    name: 'INFORME MATERIALES DE FORTIFICACIÓN (NIVEL ACA)',
    code: 'INF-GOMS-CL-001',
    icon: '🧱',
    laborLabel: 'Sector',
    objetivoPh: 'Revisión semanal de acopio de materiales de fortificación, periodicidad de los materiales, verificación de cumplimiento de fechas, dentro de los parámetros de aceptación que indica el fabricante.',
    antecedentesPh: 'Se verifican planchuelas y largos de pernos helicoidales, fechas de vencimiento de cemento y aditivos, mallas disponibles, orden y aseo del sector.'
  },
  torque: {
    id: 'torque',
    short: 'Torque Pernos Helicoidales',
    name: 'INFORME DE TORQUE PERNOS HELICOIDALES',
    code: 'INF-GOMS-CL-003',
    icon: '🔩',
    laborLabel: 'Punto verificado',
    objetivoPh: 'Chequeo según N° de plano y nota de especificación de torque.',
    antecedentesPh: 'Se selecciona fila / parada / perno N° a verificar su torque según valor especificado en plano.'
  },
  malla: {
    id: 'malla',
    short: 'Instalación de Malla',
    name: 'INFORME DE VERIFICACIÓN DE INSTALACIÓN DE MALLA',
    code: 'INF-GOMS-CL-002',
    icon: '🕸️',
    laborLabel: 'Sector / PK',
    objetivoPh: 'Chequeo del acondicionamiento de la malla requerido en planos de fortificación.',
    antecedentesPh: 'Se verifica la instalación y acondicionamiento de la malla de gradiente a gradiente, respetando el traslape mínimo según plano de fortificación.'
  },
  shotcrete: {
    id: 'shotcrete',
    short: 'Proyección de Shotcrete',
    name: 'INFORME PROYECCIÓN DE SHOTCRETE',
    code: 'INF-GOMS-CL-004',
    icon: '🧴',
    laborLabel: 'Etapa / Labor',
    objetivoPh: 'Inspección de proyección de shotcrete en desarrollo de la labor.',
    antecedentesPh: 'De acuerdo con el procedimiento vigente, se observa la proyección de shotcrete sobre malla en la labor mencionada.'
  }
};

/* ---------------------------------- IndexedDB ---------------------------------- */
const DB_NAME = 'goms-informes';
const DB_VER = 1;
let dbP = null;

function openDB(){
  if (dbP) return dbP;
  dbP = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VER);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('reports')) db.createObjectStore('reports', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('config')) db.createObjectStore('config', { keyPath: 'id' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbP;
}
async function idbGet(store, key){
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readonly');
    const r = tx.objectStore(store).get(key);
    r.onsuccess = () => res(r.result || null);
    r.onerror = () => rej(r.error);
  });
}
async function idbGetAll(store){
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readonly');
    const r = tx.objectStore(store).getAll();
    r.onsuccess = () => res(r.result || []);
    r.onerror = () => rej(r.error);
  });
}
async function idbPut(store, val){
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).put(val);
    tx.oncomplete = () => res(val);
    tx.onerror = () => rej(tx.error);
  });
}
async function idbDelete(store, key){
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).delete(key);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}

async function getConfig(){
  const c = await idbGet('config', 'main');
  return c || {
    id: 'main',
    empresaContratista: 'ZÜBLIN',
    contrato: '4600031460 / GCC-003',
    obra: 'Desarrollo y Construcción Nivel Superior e Inferior Mina Norte — División Chuquicamata',
    generadoPor: '',
    destinoCorreo: '',
    webhookUrl: ''
  };
}
async function saveConfig(cfg){ cfg.id = 'main'; return idbPut('config', cfg); }

/* ------------------------------------ Utils ------------------------------------ */
function uid(){ return 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
function pad2(n){ return String(n).padStart(2,'0'); }
function todayISO(){ const d = new Date(); return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`; }
function nowHM(){ const d = new Date(); return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`; }
function fmtDateDisplay(iso){
  if (!iso) return '—';
  const [y,m,d] = iso.split('-');
  return `${d}-${m}-${y}`;
}
function escapeHtml(s){
  return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function toast(msg, ms=2600){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._h);
  toast._h = setTimeout(() => t.classList.remove('show'), ms);
}
function emptyReport(typeId){
  return {
    id: uid(),
    typeId,
    status: 'draft', // draft -> listo -> enviado
    createdAt: Date.now(),
    updatedAt: Date.now(),
    header: { fecha: todayISO(), hora: nowHM(), turno: 'DIA', grupo: 'G1', area: 'MINERIA', proceso: '', sectorPk: '' },
    personal: [ { nombre:'', cargo:'Inspector de Calidad', firma:null }, { nombre:'', cargo:'Inspector de Calidad', firma:null } ],
    objetivo: '',
    antecedentes: '',
    labores: [],
    conclusiones: '',
    sentAt: null,
    pdfMeta: null
  };
}
function newLabor(){
  return { id: uid(), titulo: '', positiva: '', desviaciones: '', fotos: [] };
}

/* Downscale + compress a captured photo file to keep storage & PDF size sane */
function fileToCompressedDataURL(file, maxDim = 1280, quality = 0.72){
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = () => { img.onload = () => {
      let { width, height } = img;
      if (width > height && width > maxDim){ height = Math.round(height * (maxDim/width)); width = maxDim; }
      else if (height > maxDim){ width = Math.round(width * (maxDim/height)); height = maxDim; }
      const canvas = document.createElement('canvas');
      canvas.width = width; canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    }; img.onerror = reject; img.src = reader.result; };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ------------------------------------ Router ------------------------------------ */
let ROUTE = { screen: 'home', params: {} };
const WIZ_STEPS = ['datos','personal','resumen','desarrollo','conclusiones','firmas','revision'];
const WIZ_TITLES = {
  datos: 'Datos generales', personal: 'Personal en turno', resumen: 'Resumen del turno',
  desarrollo: 'Desarrollo — registros', conclusiones: 'Conclusiones', firmas: 'Firmas',
  revision: 'Revisión y envío'
};

function go(screen, params={}){
  ROUTE = { screen, params };
  render();
  document.getElementById('app').scrollTo?.(0,0);
  window.scrollTo(0,0);
}

async function render(){
  const app = document.getElementById('app');
  let html = '';
  if (ROUTE.screen === 'home') html = await renderHome();
  else if (ROUTE.screen === 'historial') html = await renderHistorial();
  else if (ROUTE.screen === 'config') html = await renderConfig();
  else if (ROUTE.screen === 'wizard') html = await renderWizard(ROUTE.params.id, ROUTE.params.step);
  else if (ROUTE.screen === 'ver') html = await renderVer(ROUTE.params.id);
  app.innerHTML = html;
  bindGlobal();
  if (ROUTE.screen === 'home') bindHome();
  if (ROUTE.screen === 'historial') bindHistorial();
  if (ROUTE.screen === 'config') bindConfig();
  if (ROUTE.screen === 'wizard') bindWizard(ROUTE.params.id, ROUTE.params.step);
  if (ROUTE.screen === 'ver') bindVer(ROUTE.params.id);
}

function topbar(title, opts={}){
  const back = opts.back !== false;
  return `
  <div class="topbar">
    ${back ? `<button class="back" data-nav="${opts.backTo || 'home'}">‹</button>` : `<span style="width:38px"></span>`}
    <h1>${escapeHtml(title)}</h1>
    <span class="net-pill" id="netPill"><span class="dot"></span><span id="netTxt">—</span></span>
  </div>`;
}

function bindGlobal(){
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => go(el.getAttribute('data-nav')));
  });
  updateNetPill();
}

function updateNetPill(){
  const pill = document.getElementById('netPill');
  const txt = document.getElementById('netTxt');
  if (!pill) return;
  const online = navigator.onLine;
  pill.classList.toggle('online', online);
  pill.classList.toggle('offline', !online);
  txt.textContent = online ? 'EN LÍNEA' : 'SIN SEÑAL';
}
window.addEventListener('online', () => { updateNetPill(); toast('Señal recuperada — sincronizando pendientes…'); attemptAutoSync(); });
window.addEventListener('offline', updateNetPill);

/* ------------------------------------ HOME ------------------------------------ */
async function renderHome(){
  const reports = await idbGetAll('reports');
  reports.sort((a,b) => b.updatedAt - a.updatedAt);
  const pending = reports.filter(r => r.status !== 'enviado').slice(0,5);

  const cards = Object.values(REPORT_TYPES).map(t => `
    <button class="type-card" data-newtype="${t.id}">
      <span class="bar"></span>
      <span class="ic">${t.icon}</span>
      <span class="lbl">${escapeHtml(t.short)}</span>
    </button>
  `).join('');

  const queue = pending.length ? `<div class="queue-list">${pending.map(cardRow).join('')}</div>`
    : `<div class="empty-hint">Aún no hay informes en curso.<br>Elige un tipo arriba para crear el primero.</div>`;

  return `
  <div class="topbar">
    <span style="width:38px"></span>
    <h1>Informes GOMS</h1>
    <span class="net-pill" id="netPill"><span class="dot"></span><span id="netTxt">—</span></span>
  </div>
  <div class="screen">
    <div class="home-hero">
      <div class="stamp done">V°B°</div>
      <div class="txt">
        <div class="kicker">Departamento de Calidad</div>
        <h1>Terreno &amp; registro</h1>
      </div>
    </div>

    <div class="eyebrow">Nuevo informe</div>
    <div class="grid-types">${cards}</div>

    <div class="section-title">
      <span>En curso</span>
      <span data-nav="historial" style="color:var(--signal); cursor:pointer;">Ver historial ›</span>
    </div>
    ${queue}

    <div class="section-title" style="margin-top:28px;">
      <span>Ajustes</span>
    </div>
    <button class="btn btn-ghost" data-nav="config" style="justify-content:flex-start;">⚙ Configuración de envío y contrato</button>
  </div>
  <div class="spacer"></div>
  `;
}

function cardRow(r){
  const t = REPORT_TYPES[r.typeId];
  const chip = r.status === 'listo' ? '<span class="status-chip ready">PDF listo</span>'
             : r.status === 'enviado' ? '<span class="status-chip sent">Enviado</span>'
             : '<span class="status-chip draft">Borrador</span>';
  return `
  <div class="report-card" data-openreport="${r.id}">
    <div class="stamp ${r.status==='draft'?'pending':'done'}" style="--sz:34px;font-size:9px;">${t.icon}</div>
    <div class="meta">
      <div class="t1">${escapeHtml(t.short)} · ${escapeHtml(r.header.sectorPk || 'sin sector')}</div>
      <div class="t2">${fmtDateDisplay(r.header.fecha)} · ${escapeHtml(r.header.turno)} · ${escapeHtml(r.header.grupo)}</div>
    </div>
    ${chip}
  </div>`;
}

function bindHome(){
  document.querySelectorAll('[data-newtype]').forEach(el => el.addEventListener('click', async () => {
    const typeId = el.getAttribute('data-newtype');
    const r = emptyReport(typeId);
    await idbPut('reports', r);
    go('wizard', { id: r.id, step: 'datos' });
  }));
  document.querySelectorAll('[data-openreport]').forEach(el => el.addEventListener('click', () => {
    go('wizard', { id: el.getAttribute('data-openreport'), step: 'datos' });
  }));
}

/* ------------------------------------ HISTORIAL ------------------------------------ */
async function renderHistorial(){
  const reports = await idbGetAll('reports');
  reports.sort((a,b) => b.updatedAt - a.updatedAt);
  const list = reports.length ? reports.map(r => `
    <div class="report-card" data-viewreport="${r.id}">
      <div class="stamp ${r.status==='draft'?'pending':'done'}" style="--sz:34px;font-size:9px;">${REPORT_TYPES[r.typeId].icon}</div>
      <div class="meta">
        <div class="t1">${escapeHtml(REPORT_TYPES[r.typeId].short)} · ${escapeHtml(r.header.sectorPk || 'sin sector')}</div>
        <div class="t2">${fmtDateDisplay(r.header.fecha)} · ${escapeHtml(r.header.turno)} · ${escapeHtml(r.header.grupo)}</div>
      </div>
      ${r.status === 'listo' ? '<span class="status-chip ready">PDF listo</span>' : r.status === 'enviado' ? '<span class="status-chip sent">Enviado</span>' : '<span class="status-chip draft">Borrador</span>'}
    </div>`).join('') : `<div class="empty-hint">No hay informes guardados todavía.</div>`;

  return `
  ${topbar('Historial')}
  <div class="screen">
    <p class="sub">Todos los informes guardados en este dispositivo, incluidos los generados sin señal.</p>
    <div class="queue-list">${list}</div>
  </div>
  <div class="spacer"></div>`;
}
function bindHistorial(){
  document.querySelectorAll('[data-viewreport]').forEach(el => el.addEventListener('click', () => {
    go('ver', { id: el.getAttribute('data-viewreport') });
  }));
}

/* ------------------------------------ VER INFORME ------------------------------------ */
async function renderVer(id){
  const r = await idbGet('reports', id);
  if (!r) return `${topbar('Informe')}<div class="screen"><div class="empty-hint">Este informe ya no existe.</div></div>`;
  const t = REPORT_TYPES[r.typeId];
  return `
  ${topbar(t.short, { backTo: 'historial' })}
  <div class="screen">
    <div class="eyebrow">${escapeHtml(t.code)}</div>
    <div class="h-page" style="font-size:20px;">${escapeHtml(t.name)}</div>
    <div class="kv" style="margin:16px 0;">
      <div><div class="k">Fecha</div><div class="v">${fmtDateDisplay(r.header.fecha)}</div></div>
      <div><div class="k">Hora</div><div class="v">${escapeHtml(r.header.hora)}</div></div>
      <div><div class="k">Turno</div><div class="v">${escapeHtml(r.header.turno)}</div></div>
      <div><div class="k">Grupo</div><div class="v">${escapeHtml(r.header.grupo)}</div></div>
      <div><div class="k">Área</div><div class="v">${escapeHtml(r.header.area)}</div></div>
      <div><div class="k">Sector / PK</div><div class="v">${escapeHtml(r.header.sectorPk||'—')}</div></div>
    </div>
    <div class="rev-block"><h3>Estado</h3><p>${r.status === 'listo' ? 'PDF generado, pendiente de envío.' : r.status === 'enviado' ? 'Enviado.' : 'Borrador en curso.'}</p></div>
    <button class="btn btn-primary" style="margin-top:10px;" data-nav="wizard-edit">Abrir / continuar edición</button>
    <div class="btn-row">
      <button class="btn" id="btnPdfVer">Generar / ver PDF</button>
      <button class="btn btn-danger" id="btnDelVer">Eliminar</button>
    </div>
  </div>
  <div class="spacer"></div>`;
}
function bindVer(id){
  const editBtn = document.querySelector('[data-nav="wizard-edit"]');
  if (editBtn) editBtn.addEventListener('click', () => go('wizard', { id, step:'datos' }));
  const pdfBtn = document.getElementById('btnPdfVer');
  if (pdfBtn) pdfBtn.addEventListener('click', async () => {
    const r = await idbGet('reports', id);
    await generateAndOfferPdf(r);
  });
  const delBtn = document.getElementById('btnDelVer');
  if (delBtn) delBtn.addEventListener('click', async () => {
    if (confirm('¿Eliminar este informe del dispositivo? Esta acción no se puede deshacer.')){
      await idbDelete('reports', id);
      toast('Informe eliminado');
      go('historial');
    }
  });
}

/* ------------------------------------ CONFIG ------------------------------------ */
async function renderConfig(){
  const c = await getConfig();
  return `
  ${topbar('Configuración')}
  <div class="screen">
    <p class="sub">Estos datos se usan para completar el encabezado y pie de página de cada PDF, y para el envío automático cuando el equipo tenga señal.</p>

    <div class="field"><label>Empresa contratista</label><input type="text" id="cfgEmpresa" value="${escapeHtml(c.empresaContratista)}"></div>
    <div class="field"><label>N° de contrato</label><input type="text" id="cfgContrato" value="${escapeHtml(c.contrato)}"></div>
    <div class="field"><label>Obra / proyecto</label><textarea id="cfgObra">${escapeHtml(c.obra)}</textarea></div>
    <div class="field"><label>Generado por (tu nombre)</label><input type="text" id="cfgGenPor" value="${escapeHtml(c.generadoPor)}"></div>

    <div class="section-title">Envío automático al recuperar señal</div>
    <div class="field">
      <label>Correo de destino</label>
      <input type="text" id="cfgCorreo" placeholder="calidad@empresa.cl" value="${escapeHtml(c.destinoCorreo)}">
      <div class="hint">Se usa para abrir tu app de correo con el PDF adjunto mediante el menú de compartir.</div>
    </div>
    <div class="field">
      <label>Webhook / endpoint (opcional)</label>
      <input type="text" id="cfgWebhook" placeholder="https://tu-servidor.cl/recibir-informe" value="${escapeHtml(c.webhookUrl)}">
      <div class="hint">Si configuras una URL aquí (por ejemplo un Google Apps Script Web App, Zapier o Make), el PDF se sube automáticamente en segundo plano apenas el teléfono detecte señal — sin tocar nada.</div>
    </div>

    <button class="btn btn-primary" id="btnSaveCfg" style="margin-top:14px;">Guardar configuración</button>
    <p class="cfg-note">Nota: por seguridad, cada navegador aísla su almacenamiento. Si cambias de teléfono o borras datos del navegador, deberás volver a instalar la app y reconfigurar esta pantalla.</p>
  </div>
  <div class="spacer"></div>`;
}
function bindConfig(){
  document.getElementById('btnSaveCfg').addEventListener('click', async () => {
    const cfg = {
      id: 'main',
      empresaContratista: document.getElementById('cfgEmpresa').value.trim(),
      contrato: document.getElementById('cfgContrato').value.trim(),
      obra: document.getElementById('cfgObra').value.trim(),
      generadoPor: document.getElementById('cfgGenPor').value.trim(),
      destinoCorreo: document.getElementById('cfgCorreo').value.trim(),
      webhookUrl: document.getElementById('cfgWebhook').value.trim()
    };
    await saveConfig(cfg);
    toast('Configuración guardada');
    go('home');
  });
}

/* ------------------------------------ WIZARD ------------------------------------ */
async function renderWizard(id, step){
  const r = await idbGet('reports', id);
  if (!r) return `${topbar('Informe')}<div class="screen"><div class="empty-hint">Informe no encontrado.</div></div>`;
  const t = REPORT_TYPES[r.typeId];
  const stepIdx = WIZ_STEPS.indexOf(step);
  const progress = WIZ_STEPS.map((s,i) => `<div class="seg-p ${i<=stepIdx?'on':''}"></div>`).join('');

  let body = '';
  if (step === 'datos') body = stepDatos(r);
  else if (step === 'personal') body = stepPersonal(r);
  else if (step === 'resumen') body = stepResumen(r, t);
  else if (step === 'desarrollo') body = stepDesarrollo(r, t);
  else if (step === 'conclusiones') body = stepConclusiones(r);
  else if (step === 'firmas') body = stepFirmas(r);
  else if (step === 'revision') body = stepRevision(r, t);

  const isFirst = stepIdx === 0;
  const isLast = stepIdx === WIZ_STEPS.length - 1;

  return `
  ${topbar(t.short, { backTo: isFirst ? 'home' : null })}
  <div class="screen">
    <div class="progress">${progress}</div>
    <div class="eyebrow">Paso ${stepIdx+1} de ${WIZ_STEPS.length}</div>
    <div class="h-page" style="font-size:22px;">${WIZ_TITLES[step]}</div>
    <div id="stepBody">${body}</div>
  </div>
  <div class="fab-bar">
    ${!isFirst ? `<button class="btn" id="btnPrev">‹ Atrás</button>` : `<button class="btn" data-nav="home">Guardar y salir</button>`}
    ${!isLast ? `<button class="btn btn-primary" id="btnNext">Continuar ›</button>` : ''}
  </div>
  `;
}

function stepDatos(r){
  const h = r.header;
  return `
  <div class="row2">
    <div class="field"><label>Fecha</label><input type="date" id="fFecha" value="${h.fecha}"></div>
    <div class="field"><label>Hora</label><input type="time" id="fHora" value="${h.hora}"></div>
  </div>
  <div class="field">
    <label>Turno</label>
    <div class="seg">
      <button type="button" data-turno="DIA" class="${h.turno==='DIA'?'active':''}">Día</button>
      <button type="button" data-turno="NOCHE" class="${h.turno==='NOCHE'?'active':''}">Noche</button>
    </div>
  </div>
  <div class="row2">
    <div class="field"><label>Grupo</label>
      <select id="fGrupo">
        ${['G1','G2','G3','G4'].map(g=>`<option value="${g}" ${h.grupo===g?'selected':''}>${g}</option>`).join('')}
      </select>
    </div>
    <div class="field"><label>Área</label><input type="text" id="fArea" value="${escapeHtml(h.area)}"></div>
  </div>
  <div class="field"><label>Proceso</label><input type="text" id="fProceso" value="${escapeHtml(h.proceso)}" placeholder="Ej: Instalación de malla / Adose de malla"></div>
  <div class="field"><label>Sector / PK</label><input type="text" id="fSector" value="${escapeHtml(h.sectorPk)}" placeholder="Ej: GA-03 W"></div>
  `;
}

function stepPersonal(r){
  return r.personal.map((p,i) => `
    <div class="field"><label>Inspector ${i+1} — Nombre</label><input type="text" id="pNom${i}" value="${escapeHtml(p.nombre)}" placeholder="Nombre y apellido"></div>
    <div class="field" style="margin-bottom:24px;"><label>Cargo</label><input type="text" id="pCargo${i}" value="${escapeHtml(p.cargo)}"></div>
  `).join('');
}

function stepResumen(r, t){
  return `
  <div class="field"><label>1. Objetivo</label><textarea id="fObjetivo" placeholder="${escapeHtml(t.objetivoPh)}">${escapeHtml(r.objetivo)}</textarea></div>
  <div class="field"><label>2. Antecedentes</label><textarea id="fAntecedentes" placeholder="${escapeHtml(t.antecedentesPh)}">${escapeHtml(r.antecedentes)}</textarea></div>
  `;
}

function stepDesarrollo(r, t){
  const cards = r.labores.map((l, idx) => laborCardHtml(l, idx, t)).join('');
  return `
  <p class="sub mb-0" style="margin-bottom:14px;">Agrega un bloque por cada ${t.laborLabel.toLowerCase()} inspeccionado, con su condición positiva y/o desviaciones, y las fotos correspondientes.</p>
  <div id="laborList">${cards}</div>
  <button class="btn" id="btnAddLabor">+ Agregar ${t.laborLabel.toLowerCase()}</button>
  <input type="file" id="photoInput" accept="image/*" capture="environment" multiple style="display:none;">
  `;
}

function laborCardHtml(l, idx, t){
  const fotos = l.fotos.map((f, fi) => `
    <div class="photo-thumb"><img src="${f}"><button class="del" data-delphoto="${idx}:${fi}">×</button></div>
  `).join('');
  return `
  <div class="labor-card" data-labor="${idx}">
    <div class="lh">
      <input type="text" data-laborfield="${idx}:titulo" value="${escapeHtml(l.titulo)}" placeholder="${escapeHtml(t.laborLabel)} — ej: GA-03 W">
      <button class="rm" data-rmlabor="${idx}">✕</button>
    </div>
    <div class="cond-block">
      <div class="cond-tabs">
        <button type="button" data-condtab="${idx}:positiva" class="active" data-k="positiva">Condición positiva</button>
        <button type="button" data-condtab="${idx}:desviacion" data-k="desviacion">Desviaciones</button>
      </div>
      <div class="cond-body">
        <textarea data-laborfield="${idx}:positiva" data-condpane="${idx}:positiva" placeholder="Describe lo que cumple correctamente…">${escapeHtml(l.positiva)}</textarea>
        <textarea data-laborfield="${idx}:desviaciones" data-condpane="${idx}:desviacion" style="display:none;" placeholder="Describe lo que no cumple…">${escapeHtml(l.desviaciones)}</textarea>
      </div>
    </div>
    <label class="section-title" style="margin:10px 0 0;">Fotografías (${l.fotos.length})</label>
    <div class="photo-grid">
      ${fotos}
      <button type="button" class="photo-add" data-addphoto="${idx}"><span class="plus">＋</span>Cámara</button>
    </div>
  </div>`;
}

function stepConclusiones(r){
  return `
  <div class="field"><label>Conclusiones</label><textarea id="fConclusiones" placeholder="Resume el resultado final: cumple / no cumple, y cualquier acción pendiente.">${escapeHtml(r.conclusiones)}</textarea></div>
  `;
}

function stepFirmas(r){
  return r.personal.map((p,i) => `
    <div class="sig-card">
      <div class="who">
        <div class="stamp ${p.firma?'done':'pending'}">V°B°</div>
        <div>
          <div class="nm">${escapeHtml(p.nombre || `Inspector ${i+1}`)}</div>
          <div class="rl">${escapeHtml(p.cargo)}</div>
        </div>
      </div>
      <canvas class="sigpad" id="sig${i}" data-sigidx="${i}"></canvas>
      <div class="sig-actions">
        <button type="button" class="link" data-clearsig="${i}">Borrar firma</button>
        <span class="sig-status ${p.firma?'signed':'pending'}" id="sigStatus${i}">${p.firma?'Firmado':'Pendiente'}</span>
      </div>
    </div>
  `).join('');
}

function stepRevision(r, t){
  const laboresHtml = r.labores.map(l => `
    <div class="rev-block">
      <h3>${escapeHtml(l.titulo || 'Sin título')}</h3>
      ${l.positiva ? `<p><strong style="color:var(--ok)">Condición positiva:</strong> ${escapeHtml(l.positiva)}</p>` : ''}
      ${l.desviaciones ? `<p><strong style="color:var(--warn)">Desviaciones:</strong> ${escapeHtml(l.desviaciones)}</p>` : ''}
      <p style="color:var(--ink-faint); font-size:12px;">${l.fotos.length} fotografía(s) adjunta(s)</p>
    </div>
  `).join('') || `<p class="sub">Aún no agregaste registros de desarrollo.</p>`;

  const firmasOk = r.personal.every(p => p.firma);
  const statusChip = r.status === 'enviado' ? '<span class="status-chip sent">Enviado</span>' : r.status === 'listo' ? '<span class="status-chip ready">PDF listo</span>' : '<span class="status-chip draft">Borrador</span>';

  return `
  ${!firmasOk ? `<div class="banner warn">⚠ Faltan firmas por completar. Puedes generar el PDF igual, pero se recomienda firmar antes de enviar.</div>` : ''}
  <div class="kv" style="margin-bottom:10px;">
    <div><div class="k">Fecha</div><div class="v">${fmtDateDisplay(r.header.fecha)} · ${escapeHtml(r.header.hora)}</div></div>
    <div><div class="k">Turno / Grupo</div><div class="v">${escapeHtml(r.header.turno)} · ${escapeHtml(r.header.grupo)}</div></div>
    <div><div class="k">Área</div><div class="v">${escapeHtml(r.header.area)}</div></div>
    <div><div class="k">Sector / PK</div><div class="v">${escapeHtml(r.header.sectorPk||'—')}</div></div>
  </div>
  <div style="margin-bottom:12px;">${statusChip}</div>

  <div class="rev-block"><h3>1. Objetivo</h3><p>${escapeHtml(r.objetivo || '—')}</p></div>
  <div class="rev-block"><h3>2. Antecedentes</h3><p>${escapeHtml(r.antecedentes || '—')}</p></div>
  <div class="rev-block"><h3>3. Desarrollo</h3>${laboresHtml}</div>
  <div class="rev-block"><h3>4. Conclusiones</h3><p>${escapeHtml(r.conclusiones || '—')}</p></div>

  <button class="btn btn-primary" id="btnGenPdf" style="margin-top:16px;">📄 Generar informe PDF</button>
  <div class="btn-row">
    <button class="btn" id="btnSharePdf">Compartir / enviar ahora</button>
  </div>
  <p class="cfg-note" id="autoSyncNote">
    ${navigator.onLine
      ? 'Hay señal: si configuraste un webhook, el envío automático se intentará al generar el PDF.'
      : 'Sin señal: el informe queda guardado en el equipo. Se generará y/o enviará automáticamente en cuanto el teléfono detecte conexión.'}
  </p>
  `;
}

/* ---- wizard bindings ---- */
function bindWizard(id, step){
  const stepIdx = WIZ_STEPS.indexOf(step);

  document.getElementById('btnNext')?.addEventListener('click', async () => {
    await persistCurrentStep(id, step);
    go('wizard', { id, step: WIZ_STEPS[stepIdx+1] });
  });
  document.getElementById('btnPrev')?.addEventListener('click', async () => {
    await persistCurrentStep(id, step);
    go('wizard', { id, step: WIZ_STEPS[stepIdx-1] });
  });
  const backBtn = document.querySelector('.topbar .back');
  if (backBtn) backBtn.addEventListener('click', async (e) => {
    e.stopPropagation();
    await persistCurrentStep(id, step);
  });

  if (step === 'datos') bindDatos();
  if (step === 'desarrollo') bindDesarrollo(id);
  if (step === 'firmas') bindFirmas(id);
  if (step === 'revision') bindRevision(id);
}

function bindDatos(){
  document.querySelectorAll('[data-turno]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('[data-turno]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  }));
}

async function persistCurrentStep(id, step){
  const r = await idbGet('reports', id);
  if (!r) return;
  if (step === 'datos'){
    r.header.fecha = document.getElementById('fFecha').value || r.header.fecha;
    r.header.hora = document.getElementById('fHora').value || r.header.hora;
    r.header.turno = document.querySelector('[data-turno].active')?.getAttribute('data-turno') || r.header.turno;
    r.header.grupo = document.getElementById('fGrupo').value;
    r.header.area = document.getElementById('fArea').value;
    r.header.proceso = document.getElementById('fProceso').value;
    r.header.sectorPk = document.getElementById('fSector').value;
  } else if (step === 'personal'){
    r.personal.forEach((p, i) => {
      p.nombre = document.getElementById(`pNom${i}`).value;
      p.cargo = document.getElementById(`pCargo${i}`).value;
    });
  } else if (step === 'resumen'){
    r.objetivo = document.getElementById('fObjetivo').value;
    r.antecedentes = document.getElementById('fAntecedentes').value;
  } else if (step === 'desarrollo'){
    // labores are persisted live via their own handlers; nothing extra needed
  } else if (step === 'conclusiones'){
    r.conclusiones = document.getElementById('fConclusiones').value;
  } else if (step === 'firmas'){
    // signatures persisted live on draw-end
  }
  r.updatedAt = Date.now();
  await idbPut('reports', r);
}

function bindDesarrollo(id){
  let dragTargetIdx = null;

  document.getElementById('btnAddLabor').addEventListener('click', async () => {
    const r = await idbGet('reports', id);
    r.labores.push(newLabor());
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  });

  document.querySelectorAll('[data-rmlabor]').forEach(el => el.addEventListener('click', async () => {
    const idx = +el.getAttribute('data-rmlabor');
    const r = await idbGet('reports', id);
    r.labores.splice(idx, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-condtab]').forEach(el => el.addEventListener('click', () => {
    const [idx, which] = el.getAttribute('data-condtab').split(':');
    const card = document.querySelector(`.labor-card[data-labor="${idx}"]`);
    card.querySelectorAll('[data-condtab]').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    card.querySelectorAll('[data-condpane]').forEach(p => {
      const [, w] = p.getAttribute('data-condpane').split(':');
      p.style.display = (w === which) ? 'block' : 'none';
    });
  }));

  document.querySelectorAll('[data-laborfield]').forEach(el => {
    el.addEventListener('change', async () => {
      const [idx, field] = el.getAttribute('data-laborfield').split(':');
      const r = await idbGet('reports', id);
      r.labores[+idx][field] = el.value;
      r.updatedAt = Date.now();
      await idbPut('reports', r);
    });
  });

  const photoInput = document.getElementById('photoInput');
  document.querySelectorAll('[data-addphoto]').forEach(el => el.addEventListener('click', () => {
    dragTargetIdx = +el.getAttribute('data-addphoto');
    photoInput.value = '';
    photoInput.click();
  }));
  photoInput.addEventListener('change', async () => {
    if (!photoInput.files.length) return;
    toast('Procesando fotos…', 1500);
    const r = await idbGet('reports', id);
    for (const file of photoInput.files){
      try { const dataUrl = await fileToCompressedDataURL(file); r.labores[dragTargetIdx].fotos.push(dataUrl); }
      catch(e){ console.error(e); }
    }
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  });

  document.querySelectorAll('[data-delphoto]').forEach(el => el.addEventListener('click', async () => {
    const [idx, fi] = el.getAttribute('data-delphoto').split(':').map(Number);
    const r = await idbGet('reports', id);
    r.labores[idx].fotos.splice(fi, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));
}

/* ---- signature pad ---- */
function setupSignaturePad(canvas, existingDataUrl, onChange){
  const ctx = canvas.getContext('2d');
  const ratio = window.devicePixelRatio || 1;
  function resize(){
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.scale(ratio, ratio);
    ctx.lineWidth = 2.4;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#eef2f5';
    if (existingDataUrl){
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height);
      img.src = existingDataUrl;
    }
  }
  resize();
  let drawing = false, last = null;
  function pos(e){
    const rect = canvas.getBoundingClientRect();
    const cx = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const cy = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    return { x: cx, y: cy };
  }
  function start(e){ e.preventDefault(); drawing = true; last = pos(e); }
  function move(e){
    if (!drawing) return;
    e.preventDefault();
    const p = pos(e);
    ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke();
    last = p;
  }
  function end(e){
    if (!drawing) return;
    drawing = false;
    onChange(canvas.toDataURL('image/png'));
  }
  canvas.addEventListener('pointerdown', start);
  canvas.addEventListener('pointermove', move);
  window.addEventListener('pointerup', end);
  canvas.addEventListener('touchstart', start, { passive:false });
  canvas.addEventListener('touchmove', move, { passive:false });
  canvas.addEventListener('touchend', end);
  return {
    clear(){ ctx.clearRect(0,0,canvas.width,canvas.height); onChange(null); }
  };
}

function bindFirmas(id){
  document.querySelectorAll('.sigpad').forEach(async (canvas) => {
    const idx = +canvas.getAttribute('data-sigidx');
    const r = await idbGet('reports', id);
    const pad = setupSignaturePad(canvas, r.personal[idx].firma, async (dataUrl) => {
      const rr = await idbGet('reports', id);
      rr.personal[idx].firma = dataUrl;
      rr.updatedAt = Date.now();
      await idbPut('reports', rr);
      const statusEl = document.getElementById(`sigStatus${idx}`);
      if (statusEl){
        statusEl.textContent = dataUrl ? 'Firmado' : 'Pendiente';
        statusEl.classList.toggle('signed', !!dataUrl);
        statusEl.classList.toggle('pending', !dataUrl);
      }
    });
    canvas._pad = pad;
  });
  document.querySelectorAll('[data-clearsig]').forEach(el => el.addEventListener('click', () => {
    const idx = el.getAttribute('data-clearsig');
    const canvas = document.getElementById(`sig${idx}`);
    canvas._pad?.clear();
  }));
}

function bindRevision(id){
  document.getElementById('btnGenPdf').addEventListener('click', async () => {
    const r = await idbGet('reports', id);
    await generateAndOfferPdf(r, { autoOfferShare:false });
  });
  document.getElementById('btnSharePdf').addEventListener('click', async () => {
    const r = await idbGet('reports', id);
    await generateAndOfferPdf(r, { autoOfferShare:true });
  });
}

/* ------------------------------------ PDF GENERATION ------------------------------------ */
async function generateAndOfferPdf(r, opts={}){
  toast('Generando PDF…', 1800);
  const cfg = await getConfig();
  let blob;
  try {
    blob = buildPdfBlob(r, cfg);
  } catch(e){
    console.error(e);
    toast('No se pudo generar el PDF. Revisa que todos los campos estén completos.');
    return;
  }
  r.status = r.status === 'enviado' ? 'enviado' : 'listo';
  r.updatedAt = Date.now();
  await idbPut('reports', r);

  const filename = pdfFilename(r);
  const file = new File([blob], filename, { type: 'application/pdf' });

  // Try native share sheet first (works fully offline, lets user pick WhatsApp/Correo/Drive)
  if (opts.autoOfferShare !== false && navigator.canShare && navigator.canShare({ files:[file] })){
    try {
      await navigator.share({ files:[file], title: filename, text: `${REPORT_TYPES[r.typeId].name} — ${r.header.sectorPk}` });
      toast('Informe compartido');
      return;
    } catch(e){ /* user cancelled share sheet — fall through to download */ }
  }

  // Fallback: trigger a normal download link
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  toast('PDF guardado en tus descargas');

  // If online and a webhook is configured, try auto-upload right away
  if (navigator.onLine && cfg.webhookUrl) sendReportViaWebhook(r, blob, cfg).catch(console.error);
}

function pdfFilename(r){
  const t = REPORT_TYPES[r.typeId];
  const safe = (r.header.sectorPk || 'sin-sector').replace(/[^a-z0-9]+/gi,'-');
  return `${t.short.replace(/\s+/g,'_')}_${r.header.fecha}_${safe}.pdf`;
}

function buildPdfBlob(r, cfg){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'pt', format:'letter' });
  const t = REPORT_TYPES[r.typeId];
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 42;
  const contentW = pageW - margin*2;
  let y = margin;

  const COL = { ink:'#10141a', dim:'#5f6d78', ok:'#1c7a45', warn:'#b7302f', signal:'#c76418', line:'#c8ccd0' };

  function ensureSpace(h){
    if (y + h > pageH - 60){ doc.addPage(); y = margin; drawRunningHeader(); }
  }
  function drawRunningHeader(){
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(COL.dim);
    doc.text(t.name, margin, 28);
    doc.setDrawColor(COL.line); doc.line(margin, 34, pageW-margin, 34);
    y = 48;
  }
  function heading(text, size=12){
    ensureSpace(size+14);
    doc.setFont('helvetica','bold'); doc.setFontSize(size); doc.setTextColor(COL.ink);
    doc.text(text, margin, y);
    y += size*0.9 + 6;
  }
  function paragraph(text, opts={}){
    if (!text) { text = '—'; }
    doc.setFont('helvetica', opts.bold?'bold':'normal');
    doc.setFontSize(opts.size || 10);
    doc.setTextColor(opts.color || COL.ink);
    const lines = doc.splitTextToSize(text, contentW);
    ensureSpace(lines.length * 13 + 6);
    doc.text(lines, margin, y);
    y += lines.length * 13 + 8;
  }
  function labelValue(label, value){
    doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(COL.dim);
    doc.text(label, margin, y);
    doc.setFont('helvetica','normal'); doc.setTextColor(COL.ink);
    doc.text(String(value||'—'), margin + 78, y);
    y += 15;
  }

  // ---- Cover header ----
  doc.setFillColor('#10141a'); doc.rect(0,0,pageW,64,'F');
  doc.setTextColor('#ffffff'); doc.setFont('helvetica','bold'); doc.setFontSize(14);
  doc.text(t.name, margin, 30, { maxWidth: contentW });
  doc.setFontSize(9); doc.setTextColor('#ff8a1f');
  doc.text('DEPARTAMENTO DE CALIDAD', margin, 48);
  doc.setTextColor('#93a1ad'); doc.setFontSize(8);
  doc.text(`Código: ${t.code}  ·  Contrato N° ${cfg.contrato}  ·  ${cfg.empresaContratista}`, margin, 58);
  y = 84;

  // ---- Info grid ----
  doc.setDrawColor(COL.line);
  doc.roundedRect(margin, y, contentW, 108, 4, 4);
  let iy = y + 20;
  const col1 = margin + 14, col2 = margin + contentW/2 + 4;
  const infoRows = [
    ['FECHA', fmtDateDisplay(r.header.fecha)], ['HORA', r.header.hora],
    ['TURNO', r.header.turno], ['GRUPO', r.header.grupo],
    ['ÁREA', r.header.area], ['PROCESO', r.header.proceso || '—'],
  ];
  infoRows.forEach((row, i) => {
    const x = i % 2 === 0 ? col1 : col2;
    const ry = iy + Math.floor(i/2) * 22;
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(COL.dim);
    doc.text(row[0], x, ry);
    doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(COL.ink);
    doc.text(String(row[1]), x, ry+13);
  });
  doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(COL.dim);
  doc.text('SECTOR / PK', col1, iy + 88);
  doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(COL.ink);
  doc.text(String(r.header.sectorPk || '—'), col1, iy + 101);
  y += 108 + 20;

  // ---- Personal en turno ----
  heading('A.- PERSONAL EN TURNO');
  r.personal.forEach((p, i) => paragraph(`${i+1}.- ${p.nombre || '(sin nombre)'} (${p.cargo}).`));
  y += 4;

  // ---- Resumen ----
  heading('RESUMEN DEL TURNO');
  heading('1. Objetivo', 10.5); paragraph(r.objetivo);
  heading('2. Antecedentes', 10.5); paragraph(r.antecedentes);

  // ---- Desarrollo ----
  heading('3. DESARROLLO — REGISTROS DEL TURNO');
  if (!r.labores.length) paragraph('Sin registros ingresados.');
  r.labores.forEach((l, li) => {
    heading(l.titulo || `Registro ${li+1}`, 10.5);
    if (l.positiva){ paragraph('CONDICIÓN POSITIVA', { bold:true, size:9, color: COL.ok }); paragraph(l.positiva); }
    if (l.desviaciones){ paragraph('DESVIACIONES', { bold:true, size:9, color: COL.warn }); paragraph(l.desviaciones); }
    if (l.fotos.length) paragraph(`Ver Anexo ${li+1} (${l.fotos.length} fotografía(s)).`, { size:9, color: COL.dim });
    y += 4;
  });

  // ---- Conclusiones ----
  heading('4. CONCLUSIONES');
  paragraph(r.conclusiones);

  // ---- Evidencia adjunta ----
  heading('5. EVIDENCIA ADJUNTA');
  if (r.labores.some(l=>l.fotos.length)){
    r.labores.forEach((l, li) => { if (l.fotos.length) paragraph(`•  Anexo ${li+1}: Fotografías — ${l.titulo || 'Registro '+(li+1)}.`); });
  } else paragraph('Sin fotografías adjuntas.');

  // ---- Anexo photo pages ----
  r.labores.forEach((l, li) => {
    if (!l.fotos.length) return;
    doc.addPage(); y = margin;
    doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.setTextColor(COL.ink);
    doc.text(`Anexo ${li+1}: Fotografías — ${l.titulo || 'Registro '+(li+1)}`, margin, y, { maxWidth: contentW });
    y += 26;
    const gap = 10, cellW = (contentW - gap)/2, cellH = 150;
    l.fotos.forEach((f, fi) => {
      const col = fi % 2, row = Math.floor(fi/2);
      if (col === 0 && row > 0 && y + cellH > pageH - 50){ doc.addPage(); y = margin; }
      const x = margin + col*(cellW+gap);
      const yy = y + row*(cellH+gap) - (Math.floor((row*(cellH+gap))/(pageH))*0);
      try { doc.addImage(f, 'JPEG', x, yy, cellW, cellH, undefined, 'FAST'); } catch(e){ /* ignore malformed image */ }
    });
    const rows = Math.ceil(l.fotos.length/2);
    y += rows*(cellH+gap);
  });

  // ---- Firmas page ----
  doc.addPage(); y = margin;
  doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.setTextColor(COL.ink);
  doc.text('FIRMAS — CONFORMIDAD DE TERRENO', margin, y);
  y += 30;
  const boxW = (contentW - 20)/2, boxH = 170;
  r.personal.forEach((p, i) => {
    const x = margin + i*(boxW+20);
    doc.setDrawColor(COL.line); doc.roundedRect(x, y, boxW, boxH, 6, 6);
    doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(COL.dim);
    doc.text(`INSPECTOR ${i+1}`, x+12, y+18);
    if (p.firma){
      try { doc.addImage(p.firma, 'PNG', x+12, y+26, boxW-24, 90); } catch(e){}
    } else {
      doc.setFont('helvetica','italic'); doc.setFontSize(9); doc.setTextColor(COL.dim);
      doc.text('(sin firma registrada)', x+12, y+70);
    }
    doc.setDrawColor(COL.line); doc.line(x+12, y+boxH-40, x+boxW-12, y+boxH-40);
    doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(COL.ink);
    doc.text(p.nombre || '—', x+12, y+boxH-26);
    doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(COL.dim);
    doc.text(p.cargo || '—', x+12, y+boxH-13);
  });

  // ---- Footer + page numbers on every page ----
  const total = doc.internal.getNumberOfPages();
  for (let p=1; p<=total; p++){
    doc.setPage(p);
    doc.setDrawColor(COL.line); doc.line(margin, pageH-40, pageW-margin, pageH-40);
    doc.setFont('helvetica','normal'); doc.setFontSize(7.5); doc.setTextColor(COL.dim);
    doc.text(`Generado por: ${cfg.generadoPor || '—'}  |  ${fmtDateDisplay(todayISO())}  |  ${t.name}`, margin, pageH-28);
    doc.text(`Página ${p} de ${total}`, pageW-margin, pageH-28, { align:'right' });
  }

  return doc.output('blob');
}

/* ------------------------------------ SYNC (webhook auto-send) ------------------------------------ */
async function sendReportViaWebhook(r, blob, cfg){
  if (!cfg.webhookUrl) return false;
  const form = new FormData();
  form.append('file', blob, pdfFilename(r));
  form.append('meta', JSON.stringify({ tipo: REPORT_TYPES[r.typeId].name, header: r.header, correoDestino: cfg.destinoCorreo }));
  const res = await fetch(cfg.webhookUrl, { method:'POST', body: form });
  if (!res.ok) throw new Error('Webhook respondió ' + res.status);
  r.status = 'enviado'; r.sentAt = Date.now(); r.updatedAt = Date.now();
  await idbPut('reports', r);
  return true;
}

async function attemptAutoSync(){
  const cfg = await getConfig();
  if (!cfg.webhookUrl) return;
  const reports = await idbGetAll('reports');
  const pending = reports.filter(r => r.status === 'listo');
  for (const r of pending){
    try {
      const blob = buildPdfBlob(r, cfg);
      await sendReportViaWebhook(r, blob, cfg);
      toast(`Informe ${r.header.sectorPk || ''} enviado automáticamente`);
    } catch(e){ console.error('auto-sync failed for', r.id, e); }
  }
  if (ROUTE.screen === 'home' || ROUTE.screen === 'historial') render();
}

/* ------------------------------------ Service worker + init ------------------------------------ */
if ('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => console.warn('SW registration failed', err));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  if (navigator.onLine) attemptAutoSync();
});
