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
  },
  terminacion: {
    id: 'terminacion',
    short: 'Detalles de Terminación (DT)',
    name: 'INFORME DETALLES DE TERMINACIÓN INTERNOS (PREVENTIVOS)',
    code: 'INF-GOMS-CL-002 REV.0',
    icon: '🚧',
    laborLabel: 'Labor / Tramo',
    objetivoPh: 'Se realiza caminata interna preventiva para alertar desviaciones que pueden ser subsanadas antes de inspecciones en conjunto con el cliente.',
    antecedentesPh: 'Se inspecciona labor: ___, se marcan DT preventivos.'
  }
};

const CAT_KEYS = ['positiva', 'desviacion', 'correctiva'];
const CAT_LABELS = { positiva: 'Condición positiva', desviacion: 'Desviación / Hallazgo', correctiva: 'Acción correctiva' };
const CAT_COLORS = { positiva: 'var(--ok)', desviacion: 'var(--warn)', correctiva: 'var(--signal)' };

/* Seed lists of frequent observations per type/category — editable & growable via "+" in the app */
const CATALOG_DEFAULTS = {
  fortificacion: {
    positiva: ['Materiales dentro de fecha de vencimiento', 'Acopio ordenado y señalizado', 'Cantidad de pernos disponible según programa'],
    desviacion: ['Cemento / aditivo próximo a vencer', 'Falta de stock de planchuelas', 'Orden y aseo deficiente en el sector'],
    correctiva: ['Se solicita reposición de stock a bodega', 'Se reordena y señaliza el acopio']
  },
  torque: {
    positiva: ['Torque cumple valor especificado en plano', 'Perno correctamente instalado'],
    desviacion: ['Torque bajo el valor especificado', 'Perno suelto', 'Tuerca sin ajuste completo'],
    correctiva: ['Se reaprieta perno a valor especificado', 'Se reemplaza perno / tuerca']
  },
  malla: {
    positiva: ['Se instala malla de gradiente a gradiente', 'Se identifica uso de calibradores de shotcrete para respetar el espesor mínimo según sección A'],
    desviacion: ['Malla no cuenta en todo su perímetro con el traslape mínimo de 0.3m', 'Perno bajo malla'],
    correctiva: ['Se corrige traslape de malla', 'Se reinstala perno sobre malla']
  },
  shotcrete: {
    positiva: ['Espesor de shotcrete cumple lo especificado', 'Adose de malla correcto previo a proyección'],
    desviacion: ['Espesor de shotcrete bajo lo especificado', 'Shotcrete soplado en sectores puntuales'],
    correctiva: ['Se reproyecta shotcrete en sector observado']
  },
  terminacion: {
    positiva: ['Sector cumple sin observaciones'],
    desviacion: ['Perno cortado', 'Perno doblado', 'Perno largo', 'Perno sin planchuela', 'Shotcrete soplado en corona (sectores puntuales)', 'Roca a la vista (sectores puntuales)'],
    correctiva: ['Se realiza inspección interna en conjunto con operaciones', 'Se marca en terreno para subsanar oportunamente la desviación']
  }
};

/* Remembers which cond-block tab (positiva/desviacion/correctiva) was last open per
   labor card index, purely client-side, so re-rendering after adding an observation
   doesn't bounce the user back to the first tab. */
let ACTIVE_TAB = {};

/* ---------------------------------- IndexedDB ---------------------------------- */
const DB_NAME = 'goms-informes';
const DB_VER = 2;
let dbP = null;

function openDB(){
  if (dbP) return dbP;
  dbP = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VER);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('reports')) db.createObjectStore('reports', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('config')) db.createObjectStore('config', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('catalog')) db.createObjectStore('catalog', { keyPath: 'id' });
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

