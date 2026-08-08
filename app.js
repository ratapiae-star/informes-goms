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
  },
  cambioturno: {
    id: 'cambioturno',
    short: 'Cambio de Turno Diario',
    name: 'REPORTE DE ACTIVIDADES DIARIAS',
    code: 'INF-GOMS-CL-001',
    icon: '🔄',
    kind: 'turno', // uses the alternate section-based data model + PDF layout (see TURNO_SECTIONS)
    laborLabel: 'Frente'
  }
};

/* ---------------------------- Cambio de turno diario: section catalog ----------------------------
   This report type doesn't use the labor/cats model of the other 4 reports — it mirrors the
   original "REPORTE DE ACTIVIDADES DIARIAS" template (A.-PERSONAL EN TURNO … G.-OTROS). Each
   section below is a growable list; every list gets its own "＋" to add a blank row, and any
   field marked with a `catalog` key gets a "frecuentes" dropdown + a "＋" to permanently save a
   new value into that catalog (goms-informes catalog store, key 'cambioturno') so it's offered
   again on the next informe — the same growable-catalog pattern used elsewhere in the app. */
const TURNO_SECTIONS = {
  frentes: {
    title: 'B.- Revisión frentes / protocolización', addLabel: '+ Agregar frente / protocolo',
    fields: [
      { key:'ubicacion', label:'Ubicación / frente', type:'text', catalog:'ubicaciones', ph:'Ej: NP C-49W /Z16 N51' },
      { key:'detalle',   label:'Detalle',            type:'textarea', catalog:'detalles', ph:'Ej: Lechado de pernos + malla ( falta mensura )' },
      { key:'protocolo', label:'ID protocolo (opcional)', type:'text', ph:'Ej: 0185' }
    ]
  },
  laboratorio: {
    title: 'C.- Laboratorio', addLabel: '+ Agregar registro de laboratorio',
    fields: [
      { key:'cantidad', label:'Cantidad de ensayos', type:'select', options: Array.from({length:20}, (_,i)=>String(i+1)) },
      { key:'tipoEnsayo', label:'Tipo de ensayo', type:'text', catalog:'tiposEnsayo', ph:'Ej: Tracción de pernos' },
      { key:'detalle', label:'Detalle (opcional)', type:'textarea', ph:'Ej: En GAL EST NORTE, Pk 3,6, parada 4, perno 15.' }
    ]
  },
  tabla: {
    title: 'D.- Observaciones adicionales — tabla de protocolos', addLabel: '+ Agregar fila a la tabla',
    fields: [
      { key:'protocolo', label:'ID protocolo', type:'text', ph:'Ej: 0185' },
      { key:'ubicacion', label:'Ubicación', type:'text', catalog:'ubicaciones', ph:'Ej: C-49W / Z16' },
      { key:'estatus',   label:'Estatus',   type:'textarea', catalog:'estatus', ph:'Ej: Lechado pernos + malla ( falta mensura )' }
    ]
  },
  observaciones: {
    title: 'D.- Observaciones adicionales — notas', addLabel: '+ Agregar nota',
    fields: [
      { key:'texto', label:'Nota', type:'textarea', catalog:'observaciones', ph:'Ej: 07 protocolos en JEJ. Para firmas ID: 0123A, 0140…' }
    ]
  },
  caminatas: {
    title: 'E.- Caminatas', addLabel: '+ Agregar línea',
    fields: [ { key:'texto', label:'Caminata', type:'text', catalog:'caminatas', ph:'Ej: Sin Caminatas.' } ]
  },
  cierreDT: {
    title: 'F.- Cierre DT', addLabel: '+ Agregar línea',
    fields: [ { key:'texto', label:'Cierre DT', type:'text', catalog:'cierreDT', ph:'Ej: Sin cierre DT.' } ]
  }
};
const TURNO_SECTION_KEYS = Object.keys(TURNO_SECTIONS);
function emptyTurnoData(){
  const d = { otros: '' };
  TURNO_SECTION_KEYS.forEach(k => d[k] = []);
  return d;
}
function newTurnoItem(sectionKey){
  const item = { id: uid() };
  TURNO_SECTIONS[sectionKey].fields.forEach(f => item[f.key] = '');
  return item;
}

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
  },
  cambioturno: {
    ubicaciones: ['NP C-49W /Z16 N51', 'NP C-49W CAB N52', 'NP C-51 W N52', 'NP GAL ESTACIONAMIENTO N N52', 'C-53 EXTENCION', 'NH C-43W', 'FR INY N51 15', 'FRM E 01', 'RAC A 02', 'RAC A 01'],
    detalles: ['Lechado de pernos + malla ( falta mensura )', 'Repaso SH ( recuperar primera guía y de repaso )', 'Shotcrete de sello ( recuperar guía )', 'Shotcrete de sello ( falta mensura )', 'Lechado + malla parcial ( falta mensura )', 'Adose de malla + SH', 'Malla + SH ( Recuperar guía )', 'SH de Sello ( Falta mensura, y guía )', 'Perforación parcial de pernos ( recuperar guía de sello )'],
    laboratorio: ['Tracción de pernos', 'Espesor de shotcrete'],
    tiposEnsayo: ['Espesores', 'Tracción de pernos', 'Docilidad', 'Absorción de energía', 'Panel compresión', 'Edades tempranas', '% de rechazo', 'Aforo Roboshot', 'Adherencia'],
    estatus: ['Malla lista', 'Malla adosada', 'SH sobre malla ( falta guía )', 'Falta guía SH sello', 'Falta guía SH último avance', 'Lechado pernos + malla ( falta mensura )', 'Sh de Sello ( falta guía )', 'Malla parcial ( falta mensura )', 'Sh de Sello ( falta guía, falta mensura )', 'DESQUINCHE'],
    observaciones: ['protocolos en JEJ para firmas', 'protocolos para firma JEJ', 'protocolos en proceso corrección', 'protocolos en proceso'],
    caminatas: ['Sin Caminatas.'],
    cierreDT: ['Sin cierre DT.']
  }
};
/* Every "labor kind" report type also gets a growable catalog for Sector, PK, Objetivo,
   Antecedentes and Conclusiones — the same "select a frequent value or ＋ to save a new
   one" pattern used for observaciones, applied to these single-value fields too, so a
   phrase typed once stays available for every future informe of that type. Objetivo and
   Antecedentes start pre-seeded with that type's own placeholder text as a first option. */
['fortificacion', 'torque', 'malla', 'shotcrete', 'terminacion'].forEach(id => {
  const d = CATALOG_DEFAULTS[id];
  d.sector = d.sector || [];
  d.pk = d.pk || [];
  d.objetivo = [REPORT_TYPES[id].objetivoPh];
  d.antecedentes = [REPORT_TYPES[id].antecedentesPh];
  d.conclusiones = d.conclusiones || [];
});

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
  const d = CATALOG_DEFAULTS[typeId] || { positiva: [], desviacion: [], correctiva: [] };
  let c = await idbGet('catalog', typeId);
  if (!c){
    c = { id: typeId };
    Object.keys(d).forEach(k => c[k] = [...d[k]]);
    await idbPut('catalog', c);
  } else {
    // Backfill any category keys a newer version of the app added to this type's
    // defaults, without touching what the user already saved (e.g. an app update
    // that adds a new "＋" list to an existing report type).
    let changed = false;
    Object.keys(d).forEach(k => { if (!c[k]){ c[k] = [...d[k]]; changed = true; } });
    if (changed) await idbPut('catalog', c);
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
  const t = REPORT_TYPES[typeId];
  const r = {
    id: uid(),
    typeId,
    status: 'draft', // draft -> listo -> enviado
    createdAt: Date.now(),
    updatedAt: Date.now(),
    header: { fecha: todayISO(), hora: nowHM(), turno: 'DIA', grupo: 'G1', area: 'MINERIA', proceso: '', sector: '', pk: '', sectorPk: '' },
    personal: [ { nombre:'', cargo:'Inspector de Calidad', firma:null }, { nombre:'', cargo:'Inspector de Calidad', firma:null } ],
    objetivo: '',
    antecedentes: '',
    labores: [],
    conclusiones: '',
    sentAt: null,
    pdfMeta: null
  };
  if (t && t.kind === 'turno') r.turno = emptyTurnoData();
  return r;
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
/* "Cambio de Turno Diario" follows its own template (no objetivo/antecedentes or
   conclusiones sections in the original document), so it skips those two steps. */
const WIZ_STEPS_TURNO = ['datos','personal','desarrollo','firmas','revision'];
const WIZ_TITLES = {
  datos: 'Datos generales', personal: 'Personal en turno', resumen: 'Resumen del turno',
  desarrollo: 'Desarrollo — registros', conclusiones: 'Conclusiones', firmas: 'Firmas',
  revision: 'Revisión y envío'
};
function wizStepsFor(t){ return (t && t.kind === 'turno') ? WIZ_STEPS_TURNO : WIZ_STEPS; }

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
  const steps = wizStepsFor(t);
  const stepIdx = steps.indexOf(step);
  const progress = steps.map((s,i) => `<div class="seg-p ${i<=stepIdx?'on':''}"></div>`).join('');
  const isTurno = t.kind === 'turno';
  // Sector/PK/Objetivo/Antecedentes/Conclusiones all use the growable-catalog field —
  // fetch that type's catalog once for whichever step needs it.
  const needsFieldCatalog = !isTurno && ['datos','resumen','conclusiones'].includes(step);
  const catalog = needsFieldCatalog ? await getCatalog(t.id) : null;

  let body = '';
  if (step === 'datos') body = stepDatos(r, t, catalog);
  else if (step === 'personal') body = stepPersonal(r);
  else if (step === 'resumen') body = stepResumen(r, t, catalog);
  else if (step === 'desarrollo') body = isTurno ? await stepDesarrolloTurno(r, t) : await stepDesarrollo(r, t);
  else if (step === 'conclusiones') body = stepConclusiones(r, catalog);
  else if (step === 'firmas') body = stepFirmas(r);
  else if (step === 'revision') body = isTurno ? stepRevisionTurno(r, t) : stepRevision(r, t);

  const isFirst = stepIdx === 0;
  const isLast = stepIdx === steps.length - 1;

  return `
  ${topbar(t.short, { backTo: isFirst ? 'home' : null })}
  <div class="screen">
    <div class="progress">${progress}</div>
    <div class="eyebrow">Paso ${stepIdx+1} de ${steps.length}</div>
    <div class="h-page" style="font-size:22px;">${WIZ_TITLES[step]}</div>
    <div id="stepBody">${body}</div>
  </div>
  <div class="fab-bar">
    ${!isFirst ? `<button class="btn" id="btnPrev">‹ Atrás</button>` : `<button class="btn" data-nav="home">Guardar y salir</button>`}
    ${!isLast ? `<button class="btn btn-primary" id="btnNext">Continuar ›</button>` : ''}
  </div>
  `;
}