async function getCatalog(typeId){
  let c = await idbGet('catalog', typeId);
  if (!c){
    const d = CATALOG_DEFAULTS[typeId] || { positiva: [], desviacion: [], correctiva: [] };
    c = { id: typeId, positiva: [...d.positiva], desviacion: [...d.desviacion], correctiva: [...d.correctiva] };
    await idbPut('catalog', c);
  }
  return c;
}
async function addCatalogItem(typeId, cat, phrase){
  const c = await getCatalog(typeId);
  const exists = c[cat].some(x => x.trim().toLowerCase() === phrase.trim().toLowerCase());
  if (!exists) c[cat].push(phrase.trim());
  await idbPut('catalog', c);
  return c;
}

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
function emptyCat(){ return { sel: [], custom: '' }; }
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
  return { id: uid(), titulo: '', cats: { positiva: emptyCat(), desviacion: emptyCat(), correctiva: emptyCat() }, fotos: [] };
}
function joinCat(catObj){
  const parts = [];
  (catObj?.sel || []).forEach(s => parts.push(s));
  if (catObj?.custom && catObj.custom.trim()) parts.push(catObj.custom.trim());
  return parts;
}
function countsForReport(r){
  let positiva=0, desviacion=0, correctiva=0;
  r.labores.forEach(l => {
    positiva += joinCat(l.cats.positiva).length;
    desviacion += joinCat(l.cats.desviacion).length;
    correctiva += joinCat(l.cats.correctiva).length;
  });
  return { positiva, desviacion, correctiva };
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

/* Duplicate an existing report as a fresh draft — keeps header template, personnel,
   and the labor titles + frequently-used observations already selected, but clears
   photos, signatures, date/time and status so the crew doesn't retype everything. */
async function duplicateReport(id){
  const orig = await idbGet('reports', id);
  if (!orig) return null;
  const copy = JSON.parse(JSON.stringify(orig));
  copy.id = uid();
  copy.status = 'draft';
  copy.createdAt = Date.now();
  copy.updatedAt = Date.now();
  copy.sentAt = null;
  copy.header = { ...copy.header, fecha: todayISO(), hora: nowHM() };
  copy.personal.forEach(p => { p.firma = null; });
  copy.labores.forEach(l => { l.id = uid(); l.fotos = []; });
  await idbPut('reports', copy);
  return copy.id;
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
  document.querySelectorAll('[data-dupreport]').forEach(el => el.addEventListener('click', async (e) => {
    e.stopPropagation();
    const id = el.getAttribute('data-dupreport');
    const newId = await duplicateReport(id);
    if (newId){ toast('Informe duplicado — continúa editando'); go('wizard', { id: newId, step: 'datos' }); }
  }));
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
  const cfg = await getConfig();
  const reports = await idbGetAll('reports');
  reports.sort((a,b) => b.updatedAt - a.updatedAt);
  const groups = {};
  Object.keys(REPORT_TYPES).forEach(k => groups[k] = []);
  reports.forEach(r => { (groups[r.typeId] ||= []).push(r); });

  const cards = Object.values(REPORT_TYPES).map(t => `
    <button class="type-card" data-newtype="${t.id}">
      <span class="bar"></span>
      <span class="ic">${t.icon}</span>
      <span class="lbl">${escapeHtml(t.short)}</span>
    </button>
  `).join('');

  const boxes = Object.values(REPORT_TYPES).map(t => {
    const list = groups[t.id] || [];
    const rows = list.slice(0, 4).map(cardRow).join('');
    return `
    <div class="type-box">
      <div class="type-box-h">
        <span class="ic">${t.icon}</span>
        <span class="tb-name">${escapeHtml(t.short)}</span>
        <span class="tb-count">${list.length}</span>
      </div>
      ${list.length ? `<div class="queue-list">${rows}</div>` : `<div class="empty-hint sm">Sin informes todavía.</div>`}
    </div>`;
  }).join('');

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
        <div class="company-line"><span class="zublin-badge">ZÜBLIN</span> Contrato N° ${escapeHtml(cfg.contrato)}</div>
      </div>
    </div>

    <div class="eyebrow">Nuevo informe</div>
    <div class="grid-types">${cards}</div>

    <div class="section-title">
      <span>Informes por tipo</span>
      <span data-nav="historial" style="color:var(--signal); cursor:pointer;">Ver historial ›</span>
    </div>
    ${boxes}

    <div class="section-title" style="margin-top:8px;">
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
  <div class="report-card">
    <div class="stamp ${r.status==='draft'?'pending':'done'}" style="--sz:34px;font-size:9px;" data-openreport="${r.id}">${t.icon}</div>
    <div class="meta" data-openreport="${r.id}">
      <div class="t1">${escapeHtml(t.short)} · ${escapeHtml(r.header.sectorPk || 'sin sector')}</div>
      <div class="t2">${fmtDateDisplay(r.header.fecha)} · ${escapeHtml(r.header.turno)} · ${escapeHtml(r.header.grupo)}</div>
    </div>
    ${chip}
    <button type="button" class="dup-btn" data-dupreport="${r.id}" title="Duplicar informe">⧉</button>
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
  const list = reports.length ? reports.map(cardRow).join('') : `<div class="empty-hint">No hay informes guardados todavía.</div>`;

  return `
  ${topbar('Historial')}
  <div class="screen">
    <p class="sub">Todos los informes guardados en este dispositivo, incluidos los generados sin señal.</p>
    <div class="queue-list">${list}</div>
  </div>
  <div class="spacer"></div>`;
}
function bindHistorial(){
  document.querySelectorAll('[data-openreport]').forEach(el => el.addEventListener('click', () => {
    go('wizard', { id: el.getAttribute('data-openreport'), step: 'datos' });
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
      <button class="btn" id="btnDupVer">Duplicar</button>
    </div>
    <button class="btn btn-danger" id="btnDelVer" style="margin-top:10px;">Eliminar</button>
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
  const dupBtn = document.getElementById('btnDupVer');
  if (dupBtn) dupBtn.addEventListener('click', async () => {
    const newId = await duplicateReport(id);
    toast('Informe duplicado — continúa editando');
    go('wizard', { id: newId, step: 'datos' });
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
  else if (step === 'desarrollo') body = await stepDesarrollo(r, t);
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

async function stepDesarrollo(r, t){
  const catalog = await getCatalog(t.id);
  const cards = r.labores.map((l, idx) => laborCardHtml(l, idx, t, catalog)).join('');
  return `
  <p class="sub mb-0" style="margin-bottom:14px;">Agrega un bloque por cada ${t.laborLabel.toLowerCase()} inspeccionado. Elige observaciones frecuentes del listado o toca "＋" para agregar una nueva que quede guardada para la próxima vez.</p>
  <div id="laborList">${cards}</div>
  <button class="btn" id="btnAddLabor">+ Agregar ${t.laborLabel.toLowerCase()}</button>
  <input type="file" id="photoInput" accept="image/*" capture="environment" multiple style="display:none;">
  `;
}

function condPaneHtml(l, idx, cat, catalog, activeCat){
  const chips = (l.cats[cat].sel || []).map((c, ci) => `<span class="chip chip-${cat}">${escapeHtml(c)}<button type="button" data-rmchip="${idx}:${cat}:${ci}">×</button></span>`).join('');
  const options = (catalog[cat] || []).map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');
  return `
  <div class="cond-body" data-condpane="${idx}:${cat}" style="display:${cat===activeCat?'block':'none'}">
    <div class="chip-list">${chips || '<span class="chip-empty">Sin observaciones seleccionadas</span>'}</div>
    <div class="chip-add-row">
      <select data-addchip="${idx}:${cat}">
        <option value="">＋ Elegir observación frecuente…</option>
        ${options}
      </select>
      <button type="button" class="btn-plus" data-newcatalog="${idx}:${cat}" title="Agregar nueva observación al listado">＋</button>
    </div>
    <textarea data-laborfield="${idx}:${cat}:custom" placeholder="Otra observación (texto libre)…">${escapeHtml(l.cats[cat].custom || '')}</textarea>
  </div>`;
}

function laborCardHtml(l, idx, t, catalog){
  const fotos = l.fotos.map((f, fi) => `
    <div class="photo-thumb"><img src="${f}"><button class="del" data-delphoto="${idx}:${fi}">×</button></div>
  `).join('');
  const activeCat = ACTIVE_TAB[idx] || 'positiva';
  const tabs = CAT_KEYS.map(cat => `<button type="button" data-condtab="${idx}:${cat}" class="${cat===activeCat?'active':''}" data-k="${cat}">${CAT_LABELS[cat]}</button>`).join('');
  const panes = CAT_KEYS.map(cat => condPaneHtml(l, idx, cat, catalog, activeCat)).join('');
  return `
  <div class="labor-card" data-labor="${idx}">
    <div class="lh">
      <input type="text" data-laborfield="${idx}:titulo" value="${escapeHtml(l.titulo)}" placeholder="${escapeHtml(t.laborLabel)} — ej: GA-03 W">
      <button class="rm" data-rmlabor="${idx}">✕</button>
    </div>
    <div class="cond-block">
      <div class="cond-tabs">${tabs}</div>
      ${panes}
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

function catBlockReview(l, cat){
  const arr = joinCat(l.cats[cat]);
  if (!arr.length) return '';
  return `<p><strong style="color:${CAT_COLORS[cat]}">${CAT_LABELS[cat]}:</strong> ${escapeHtml(arr.join(' · '))}</p>`;
}

function stepRevision(r, t){
  const laboresHtml = r.labores.map(l => `
    <div class="rev-block">
      <h3>${escapeHtml(l.titulo || 'Sin título')}</h3>
      ${CAT_KEYS.map(cat => catBlockReview(l, cat)).join('')}
      <p style="color:var(--ink-faint); font-size:12px;">${l.fotos.length} fotografía(s) adjunta(s)</p>
    </div>
  `).join('') || `<p class="sub">Aún no agregaste registros de desarrollo.</p>`;

  const firmasOk = r.personal.every(p => p.firma);
  const statusChip = r.status === 'enviado' ? '<span class="status-chip sent">Enviado</span>' : r.status === 'listo' ? '<span class="status-chip ready">PDF listo</span>' : '<span class="status-chip draft">Borrador</span>';
  const counts = countsForReport(r);

  return `
  ${!firmasOk ? `<div class="banner warn">⚠ Faltan firmas por completar. Puedes generar el PDF igual, pero se recomienda firmar antes de enviar.</div>` : ''}
  <div class="kv" style="margin-bottom:10px;">
    <div><div class="k">Fecha</div><div class="v">${fmtDateDisplay(r.header.fecha)} · ${escapeHtml(r.header.hora)}</div></div>
    <div><div class="k">Turno / Grupo</div><div class="v">${escapeHtml(r.header.turno)} · ${escapeHtml(r.header.grupo)}</div></div>
    <div><div class="k">Área</div><div class="v">${escapeHtml(r.header.area)}</div></div>
    <div><div class="k">Sector / PK</div><div class="v">${escapeHtml(r.header.sectorPk||'—')}</div></div>
  </div>
  <div style="margin-bottom:12px; display:flex; gap:6px; flex-wrap:wrap;">
    ${statusChip}
    <span class="status-chip" style="background:var(--warn-dim);color:var(--warn);">${counts.desviacion} Desviaciones/Hallazgos</span>
    <span class="status-chip" style="background:var(--ok-dim);color:var(--ok);">${counts.positiva} Cond. Positivas</span>
    <span class="status-chip" style="background:var(--signal-dim);color:var(--signal);">${counts.correctiva} Acciones Correctivas</span>
  </div>

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
    ACTIVE_TAB[idx] = which;
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
      const parts = el.getAttribute('data-laborfield').split(':');
      const r = await idbGet('reports', id);
      if (parts.length === 2){
        r.labores[+parts[0]][parts[1]] = el.value;
      } else {
        ACTIVE_TAB[parts[0]] = parts[1];
        r.labores[+parts[0]].cats[parts[1]][parts[2]] = el.value;
      }
      r.updatedAt = Date.now();
      await idbPut('reports', r);
    });
  });

  document.querySelectorAll('[data-addchip]').forEach(sel => sel.addEventListener('change', async () => {
    const [idx, cat] = sel.getAttribute('data-addchip').split(':');
    const val = sel.value;
    if (!val) return;
    ACTIVE_TAB[idx] = cat;
    const r = await idbGet('reports', id);
    const arr = r.labores[+idx].cats[cat].sel;
    if (!arr.includes(val)) arr.push(val);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-rmchip]').forEach(b => b.addEventListener('click', async () => {
    const [idx, cat, ci] = b.getAttribute('data-rmchip').split(':');
    ACTIVE_TAB[idx] = cat;
    const r = await idbGet('reports', id);
    r.labores[+idx].cats[cat].sel.splice(+ci, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-newcatalog]').forEach(b => b.addEventListener('click', async () => {
    const [idx, cat] = b.getAttribute('data-newcatalog').split(':');
    const text = window.prompt(`Nueva observación frecuente — ${CAT_LABELS[cat]}:`);
    if (!text || !text.trim()) return;
    const phrase = text.trim();
    ACTIVE_TAB[idx] = cat;
    const r = await idbGet('reports', id);
    await addCatalogItem(r.typeId, cat, phrase);
    if (!r.labores[+idx].cats[cat].sel.includes(phrase)) r.labores[+idx].cats[cat].sel.push(phrase);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    toast('Observación agregada al listado');
    go('wizard', { id, step: 'desarrollo' });
  }));

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

function bannerFor(counts){
  if (counts.correctiva > 0) return { text: `INFORME CON ACCIÓN CORRECTIVA (${counts.correctiva} registro${counts.correctiva===1?'':'s'})`, color: '#c76418' };
  if (counts.desviacion > 0) return { text: `INFORME DE HALLAZGOS (${counts.desviacion} registro${counts.desviacion===1?'':'s'})`, color: '#b7302f' };
  if (counts.positiva > 0) return { text: `INFORME DE CONDICIONES POSITIVAS (${counts.positiva} registro${counts.positiva===1?'':'s'})`, color: '#1c7a45' };
  return { text: 'INFORME SIN REGISTROS', color: '#5f6d78' };
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

  const COL = {
    ink:'#141414', dim:'#5f6d78', ok:'#1c7a45', warn:'#b7302f', signal:'#c76418',
    line:'#c8ccd0', red:'#c8102e', blue:'#1a4fa0', black:'#141414'
  };
  const counts = countsForReport(r);
  const banner = bannerFor(counts);
  const CAT_PDF_LABELS = { positiva:'CONDICIÓN POSITIVA', desviacion:'DESVIACIONES / HALLAZGOS', correctiva:'ACCIÓN CORRECTIVA' };
  const CAT_PDF_COLORS = { positiva: COL.ok, desviacion: COL.warn, correctiva: COL.signal };

  function ensureSpace(h){
    if (y + h > pageH - 60){ doc.addPage(); y = margin; drawRunningHeader(); }
  }
  function drawRunningHeader(){
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(COL.dim);
    doc.text(t.name, margin, 28);
    doc.setDrawColor(COL.line); doc.line(margin, 34, pageW-margin, 34);
    y = 48;
  }
  /* Major section headings ("A.- PERSONAL EN TURNO", "1. OBJETIVO", etc.) render in the
     brand red, matching the shared report templates. Pass color:COL.black for the black
     bold sub-headings used for each labor/registro title ("3.1 GA-03 W"). */
  function heading(text, size=11.5, opts={}){
    ensureSpace(size+14);
    doc.setFont('helvetica','bold'); doc.setFontSize(size); doc.setTextColor(opts.color || COL.red);
    doc.text(text, margin, y);
    y += size*0.9 + 7;
  }
  function paragraph(text, opts={}){
    if (!text) { text = '—'; }
    doc.setFont('helvetica', opts.bold?'bold':'normal');
    doc.setFontSize(opts.size || 10);
    doc.setTextColor(opts.color || COL.ink);
    const lines = doc.splitTextToSize(text, contentW - (opts.indent||0));
    ensureSpace(lines.length * 13 + 6);
    doc.text(lines, margin + (opts.indent||0), y);
    y += lines.length * 13 + 8;
  }
  /* Category block: label + bullet list with a colored vertical accent bar on the left,
     mirroring the "CONDICIÓN POSITIVA / DESVIACIONES / ACCIÓN CORRECTIVA" blocks in the
     original templates. Skips the accent bar if a page break happened mid-block. */
  function bulletList(items, opts={}){
    if (!items.length) return;
    doc.setFont('helvetica', 'normal'); doc.setFontSize(opts.size || 10); doc.setTextColor(opts.color || COL.ink);
    items.forEach(it => {
      const lines = doc.splitTextToSize('•  ' + it, contentW - (opts.indent||0));
      ensureSpace(lines.length * 13 + 2);
      doc.text(lines, margin + (opts.indent||0), y);
      y += lines.length * 13 + 2;
    });
    y += 6;
  }
  function categoryBlock(catKey, items){
    if (!items.length) return;
    const startPage = doc.internal.getNumberOfPages();
    const startY = y;
    const indent = 12;
    ensureSpace(9+14);
    doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(CAT_PDF_COLORS[catKey]);
    doc.text(CAT_PDF_LABELS[catKey], margin+indent, y);
    y += 9*0.9 + 6;
    doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(COL.ink);
    items.forEach(it => {
      const lines = doc.splitTextToSize('•  ' + it, contentW - indent);
      ensureSpace(lines.length * 13 + 2);
      doc.text(lines, margin+indent, y);
      y += lines.length * 13 + 2;
    });
    y += 6;
    if (doc.internal.getNumberOfPages() === startPage){
      doc.setDrawColor(CAT_PDF_COLORS[catKey]); doc.setLineWidth(2);
      doc.line(margin+2, startY-9, margin+2, y-8);
      doc.setLineWidth(0.75);
    }
  }

  // ---- Cover header: red Züblin band ----
  doc.setFillColor('#e2231a'); doc.rect(0, 0, pageW, 46, 'F');
  // simulated wordmark badge
  doc.setFillColor('#ffffff'); doc.roundedRect(margin, 10, 74, 26, 4, 4, 'F');
  doc.setTextColor('#e2231a'); doc.setFont('helvetica','bold'); doc.setFontSize(13);
  doc.text('ZÜBLIN', margin + 37, 27, { align:'center' });
  doc.setTextColor('#ffffff'); doc.setFont('helvetica','bold'); doc.setFontSize(11);
  doc.text('INFORME DE PROCESOS CONSTRUCTIVOS', margin + 88, 22, { maxWidth: contentW - 88 - 130 });
  doc.setFontSize(8.5);
  doc.text(`CÓDIGO: ${t.code}`, pageW - margin, 27, { align:'right' });

  // ---- Contract band (wraps to 2 lines if needed so nothing gets cut off) ----
  doc.setFont('helvetica','normal'); doc.setFontSize(7.3);
  const contractLine = `Contrato N° ${cfg.contrato} — "${cfg.obra}" — Empresa Contratista: ${cfg.empresaContratista}`;
  const contractLines = doc.splitTextToSize(contractLine, contentW).slice(0, 2);
  const bandH = contractLines.length > 1 ? 32 : 22;
  doc.setFillColor('#141414'); doc.rect(0, 46, pageW, bandH, 'F');
  doc.setTextColor('#d5d8db');
  contractLines.forEach((ln, i) => doc.text(ln, margin, 58 + i*10));

  y = 46 + bandH + 14;

  // ---- Category banner (pill, full width) ----
  doc.setFillColor(banner.color); doc.roundedRect(margin, y, contentW, 22, 11, 11, 'F');
  doc.setTextColor('#ffffff'); doc.setFont('helvetica','bold'); doc.setFontSize(10);
  doc.text(banner.text, pageW/2, y + 15, { align:'center' });
  y += 22 + 16;

  // ---- Title ----
  doc.setFont('helvetica','bold'); doc.setFontSize(14); doc.setTextColor(COL.black);
  doc.text(t.name, margin, y, { maxWidth: contentW });
  y += 20;
  doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(COL.dim);
  doc.text('D E P A R T A M E N T O   D E   C A L I D A D', margin, y);
  y += 22;

  // ---- Info list (plain single column, no box — matches the original templates) ----
  const infoRows = [
    ['FECHA:', fmtDateDisplay(r.header.fecha)], ['HORA:', r.header.hora],
    ['TURNO:', r.header.turno], ['GRUPO:', r.header.grupo],
    ['ÁREA:', r.header.area], ['PROCESO:', r.header.proceso || '—'],
    ['SECTOR / PK:', r.header.sectorPk || '—'],
  ];
  infoRows.forEach(row => {
    doc.setFont('helvetica','bold'); doc.setFontSize(9.5); doc.setTextColor(COL.black);
    doc.text(row[0], margin, y);
    doc.setFont('helvetica','normal'); doc.setFontSize(9.5); doc.setTextColor(COL.black);
    doc.text(String(row[1]), margin + 92, y);
    y += 16;
  });
  y += 10;

  // ---- Stat pills ----
  const pillW = (contentW - 16)/3;
  const pills = [
    { label:`${counts.desviacion} Desviaciones/Hallazgos`, color: COL.warn },
    { label:`${counts.positiva} Condiciones Positivas`, color: COL.ok },
    { label:`${counts.correctiva} Acciones Correctivas`, color: COL.signal }
  ];
  pills.forEach((p, i) => {
    const x = margin + i*(pillW+8);
    doc.setFillColor(p.color); doc.roundedRect(x, y, pillW, 20, 10, 10, 'F');
    doc.setTextColor('#ffffff'); doc.setFont('helvetica','bold'); doc.setFontSize(7.8);
    doc.text(p.label, x + pillW/2, y + 13.5, { align:'center' });
  });
  y += 20 + 18;

  // ---- Personal en turno ----
  heading('A.- PERSONAL EN TURNO');
  r.personal.forEach((p, i) => paragraph(`${i+1}.- ${p.nombre || '(sin nombre)'} (${p.cargo}).`));
  y += 4;

  // ---- Resumen ----
  heading('RESUMEN DEL TURNO');
  heading('1. OBJETIVO', 10.5); paragraph(r.objetivo);
  heading('2. ANTECEDENTES', 10.5); paragraph(r.antecedentes);

  // ---- Desarrollo ----
  heading('3. DESARROLLO — REGISTROS DEL TURNO');
  if (!r.labores.length) paragraph('Sin registros ingresados.');
  r.labores.forEach((l, li) => {
    heading(l.titulo || `Registro ${li+1}`, 10.5, { color: COL.black });
    const pos = joinCat(l.cats.positiva), dev = joinCat(l.cats.desviacion), cor = joinCat(l.cats.correctiva);
    categoryBlock('positiva', pos);
    categoryBlock('desviacion', dev);
    categoryBlock('correctiva', cor);
    if (l.fotos.length) paragraph(`Ver Anexo ${li+1} (${l.fotos.length} fotografía(s)).`, { size:9, color: COL.dim, indent:12 });
    y += 4;
  });

  // ---- Conclusiones ----
  heading('4. CONCLUSIONES');
  bulletList(r.conclusiones ? [r.conclusiones] : []);
  if (!r.conclusiones) paragraph('—');

  // ---- Evidencia adjunta ----
  heading('5. EVIDENCIA ADJUNTA');
  if (r.labores.some(l=>l.fotos.length)){
    const items = r.labores.filter(l=>l.fotos.length).map((l, i) => `Anexo ${r.labores.indexOf(l)+1}: Fotografías — ${l.titulo || 'Registro '+(r.labores.indexOf(l)+1)}.`);
    bulletList(items);
  } else paragraph('Sin fotografías adjuntas.');

  // ---- Anexo photo pages ----
  r.labores.forEach((l, li) => {
    if (!l.fotos.length) return;
    doc.addPage(); y = margin;
    doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.setTextColor(COL.blue);
    doc.text(`Anexo ${li+1}: Fotografías — ${l.titulo || 'Registro '+(li+1)}`, margin, y, { maxWidth: contentW });
    y += 26;
    const gap = 10, cellW = (contentW - gap)/2, cellH = 150;
    l.fotos.forEach((f, fi) => {
      const col = fi % 2, row = Math.floor(fi/2);
      if (col === 0 && row > 0 && y + cellH > pageH - 50){ doc.addPage(); y = margin; }
      const x = margin + col*(cellW+gap);
      const yy = y + row*(cellH+gap);
      try { doc.addImage(f, 'JPEG', x, yy, cellW, cellH, undefined, 'FAST'); } catch(e){ /* ignore malformed image */ }
    });
    const rows = Math.ceil(l.fotos.length/2);
    y += rows*(cellH+gap);
  });

  // ---- Firmas page ----
  doc.addPage(); y = margin;
  doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.setTextColor(COL.red);
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