/* Generic "single value with a growable catalog" field: a normal input/textarea plus a
   "frecuentes" dropdown and a "＋" that saves whatever is CURRENTLY typed into that field
   into its catalog (idb catalog store, keyed by report typeId + catKey), so it shows up as
   an option next time. Used for Sector, PK, Objetivo, Antecedentes and Conclusiones — any
   single-value field where the same phrase tends to repeat across future informes. */
function catFieldHtml(inputId, catKey, value, catalogOptions, opts={}){
  const val = escapeHtml(value || '');
  const input = opts.textarea
    ? `<textarea id="${inputId}" placeholder="${escapeHtml(opts.ph||'')}">${val}</textarea>`
    : `<input type="text" id="${inputId}" value="${val}" placeholder="${escapeHtml(opts.ph||'')}">`;
  const options = (catalogOptions||[]).map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');
  return `
  <div class="field">
    ${opts.label ? `<label>${escapeHtml(opts.label)}</label>` : ''}
    ${input}
    <div class="chip-add-row">
      <select data-catfieldselect="${inputId}:${catKey}">
        <option value="">＋ Elegir frecuente…</option>
        ${options}
      </select>
      <button type="button" class="btn-plus" data-catfieldnew="${inputId}:${catKey}" title="Guardar el valor actual en el listado para futuros informes">＋</button>
    </div>
  </div>`;
}

function stepDatos(r, t, catalog){
  const h = r.header;
  const isTurno = t && t.kind === 'turno';
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
  ${isTurno ? '' : `
  <div class="row2">
    <div class="field"><label>Grupo</label>
      <select id="fGrupo">
        ${['G1','G2','G3','G4'].map(g=>`<option value="${g}" ${h.grupo===g?'selected':''}>${g}</option>`).join('')}
      </select>
    </div>
    <div class="field"><label>Área</label><input type="text" id="fArea" value="${escapeHtml(h.area)}"></div>
  </div>
  <div class="field"><label>Proceso</label><input type="text" id="fProceso" value="${escapeHtml(h.proceso)}" placeholder="Ej: Instalación de malla / Adose de malla"></div>
  ${catFieldHtml('fSector', 'sector', h.sector, catalog?.sector, { label:'Sector', ph:'Ej: GA-03 W' })}
  ${catFieldHtml('fPk', 'pk', h.pk, catalog?.pk, { label:'PK', ph:'Ej: Pk 3,6' })}
  `}
  `;
}

function stepPersonal(r){
  return r.personal.map((p,i) => `
    <div class="field"><label>Inspector ${i+1} — Nombre</label><input type="text" id="pNom${i}" value="${escapeHtml(p.nombre)}" placeholder="Nombre y apellido"></div>
    <div class="field" style="margin-bottom:24px;"><label>Cargo</label><input type="text" id="pCargo${i}" value="${escapeHtml(p.cargo)}"></div>
  `).join('');
}

function stepResumen(r, t, catalog){
  return `
  ${catFieldHtml('fObjetivo', 'objetivo', r.objetivo, catalog?.objetivo, { textarea:true, ph: t.objetivoPh, label:'1. Objetivo' })}
  ${catFieldHtml('fAntecedentes', 'antecedentes', r.antecedentes, catalog?.antecedentes, { textarea:true, ph: t.antecedentesPh, label:'2. Antecedentes' })}
  `;
}

async function stepDesarrollo(r, t){
  const catalog = await getCatalog(t.id);
  /* Cumulative counter (positiva/desviacion/correctiva) so the chip numbers keep adding up
     across every registro in the order they appear — same numbering the PDF ends up using. */
  const numCounter = { positiva:0, desviacion:0, correctiva:0 };
  const cards = r.labores.map((l, idx) => laborCardHtml(l, idx, t, catalog, numCounter)).join('');
  return `
  <p class="sub mb-0" style="margin-bottom:14px;">Agrega un bloque por cada ${t.laborLabel.toLowerCase()} inspeccionado. Elige observaciones frecuentes del listado o toca "＋" para agregar una nueva que quede guardada para la próxima vez.</p>
  <div id="laborList">${cards}</div>
  <button class="btn" id="btnAddLabor">+ Agregar ${t.laborLabel.toLowerCase()}</button>
  <input type="file" id="photoInput" accept="image/*" capture="environment" multiple style="display:none;">
  `;
}

function condPaneHtml(l, idx, cat, catalog, activeCat, counter){
  const chips = (l.cats[cat].sel || []).map((c, ci) => {
    const n = ++counter[cat];
    return `<span class="chip chip-${cat}"><b class="chip-num">${n}.</b> ${escapeHtml(c)}<button type="button" data-rmchip="${idx}:${cat}:${ci}">×</button></span>`;
  }).join('');
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

function laborCardHtml(l, idx, t, catalog, numCounter){
  const fotos = l.fotos.map((f, fi) => `
    <div class="photo-thumb"><img src="${f}"><button class="del" data-delphoto="${idx}:${fi}">×</button></div>
  `).join('');
  const activeCat = ACTIVE_TAB[idx] || 'positiva';
  const tabs = CAT_KEYS.map(cat => `<button type="button" data-condtab="${idx}:${cat}" class="${cat===activeCat?'active':''}" data-k="${cat}">${CAT_LABELS[cat]}</button>`).join('');
  const panes = CAT_KEYS.map(cat => condPaneHtml(l, idx, cat, catalog, activeCat, numCounter)).join('');
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

/* ---- Cambio de Turno Diario: section rendering (uses r.turno, not r.labores) ---- */
function turnoFieldHtml(sectionKey, idx, f, item){
  const val = escapeHtml(item[f.key] || '');
  let input;
  if (f.type === 'select'){
    const opts = (f.options||[]).map(o => `<option value="${escapeHtml(o)}" ${item[f.key]===o?'selected':''}>${escapeHtml(o)}</option>`).join('');
    input = `<select data-turnofield="${sectionKey}:${idx}:${f.key}"><option value="">Elegir…</option>${opts}</select>`;
  } else if (f.type === 'textarea'){
    input = `<textarea data-turnofield="${sectionKey}:${idx}:${f.key}" placeholder="${escapeHtml(f.ph||'')}">${val}</textarea>`;
  } else {
    input = `<input type="text" data-turnofield="${sectionKey}:${idx}:${f.key}" value="${val}" placeholder="${escapeHtml(f.ph||'')}">`;
  }
  const catalogRow = f.catalog ? `
    <div class="chip-add-row">
      <select data-turnoaddcat="${sectionKey}:${idx}:${f.key}:${f.catalog}">
        <option value="">＋ Elegir frecuente…</option>
      </select>
      <button type="button" class="btn-plus" data-turnonewcat="${sectionKey}:${idx}:${f.key}:${f.catalog}" title="Guardar este valor en el listado para el próximo informe">＋</button>
    </div>` : '';
  return `<div class="field"><label>${escapeHtml(f.label)}</label>${input}${catalogRow}</div>`;
}
/* catalog options are injected after the fact (per section, not per field) via
   fillTurnoCatalogOptions() below so this stays a pure string-builder. */
function turnoItemCardHtml(sectionKey, item, idx){
  const def = TURNO_SECTIONS[sectionKey];
  const fieldsHtml = def.fields.map(f => turnoFieldHtml(sectionKey, idx, f, item)).join('');
  return `
  <div class="labor-card" data-turnoitem="${sectionKey}:${idx}">
    <div class="lh">
      <span style="flex:1; font-family:var(--font-display); font-size:14px; text-transform:uppercase; color:var(--ink-dim);">Registro ${idx+1}</span>
      <button class="rm" data-rmturno="${sectionKey}:${idx}">✕</button>
    </div>
    ${fieldsHtml}
  </div>`;
}
function turnoSectionHtml(sectionKey, r){
  const def = TURNO_SECTIONS[sectionKey];
  const items = r.turno[sectionKey] || [];
  const cards = items.map((it, idx) => turnoItemCardHtml(sectionKey, it, idx)).join('');
  return `
  <div class="section-title" style="margin-top:18px;">${escapeHtml(def.title)}</div>
  ${cards || '<div class="empty-hint sm">Sin registros todavía.</div>'}
  <button type="button" class="btn" data-turnoadd="${sectionKey}">${escapeHtml(def.addLabel)}</button>
  `;
}
/* Fills every catalog <select> in the rendered HTML with the saved catalog options —
   run right after the section HTML is inserted into stepDesarrolloTurno's output, since
   options depend on an async getCatalog() read. Keeping option-building here (instead of
   threading the catalog object through every string builder above) keeps the templates simple. */
function turnoCatalogOptionsHtml(list){
  return (list || []).map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');
}
async function stepDesarrolloTurno(r, t){
  const catalog = await getCatalog(t.id);
  const sections = TURNO_SECTION_KEYS.map(k => turnoSectionHtml(k, r)).join('');
  // Inject catalog options into each select's placeholder markup.
  let html = `
  <p class="sub mb-0" style="margin-bottom:14px;">Registra cada sección del cambio de turno. Elige un valor frecuente del listado o toca "＋" para guardarlo y que quede disponible en el próximo informe.</p>
  ${sections}
  <div class="section-title" style="margin-top:18px;">G.- Otros</div>
  <div class="field"><textarea id="fTurnoOtros" placeholder="Ej: Sin actividades en FASE 3 referente a pernos cables.">${escapeHtml(r.turno.otros||'')}</textarea></div>
  `;
  html = html.replace(/<select data-turnoaddcat="([^"]+)">\s*<option value="">＋ Elegir frecuente…<\/option>\s*<\/select>/g,
    (m, key) => {
      const catKey = key.split(':')[3];
      return `<select data-turnoaddcat="${key}"><option value="">＋ Elegir frecuente…</option>${turnoCatalogOptionsHtml(catalog[catKey])}</select>`;
    });
  return html;
}

function stepConclusiones(r, catalog){
  return catFieldHtml('fConclusiones', 'conclusiones', r.conclusiones, catalog?.conclusiones, {
    textarea:true, label:'Conclusiones',
    ph:'Resume el resultado final: cumple / no cumple, y cualquier acción pendiente.'
  });
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

function catBlockReview(l, cat, counter){
  const arr = joinCat(l.cats[cat]);
  if (!arr.length) return '';
  const numbered = arr.map(it => { counter[cat] += 1; return `${counter[cat]}.- ${it}`; });
  return `<p><strong style="color:${CAT_COLORS[cat]}">${CAT_LABELS[cat]}:</strong> ${escapeHtml(numbered.join(' · '))}</p>`;
}

function stepRevision(r, t){
  /* Cumulative counters so numbering keeps adding up across every registro, matching the PDF. */
  const revCounter = { positiva:0, desviacion:0, correctiva:0 };
  const laboresHtml = r.labores.map(l => `
    <div class="rev-block">
      <h3>${escapeHtml(l.titulo || 'Sin título')}</h3>
      ${CAT_KEYS.map(cat => catBlockReview(l, cat, revCounter)).join('')}
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

function stepRevisionTurno(r, t){
  const secHtml = TURNO_SECTION_KEYS.map(k => {
    const def = TURNO_SECTIONS[k];
    const items = r.turno[k] || [];
    const lines = items
      .map(it => def.fields.map(f => it[f.key]).filter(Boolean).join(' — '))
      .filter(Boolean);
    return `<div class="rev-block"><h3>${escapeHtml(def.title)}</h3>${
      lines.length ? lines.map((l,i) => `<p>${i+1}.- ${escapeHtml(l)}</p>`).join('') : '<p style="color:var(--ink-faint);">Sin registros.</p>'
    }</div>`;
  }).join('');

  const firmasOk = r.personal.every(p => p.firma);
  const statusChip = r.status === 'enviado' ? '<span class="status-chip sent">Enviado</span>' : r.status === 'listo' ? '<span class="status-chip ready">PDF listo</span>' : '<span class="status-chip draft">Borrador</span>';

  return `
  ${!firmasOk ? `<div class="banner warn">⚠ Faltan firmas por completar. Puedes generar el PDF igual, pero se recomienda firmar antes de enviar.</div>` : ''}
  <div class="kv" style="margin-bottom:10px;">
    <div><div class="k">Fecha</div><div class="v">${fmtDateDisplay(r.header.fecha)} · ${escapeHtml(r.header.hora)}</div></div>
    <div><div class="k">Turno</div><div class="v">${escapeHtml(r.header.turno)}</div></div>
  </div>
  <div style="margin-bottom:12px;">${statusChip}</div>

  <div class="rev-block"><h3>A.- Personal en turno</h3>${r.personal.map((p,i)=>`<p>${i+1}.- ${escapeHtml(p.nombre||'(sin nombre)')} (${escapeHtml(p.cargo)}).</p>`).join('')}</div>
  ${secHtml}
  <div class="rev-block"><h3>G.- Otros</h3><p>${escapeHtml(r.turno.otros || '—')}</p></div>

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
async function bindWizard(id, step){
  const r = await idbGet('reports', id);
  const t = r ? REPORT_TYPES[r.typeId] : null;
  const steps = wizStepsFor(t);
  const stepIdx = steps.indexOf(step);
  const isTurno = t && t.kind === 'turno';

  document.getElementById('btnNext')?.addEventListener('click', async () => {
    await persistCurrentStep(id, step);
    go('wizard', { id, step: steps[stepIdx+1] });
  });
  document.getElementById('btnPrev')?.addEventListener('click', async () => {
    await persistCurrentStep(id, step);
    go('wizard', { id, step: steps[stepIdx-1] });
  });
  const backBtn = document.querySelector('.topbar .back');
  if (backBtn) backBtn.addEventListener('click', async (e) => {
    e.stopPropagation();
    await persistCurrentStep(id, step);
  });

  if (step === 'datos') { bindDatos(); bindCatFields(id); }
  if (step === 'resumen') bindCatFields(id);
  if (step === 'conclusiones') bindCatFields(id);
  if (step === 'desarrollo') { if (isTurno) bindDesarrolloTurno(id); else bindDesarrollo(id); }
  if (step === 'firmas') bindFirmas(id);
  if (step === 'revision') bindRevision(id);
}

function bindDatos(){
  document.querySelectorAll('[data-turno]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('[data-turno]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  }));
}

/* Maps a catFieldHtml() input id to where its value lives on the report object, and
   applies it. Sector/PK also keep header.sectorPk in sync for the existing display/PDF
   code (home cards, historial, PDF header row, filename) that already reads that field. */
function applyCatFieldValue(r, inputId, value){
  if (inputId === 'fSector'){ r.header.sector = value; r.header.sectorPk = [r.header.sector, r.header.pk].filter(Boolean).join(' / '); }
  else if (inputId === 'fPk'){ r.header.pk = value; r.header.sectorPk = [r.header.sector, r.header.pk].filter(Boolean).join(' / '); }
  else if (inputId === 'fObjetivo') r.objetivo = value;
  else if (inputId === 'fAntecedentes') r.antecedentes = value;
  else if (inputId === 'fConclusiones') r.conclusiones = value;
}

/* Binds every catFieldHtml() instance on the current step: choosing a "frecuente" value
   fills the field and saves it right away; "＋" saves whatever is currently typed into
   that field into its catalog so it's offered as a "frecuente" option on future informes. */
function bindCatFields(id){
  document.querySelectorAll('[data-catfieldselect]').forEach(sel => sel.addEventListener('change', async () => {
    const [inputId, catKey] = sel.getAttribute('data-catfieldselect').split(':');
    const val = sel.value;
    if (!val) return;
    const el = document.getElementById(inputId);
    if (el) el.value = val;
    const r = await idbGet('reports', id);
    applyCatFieldValue(r, inputId, val);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  }));

  document.querySelectorAll('[data-catfieldnew]').forEach(b => b.addEventListener('click', async () => {
    const [inputId, catKey] = b.getAttribute('data-catfieldnew').split(':');
    const el = document.getElementById(inputId);
    const value = (el?.value || '').trim();
    if (!value){ toast('Escribe un valor en el campo antes de guardarlo en el listado'); return; }
    const r = await idbGet('reports', id);
    await addCatalogItem(r.typeId, catKey, value);
    applyCatFieldValue(r, inputId, value);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    toast('Guardado en el listado para futuros informes');
    go('wizard', { id, step: ROUTE.params.step });
  }));
}

async function persistCurrentStep(id, step){
  const r = await idbGet('reports', id);
  if (!r) return;
  if (step === 'datos'){
    r.header.fecha = document.getElementById('fFecha').value || r.header.fecha;
    r.header.hora = document.getElementById('fHora').value || r.header.hora;
    r.header.turno = document.querySelector('[data-turno].active')?.getAttribute('data-turno') || r.header.turno;
    const gEl = document.getElementById('fGrupo'); if (gEl) r.header.grupo = gEl.value;
    const aEl = document.getElementById('fArea'); if (aEl) r.header.area = aEl.value;
    const pEl = document.getElementById('fProceso'); if (pEl) r.header.proceso = pEl.value;
    const secEl = document.getElementById('fSector'); if (secEl) r.header.sector = secEl.value;
    const pkEl = document.getElementById('fPk'); if (pkEl) r.header.pk = pkEl.value;
    if (secEl || pkEl) r.header.sectorPk = [r.header.sector, r.header.pk].filter(Boolean).join(' / ');
  } else if (step === 'personal'){
    r.personal.forEach((p, i) => {
      p.nombre = document.getElementById(`pNom${i}`).value;
      p.cargo = document.getElementById(`pCargo${i}`).value;
    });
  } else if (step === 'resumen'){
    r.objetivo = document.getElementById('fObjetivo').value;
    r.antecedentes = document.getElementById('fAntecedentes').value;
  } else if (step === 'desarrollo'){
    // labor/turno list fields are persisted live via their own handlers; only the plain
    // "G.- Otros" textarea (cambio de turno) needs to be picked up here.
    const otrosEl = document.getElementById('fTurnoOtros');
    if (otrosEl && r.turno) r.turno.otros = otrosEl.value;
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

function bindDesarrolloTurno(id){
  document.querySelectorAll('[data-turnoadd]').forEach(el => el.addEventListener('click', async () => {
    const sectionKey = el.getAttribute('data-turnoadd');
    const r = await idbGet('reports', id);
    r.turno[sectionKey].push(newTurnoItem(sectionKey));
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-rmturno]').forEach(el => el.addEventListener('click', async () => {
    const [sectionKey, idxStr] = el.getAttribute('data-rmturno').split(':');
    const r = await idbGet('reports', id);
    r.turno[sectionKey].splice(+idxStr, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-turnofield]').forEach(el => {
    el.addEventListener('change', async () => {
      const [sectionKey, idxStr, key] = el.getAttribute('data-turnofield').split(':');
      const r = await idbGet('reports', id);
      if (!r.turno[sectionKey][+idxStr]) return;
      r.turno[sectionKey][+idxStr][key] = el.value;
      r.updatedAt = Date.now();
      await idbPut('reports', r);
    });
  });

  document.querySelectorAll('[data-turnoaddcat]').forEach(sel => sel.addEventListener('change', async () => {
    const [sectionKey, idxStr, key] = sel.getAttribute('data-turnoaddcat').split(':');
    const val = sel.value;
    if (!val) return;
    const r = await idbGet('reports', id);
    r.turno[sectionKey][+idxStr][key] = val;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  // The "＋" next to each catalog dropdown: prompts for a brand-new value, saves it into
  // that field's catalog (so it shows up in the dropdown on this and future informes of
  // this type), and applies it to the current row right away.
  document.querySelectorAll('[data-turnonewcat]').forEach(b => b.addEventListener('click', async () => {
    const [sectionKey, idxStr, key, catKey] = b.getAttribute('data-turnonewcat').split(':');
    const text = window.prompt('Nuevo valor — quedará guardado para elegirlo en futuros informes:');
    if (!text || !text.trim()) return;
    const phrase = text.trim();
    const r = await idbGet('reports', id);
    await addCatalogItem(r.typeId, catKey, phrase);
    if (!r.turno[sectionKey][+idxStr]) r.turno[sectionKey][+idxStr] = newTurnoItem(sectionKey);
    r.turno[sectionKey][+idxStr][key] = phrase;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    toast('Valor agregado al listado para futuros informes');
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.getElementById('fTurnoOtros')?.addEventListener('change', async () => {
    const r = await idbGet('reports', id);
    r.turno.otros = document.getElementById('fTurnoOtros').value;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  });
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
  const t = REPORT_TYPES[r.typeId];
  if (t && t.kind === 'turno') return buildTurnoPdfBlob(r, cfg, t);
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'pt', format:'letter' });
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
  /* Running per-category counters (positiva/desviacion/correctiva) so each item is numbered
     continuously across ALL registros of the report (1, 2, 3…) instead of restarting per
     registro — the numbers keep adding up automatically as more items come in. */
  const catCounter = { positiva:0, desviacion:0, correctiva:0 };
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
      catCounter[catKey] += 1;
      const lines = doc.splitTextToSize(`${catCounter[catKey]}.-  ` + it, contentW - indent);
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

/* ------------------------------------ PDF GENERATION — Cambio de Turno Diario ------------------------------------
   Dedicated builder so the output matches the original "REPORTE DE ACTIVIDADES DIARIAS" template
   (plain white page, red ZÜBLIN mark, black section headings A.- … G.-) instead of the colored
   banner/pill style used for the other 4 report types. */
function buildTurnoPdfBlob(r, cfg, t){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'pt', format:'letter' });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 42;
  const contentW = pageW - margin*2;
  let y = margin;

  const COL = { ink:'#141414', dim:'#5f6d78', line:'#c8ccd0', red:'#e2231a', black:'#141414' };

  function ensureSpace(h){
    if (y + h > pageH - 50){ doc.addPage(); y = margin; drawRunningHeader(); }
  }
  function drawRunningHeader(){
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(COL.dim);
    doc.text(t.name, margin, y);
    doc.setDrawColor(COL.line); doc.line(margin, y+6, pageW-margin, y+6);
    y += 22;
  }
  function heading(text, opts={}){
    ensureSpace(20);
    doc.setFont('helvetica','bold'); doc.setFontSize(opts.size || 11); doc.setTextColor(opts.color || COL.black);
    doc.text(text, margin, y);
    y += (opts.size||11)*0.9 + 8;
  }
  function paragraph(text, opts={}){
    if (!text) text = '—';
    doc.setFont('helvetica', opts.bold?'bold':'normal');
    doc.setFontSize(opts.size || 10);
    doc.setTextColor(opts.color || COL.ink);
    const indent = opts.indent || 0;
    const lines = doc.splitTextToSize(text, contentW - indent);
    ensureSpace(lines.length * 13 + 4);
    doc.text(lines, margin + indent, y);
    y += lines.length * 13 + (opts.gap ?? 6);
  }
  function numberedList(items, opts={}){
    if (!items.length){ paragraph(opts.emptyText || 'Sin registros.', { indent: opts.indent||16, color: COL.dim }); return; }
    doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(COL.ink);
    items.forEach((it, i) => {
      const lines = doc.splitTextToSize(`${i+1}. ${it}`, contentW - (opts.indent||16));
      ensureSpace(lines.length*13 + 2);
      doc.text(lines, margin + (opts.indent||16), y);
      y += lines.length*13 + 2;
    });
    y += 6;
  }
  function bulletList(items, opts={}){
    if (!items.length){ paragraph(opts.emptyText || 'Sin registros.', { indent: opts.indent||16, color: COL.dim }); return; }
    doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(COL.ink);
    items.forEach(it => {
      const lines = doc.splitTextToSize(`•  ${it}`, contentW - (opts.indent||16));
      ensureSpace(lines.length*13 + 2);
      doc.text(lines, margin + (opts.indent||16), y);
      y += lines.length*13 + 2;
    });
    y += 6;
  }
  function table(rows, cols, opts={}){
    if (!rows.length){ paragraph(opts.emptyText || 'Sin filas.', { indent:16, color: COL.dim }); return; }
    const rowH = 20, headH = 20;
    const widths = cols.map(c => c.w);
    ensureSpace(headH);
    let x = margin;
    doc.setFillColor('#e9ecef'); doc.rect(margin, y, contentW, headH, 'F');
    doc.setDrawColor(COL.line); doc.rect(margin, y, contentW, headH, 'S');
    doc.setFont('helvetica','bold'); doc.setFontSize(8.5); doc.setTextColor(COL.black);
    cols.forEach((c, i) => { doc.text(c.label, x + 6, y + 14); doc.line(x, y, x, y+headH); x += widths[i]; });
    doc.line(x, y, x, y+headH);
    y += headH;
    doc.setFont('helvetica','normal'); doc.setFontSize(8.5);
    rows.forEach(row => {
      // Compute row height from the tallest wrapped cell so long "estatus" text isn't clipped.
      const wrapped = cols.map((c,i) => doc.splitTextToSize(String(row[i] ?? '—'), widths[i]-10));
      const h = Math.max(rowH, Math.max(...wrapped.map(w => w.length))*11 + 8);
      ensureSpace(h);
      x = margin;
      doc.setDrawColor(COL.line); doc.rect(margin, y, contentW, h, 'S');
      wrapped.forEach((lines, i) => { doc.text(lines, x+6, y+13); doc.line(x, y, x, y+h); x += widths[i]; });
      doc.line(x, y, x, y+h);
      y += h;
    });
    y += 10;
  }

  // ---- Header: red ZÜBLIN mark, code, contract line ----
  doc.setDrawColor(COL.red); doc.setLineWidth(1.4);
  doc.roundedRect(margin, y, 96, 30, 4, 4, 'S');
  doc.setTextColor(COL.red); doc.setFont('helvetica','bold'); doc.setFontSize(14);
  doc.text('ZÜBLIN', margin + 48, y + 20, { align:'center' });
  doc.setLineWidth(0.75);

  doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(COL.dim);
  doc.text(`CODIGO: ${t.code} REV.0`, pageW - margin, y + 10, { align:'right' });
  doc.text(fmtDateDisplay(todayISO()), pageW - margin, y + 21, { align:'right' });
  y += 40;

  doc.setDrawColor(COL.black); doc.setLineWidth(0.75); doc.line(margin, y, pageW-margin, y);
  y += 12;
  doc.setFont('helvetica','normal'); doc.setFontSize(7.5); doc.setTextColor(COL.dim);
  const contractLine = `CONTRATO Nº ${cfg.contrato} "${cfg.obra}"`;
  const contractLines = doc.splitTextToSize(contractLine, contentW);
  doc.text(contractLines, margin, y);
  y += contractLines.length * 10 + 10;
  doc.line(margin, y, pageW-margin, y);
  y += 22;

  // ---- Title ----
  doc.setFont('helvetica','bold'); doc.setFontSize(17); doc.setTextColor(COL.black);
  doc.text(t.name, margin, y);
  y += 22;
  doc.setFont('helvetica','bold'); doc.setFontSize(11); doc.setTextColor(COL.black);
  doc.text('DEPARTAMENTO DE CALIDAD', margin, y);
  y += 26;

  // ---- Fecha / Hora / Turno ----
  [['FECHA:', fmtDateDisplay(r.header.fecha)], ['HORA:', r.header.hora], ['TURNO:', r.header.turno === 'NOCHE' ? 'Noche' : 'Día']].forEach(row => {
    doc.setFont('helvetica','bold'); doc.setFontSize(9.5); doc.setTextColor(COL.black);
    doc.text(row[0], margin, y);
    doc.setFont('helvetica','normal'); doc.setFontSize(9.5);
    doc.text(String(row[1]), margin + 70, y);
    y += 15;
  });
  y += 10;

  // ---- A.- Personal en turno ---- (original template uses "N.- Nombre (Cargo)." with a dash)
  heading('A.-PERSONAL EN TURNO:');
  doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(COL.ink);
  r.personal.forEach((p, i) => {
    const txt = `${i+1}.- ${p.nombre || '(sin nombre)'} (${p.cargo}).`;
    const lines = doc.splitTextToSize(txt, contentW - 16);
    ensureSpace(lines.length*13 + 2);
    doc.text(lines, margin + 16, y);
    y += lines.length*13 + 2;
  });
  y += 6;

  // ---- B.- Revisión frentes / protocolización ----
  heading('B.-REVISION FRENTES / PROTOCOLIZACION:');
  numberedList(r.turno.frentes.map(f => {
    const base = `${f.ubicacion || '(sin ubicación)'}: ${f.detalle || ''}`.trim();
    return f.protocolo ? `${base} ID : ${f.protocolo}` : base;
  }), { indent:16, emptyText: 'Sin frentes registrados.' });

  // ---- C.- Laboratorio ----
  heading('C.-LABORATORIO:');
  numberedList(r.turno.laboratorio.map(l => {
    if (!l.tipoEnsayo && !l.detalle) return '';
    const cant = l.cantidad || '1';
    const base = `${cant} (un) ${l.tipoEnsayo || '—'}`;
    return l.detalle ? `${base} — ${l.detalle}` : base;
  }).filter(Boolean), { indent:16, emptyText: 'Sin registros de laboratorio.' });

  // ---- D.- Observaciones adicionales ----
  heading('D.-OBSERVACIONES ADICIONALES:');
  bulletList(r.turno.observaciones.map(o => o.texto).filter(Boolean), { indent:0, emptyText: 'Sin observaciones adicionales.' });
  if (r.turno.tabla.length){
    y += 4;
    table(
      r.turno.tabla.map(row => [row.protocolo || '—', row.ubicacion || '—', row.estatus || '—']),
      [ { label:'ID', w: contentW*0.14 }, { label:'UBICACIÓN', w: contentW*0.36 }, { label:'ESTATUS', w: contentW*0.50 } ]
    );
  }

  // ---- E.- Caminatas ----
  heading('E.- CAMINATAS');
  bulletList(r.turno.caminatas.map(c => c.texto).filter(Boolean), { indent:16, emptyText: 'Sin Caminatas.' });

  // ---- F.- Cierre DT ----
  heading('F.- CIERRE DT');
  bulletList(r.turno.cierreDT.map(c => c.texto).filter(Boolean), { indent:16, emptyText: 'Sin cierre DT.' });

  // ---- G.- Otros ----
  heading('G.- OTROS');
  paragraph(r.turno.otros || '—');

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

  // ---- Footer + page numbers ----
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
