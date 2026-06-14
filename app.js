// ==========================================
// 🗄️ %100 İLİŞKİSEL SQL MODELİ TABANLI DEV VERİ TABANI (STATE)
// ==========================================
let state = {
  "hospital": {
    "name": "CareFlow Enterprise Hospital",
    "totalBeds": 50
  },
  // SQL: SELECT * FROM doctors;
  "doctors": [
    { "id": "doc_1", "name": "Prof. Dr. Ali Yılmaz", "specialty": "Kardiyoloji" },
    { "id": "doc_2", "name": "Doç. Dr. Ayşe Kaya", "specialty": "Dahiliye" },
    { "id": "doc_3", "name": "Dr. Öğr. Üyesi Murat Demir", "specialty": "Nöroloji" },
    { "id": "doc_4", "name": "Uzm. Dr. Canan Çetin", "specialty": "Acil Servis" }
  ],
  // SQL: SELECT * FROM patients; (doctorId alanı Foreign Key ilişkisidir)
  "patients": [
    // --- İLK ORİJİNAL HASTALARIN (KORUNDU) ---
    { "id": "pat_1", "name": "Ahmet Yurt", "complaint": "Göğüs ağrısı, nefes darlığı protokolü.", "doctorId": "doc_1", "roomNo": "K-101", "status": "yatis-verildi", "recoveryProgress": 40 },
    { "id": "pat_2", "name": "Elif Şin", "complaint": "Halsizlik, yüksek şeker regülasyonu.", "doctorId": "doc_2", "roomNo": "D-204", "status": "muayenede", "recoveryProgress": 70 },
    { "id": "pat_3", "name": "Mehmet Öz", "complaint": "Şiddetli baş ağrısı ve migren atağı.", "doctorId": "doc_3", "roomNo": "N-302", "status": "yatis-verildi", "recoveryProgress": 10 },
    { "id": "pat_4", "name": "Ayşe Demir", "complaint": "Rutin kontrol ve check-up.", "doctorId": "doc_2", "roomNo": "-", "status": "taburcu-edildi", "recoveryProgress": 100 },
    { "id": "pat_5", "name": "hiba", "complaint": "Mevsimsel grip ve yüksek halsizlik.", "doctorId": "doc_4", "roomNo": "12", "status": "muayenede", "recoveryProgress": 15 },
    
    // --- 20 HASTAYA TAMAMLAYAN YENİ SQL PROTOKOLLERİ ---
    { "id": "pat_6", "name": "Selin Gürsoy", "complaint": "Aritmi (ritim bozukluğu) ve holter takibi.", "doctorId": "doc_1", "roomNo": "K-203", "status": "yatis-verildi", "recoveryProgress": 45 },
    { "id": "pat_7", "name": "Caner Yıldız", "complaint": "Akut solunum yolu enfeksiyonu, astım alevlenmesi.", "doctorId": "doc_2", "roomNo": "-", "status": "muayenede", "recoveryProgress": 50 },
    { "id": "pat_8", "name": "Hülya Avcı", "complaint": "Sol kolda uyuşma ve nörolojik tetkikler.", "doctorId": "doc_3", "roomNo": "N-108", "status": "yatis-verildi", "recoveryProgress": 25 },
    { "id": "pat_9", "name": "Mustafa Koç", "complaint": "Hipertansif kriz senaryosu, acil stabilizasyon.", "doctorId": "doc_4", "roomNo": "-", "status": "muayenede", "recoveryProgress": 80 },
    { "id": "pat_10", "name": "Büşra Kaya", "complaint": "Demir eksikliği anemisi ve derin halsizlik.", "doctorId": "doc_2", "roomNo": "D-302", "status": "yatis-verildi", "recoveryProgress": 40 },
    { "id": "pat_11", "name": "Murat Soydan", "complaint": "Kronik kalp yetmezliği, ödem ve dispne takibi.", "doctorId": "doc_1", "roomNo": "K-105", "status": "yatis-verildi", "recoveryProgress": 30 },
    { "id": "pat_12", "name": "Aslı Yılmaz", "complaint": "Akut gastroenterit, dehidrasyon ve elektrolit kaybı.", "doctorId": "doc_2", "roomNo": "-", "status": "muayenede", "recoveryProgress": 65 },
    { "id": "pat_13", "name": "Serkan Çelik", "complaint": "Lomber disk hernisi, akut siyatik sinir sıkışması.", "doctorId": "doc_3", "roomNo": "N-202", "status": "yatis-verildi", "recoveryProgress": 20 },
    { "id": "pat_14", "name": "Ece Erdem", "complaint": "Yüksek ateş ve şüpheli döküntü, acil gözlem.", "doctorId": "doc_4", "roomNo": "-", "status": "muayenede", "recoveryProgress": 85 },
    { "id": "pat_15", "name": "Kemal Sunal", "complaint": "Esansiyel hipertansiyon, tedavi protokolü revizyonu.", "doctorId": "doc_1", "roomNo": "K-110", "status": "yatis-verildi", "recoveryProgress": 55 },
    { "id": "pat_16", "name": "Derya Büyük", "complaint": "B12 avitaminozu ve yaygın nöropatik ağrılar.", "doctorId": "doc_2", "roomNo": "-", "status": "muayenede", "recoveryProgress": 45 },
    { "id": "pat_17", "name": "Hakan Tütüncü", "complaint": "Senkop (bayılma) sonrası nörolojik EEG izlemi.", "doctorId": "doc_3", "roomNo": "N-102", "status": "yatis-verildi", "recoveryProgress": 35 },
    { "id": "pat_18", "name": "Pınar Deniz", "complaint": "Göz kararması ve hipotansiyon şikayeti.", "doctorId": "doc_4", "roomNo": "-", "status": "muayenede", "recoveryProgress": 90 },
    { "id": "pat_19", "name": "Deniz Gezmiş", "complaint": "Akut koroner sendrom şüphesi, troponin takibi.", "doctorId": "doc_1", "roomNo": "K-205", "status": "yatis-verildi", "recoveryProgress": 15 },
    { "id": "pat_20", "name": "Gamze Özçelik", "complaint": "Hipotiroidi koması önlemi, hormon regülasyonu.", "doctorId": "doc_2", "roomNo": "D-102", "status": "yatis-verildi", "recoveryProgress": 50 }
  ],
  // SQL: SELECT * FROM medicalLogs; (patientId ve doctorId ilişkisel Foreign Key bağlarıdır)
  "medicalLogs": [
    { "id": "mlog_1", "date": "10.06.2026", "patientId": "pat_1", "doctorId": "doc_1", "progressInc": 15, "description": "EKG çekildi, hastaya antihipertansif infüzyon başlandı." },
    { "id": "mlog_2", "date": "11.06.2026", "patientId": "pat_3", "doctorId": "doc_3", "progressInc": 10, "description": "Nörolojik muayene yapıldı. Analjezik protokolü uygulandı." },
    { "id": "mlog_3", "date": "12.06.2026", "patientId": "pat_6", "doctorId": "doc_1", "progressInc": 20, "description": "Beta-bloker dozajı ayarlandı. Çarpıntı sıklığı azaldı." },
    { "id": "mlog_4", "date": "12.06.2026", "patientId": "pat_8", "doctorId": "doc_3", "progressInc": 30, "description": "Beyin MR sonuçları incelendi, antiagregan tedaviye başlandı." },
    { "id": "mlog_5", "date": "12.06.2026", "patientId": "pat_10", "doctorId": "doc_2", "progressInc": 25, "description": "IV Demir sükroz infüzyonu uygulandı, hemoglobin takibi yapılıyor." }
  ]
};

let trendChartInstance = null;
let specialtyChartInstance = null;
let financeChartInstance = null;

function saveState() { 
  localStorage.setItem("careflow_hospital_state", JSON.stringify(state)); 
}

function loadState() {
  const saved = localStorage.getItem("careflow_hospital_state");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // SQL veri bütünlüğü kontrolü simülasyonu: 20 hastadan azsa merkezi veritabanı şemasını zorla yükle
      if (parsed.patients && parsed.patients.length < 20) {
        saveState(); 
      } else {
        state = parsed;
      }
    } catch (e) {
      console.log("Hafıza hatası, varsayılan state devrede.");
    }
  } else {
    saveState();
  }
  launchApp();
}

function launchApp() {
  renderDashboard();
  initPatientModal();
  initLogModal();
  
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", handleTabClick);
  });
  lucide.createIcons();
}

function handleTabClick(e) {
  const item = e.currentTarget;
  const tabId = item.getAttribute("data-tab");
  switchTab(tabId);
  
  if (tabId === "dashboard") { renderDashboard(); } 
  else if (tabId === "patients") { renderPatientsTable(); } 
  else if (tabId === "medical-logs") { renderMedicalLogs(); }
  else if (tabId === "finance-manager") { renderFinanceChart(); }
}

function switchTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
  
  const targetContent = document.getElementById(tabId);
  const targetMenu = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  
  if (targetContent) targetContent.classList.add("active");
  if (targetMenu) targetMenu.classList.add("active");
  
  const titles = { 
    "dashboard": "Klinik Özet Panel", 
    "patients": "Hasta Kabul & Listesi", 
    "medical-logs": "Müdahale Günlüğü",
    "project-management": "Agile Proje Yönetimi & Gantt Takvimi",
    "finance-manager": "Kurumsal Finans ve Bütçe Kontrol Paneli"
  };
  
  const titleEl = document.getElementById("current-tab-title");
  if (titleEl) titleEl.innerText = titles[tabId] || "Panel";
}

// ==========================================
// 📊 DASHBOARD VE KPI RAPORLAMA PANELİ
// ==========================================
function renderDashboard() {
  const totalPatients = state.patients.length;
  const activePatients = state.patients.filter(p => p.status !== "taburcu-edildi").length;
  const criticalPatients = state.patients.filter(p => p.status === "yatis-verildi" && p.recoveryProgress <= 30).length;
  const occupancyRate = Math.round((activePatients / state.hospital.totalBeds) * 100);

  const kpiGrid = document.getElementById("dashboard-kpis");
  if (kpiGrid) {
    kpiGrid.innerHTML = `
      <div class="kpi-card" style="border-bottom-color: var(--accent-blue);">
        <div class="kpi-info"><h3>Aktif Gözetim</h3><div class="kpi-value">${activePatients} Hasta</div></div>
        <div class="kpi-icon-wrapper" style="background-color: rgba(37,99,235,0.05); color: var(--accent-blue);"><i data-lucide="users"></i></div>
      </div>
      <div class="kpi-card" style="border-bottom-color: var(--accent-rose);">
        <div class="kpi-info"><h3>Kritik Durum (🚨)</h3><div class="kpi-value" style="color: var(--accent-rose);">${criticalPatients} Hasta</div></div>
        <div class="kpi-icon-wrapper" style="background-color: rgba(239,68,68,0.05); color: var(--accent-rose);"><i data-lucide="bell-ring"></i></div>
      </div>
      <div class="kpi-card" style="border-bottom-color: var(--accent-emerald);">
        <div class="kpi-info"><h3>Yatak Doluluk Oranı</h3><div class="kpi-value">${occupancyRate}%</div></div>
        <div class="kpi-icon-wrapper" style="background-color: rgba(16,185,129,0.05); color: var(--accent-emerald);"><i data-lucide="pie-chart"></i></div>
      </div>
      <div class="kpi-card" style="border-bottom-color: var(--accent-cyan);">
        <div class="kpi-info"><h3>Toplam Kayıt</h3><div class="kpi-value">${totalPatients} Protokol</div></div>
        <div class="kpi-icon-wrapper" style="background-color: rgba(6,182,212,0.05); color: var(--accent-cyan);"><i data-lucide="folder-heart"></i></div>
      </div>
    `;
  }
  
  renderCharts();
  lucide.createIcons();
}

function renderCharts() {
  const chartTrendEl = document.getElementById("trend-chart");
  const chartSpecialtyEl = document.getElementById("specialty-chart");
  if (!chartTrendEl || !chartSpecialtyEl) return;

  if (trendChartInstance) trendChartInstance.destroy();
  if (specialtyChartInstance) specialtyChartInstance.destroy();

  // Poliklinik verilerini tutan ilişkisel filtreleme mimarisi (SQL GROUP BY simülasyonu)
  const kardi = state.patients.filter(p => p.doctorId === "doc_1").length;
  const dahiliye = state.patients.filter(p => p.doctorId === "doc_2").length;
  const noro = state.patients.filter(p => p.doctorId === "doc_3").length;
  const acil = state.patients.filter(p => p.doctorId === "doc_4").length;

  trendChartInstance = new Chart(chartTrendEl.getContext("2d"), {
    type: 'line',
    data: {
      labels: ["06 Haz", "07 Haz", "08 Haz", "09 Haz", "10 Haz", "11 Haz", "12 Haz"],
      datasets: [{ 
        label: 'Günlük Hasta Girişi', 
        data: [2, 4, 3, 5, 4, 6, 8], 
        borderColor: '#2563eb', 
        backgroundColor: 'rgba(37, 99, 235, 0.05)',
        borderWidth: 3, tension: 0.4, fill: true, pointRadius: 4, pointBackgroundColor: '#ffffff'
      }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
  });

  specialtyChartInstance = new Chart(chartSpecialtyEl.getContext("2d"), {
    type: 'doughnut',
    data: {
      labels: ['Kardiyoloji', 'Dahiliye', 'Nöroloji', 'Acil'],
      datasets: [{ data: [kardi, dahiliye, noro, acil], backgroundColor: ['#06b6d4', '#16a34a', '#f59e0b', '#ef4444'] }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, cutout: '72%' }
  });
}

// ==========================================
// 💰 DİNAMİK HASTANE FİNANS MOTORU (AGREGATE FUNCTIONS)
// ==========================================
function renderFinanceChart() {
  const financeCanvas = document.getElementById("finance-pie-chart");
  if (!financeCanvas) return;

  // SQL: SELECT COUNT(*) * 15000 FROM patients;
  const patientCount = state.patients.length;
  const incomePerPatient = 15000; 
  const totalIncome = patientCount * incomePerPatient;
  const totalExpense = 42500; 
  const netProfit = totalIncome - totalExpense;

  document.getElementById("total-hospital-income").innerText = totalIncome.toLocaleString('tr-TR') + " ₺";
  document.getElementById("net-hospital-profit").innerText = (netProfit > 0 ? netProfit : 0).toLocaleString('tr-TR') + " ₺";

  if (financeChartInstance) financeChartInstance.destroy();

  financeChartInstance = new Chart(financeCanvas.getContext("2d"), {
    type: 'pie',
    data: {
      labels: ['Tıbbi Sarf Malzeme Gideri', 'İlaç Tedarik Gideri', 'Demirbaş & Enerji Gideri', 'Net Klinik Kâr'],
      datasets: [{
        data: [12500, 15000, 15000, Math.max(0, netProfit)],
        backgroundColor: ['#f43f5e', '#3b82f6', '#eab308', '#10b981'],
        borderWidth: 1
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

// ==========================================
// 👥 HASTA PROTOKOL TABLOSU (SQL INNER JOIN SİMÜLASYONU)
// ==========================================
function renderPatientsTable() {
  const tableBody = document.getElementById("patient-table-body");
  if (!tableBody) return;

  if (state.patients.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 30px;">Kayıtlı aktif hasta bulunamadı.</td></tr>`;
    return;
  }

  tableBody.innerHTML = state.patients.map(patient => {
    // SQL'deki ON p.doctorId = d.id mantığı ile doktor bilgilerini JOIN yapıyoruz
    const doctor = state.doctors.find(d => d.id === patient.doctorId);
    let statusBadge = '';
    if (patient.status === 'muayenede') statusBadge = `<span class="badge badge-muayenede">Muayenede</span>`;
    else if (patient.status === 'yatis-verildi') statusBadge = `<span class="badge badge-yatis">Yatış Vermiş</span>`;
    else if (patient.status === 'taburcu-edildi') statusBadge = `<span class="badge badge-taburcu">Taburcu</span>`;

    return `
      <tr>
        <td><strong>${patient.name}</strong><br><small style="color: var(--text-muted);">${patient.complaint}</small></td>
        <td><span style="font-weight: 600;">${doctor ? doctor.name : "Atanmamış"}</span><br><small style="color: var(--accent-blue);">${doctor ? doctor.specialty : ""}</small></td>
        <td><span style="font-weight: bold; background: #f1f5f9; padding: 4px 8px; border-radius: 6px;">${patient.roomNo || "-"}</span></td>
        <td>${statusBadge}</td>
        <td>
          <div class="progress-wrapper">
            <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${patient.recoveryProgress}%;"></div></div>
            <span style="font-size: 0.8rem; font-weight: 700;">%${patient.recoveryProgress}</span>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function initPatientModal() {
  const modal = document.getElementById("patient-modal");
  const btnAdd = document.getElementById("btn-add-patient");
  const btnClose = document.getElementById("btn-close-modal");
  const btnCancel = document.getElementById("btn-cancel-modal");
  const form = document.getElementById("patient-form");

  if (!modal || !btnAdd) return;

  btnAdd.addEventListener("click", () => {
    const drSelect = document.getElementById("p-doctor");
    if(drSelect) drSelect.innerHTML = state.doctors.map(d => `<option value="${d.id}">${d.name} (${d.specialty})</option>`).join('');
    modal.classList.add("open");
  });

  const closeModal = () => { form.reset(); modal.classList.remove("open"); };
  if(btnClose) btnClose.addEventListener("click", closeModal);
  if(btnCancel) btnCancel.addEventListener("click", closeModal);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // SQL: INSERT INTO patients VALUES (...)
    state.patients.push({
      id: "pat_" + Date.now(),
      name: document.getElementById("p-name").value,
      complaint: document.getElementById("p-complaint").value,
      doctorId: document.getElementById("p-doctor").value,
      roomNo: document.getElementById("p-room").value,
      status: document.getElementById("p-status").value,
      recoveryProgress: 10
    });
    saveState();
    renderPatientsTable();
    closeModal();
  });
}

// ==========================================
// 💉 KLİNİK MÜDAHALE GÜNLÜĞÜ (LOGS)
// ==========================================
function renderMedicalLogs() {
  const container = document.getElementById("log-timeline-container");
  if (!container) return;

  if (state.medicalLogs.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 20px;">Kayıtlı tıbbi müdahale bulunamadı.</div>`;
    return;
  }

  // SQL: SELECT * FROM medicalLogs ORDER BY id DESC;
  const sortedLogs = [...state.medicalLogs].reverse();
  container.innerHTML = sortedLogs.map(log => {
    const patient = state.patients.find(p => p.id === log.patientId);
    const doctor = state.doctors.find(d => d.id === log.doctorId);
    return `
      <div class="log-card">
        <div class="log-left">
          <div class="log-meta">
            <span><i data-lucide="calendar" style="width:12px; height:12px; display:inline;"></i> ${log.date}</span>
            <span><i data-lucide="user" style="width:12px; height:12px; display:inline;"></i> Hekim: ${doctor ? doctor.name : "Bilinmiyor"}</span>
          </div>
          <div class="log-patient-info">${patient ? patient.name : "Bilinmeyen Hasta"}</div>
          <div class="log-desc">${log.description}</div>
        </div>
        <div class="log-right"><span class="log-effect">+%${log.progressInc} Klinik Etki</span></div>
      </div>
    `;
  }).join('');
  lucide.createIcons();
}

function initLogModal() {
  const modal = document.getElementById("log-modal");
  const btnAdd = document.getElementById("btn-add-log");
  const btnClose = document.getElementById("btn-close-log-modal");
  const btnCancel = document.getElementById("btn-cancel-log-modal");
  const form = document.getElementById("log-form");
  const patientSelect = document.getElementById("l-patient");

  if (!modal || !btnAdd) return;

  btnAdd.addEventListener("click", () => {
    const activePatients = state.patients.filter(p => p.status !== "taburcu-edildi");
    if(activePatients.length === 0) { alert("Müdahale edilecek aktif hasta yok."); return; }
    if(patientSelect) patientSelect.innerHTML = activePatients.map(p => `<option value="${p.id}">${p.name} (Oda: ${p.roomNo})</option>`).join('');
    modal.classList.add("open");
  });

  const closeModal = () => { form.reset(); modal.classList.remove("open"); };
  if(btnClose) btnClose.addEventListener("click", closeModal);
  if(btnCancel) btnCancel.addEventListener("click", closeModal);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const patientId = patientSelect.value;
    const progressInc = parseInt(document.getElementById("l-progress").value);
    const description = document.getElementById("l-desc").value;
    const patient = state.patients.find(p => p.id === patientId);
    if (!patient) return;

    // SQL: INSERT INTO medicalLogs VALUES (...)
    state.medicalLogs.push({
      id: "mlog_" + Date.now(),
      date: new Date().toLocaleDateString('tr-TR'),
      patientId: patientId,
      doctorId: patient.doctorId,
      progressInc: progressInc,
      description: description
    });

    // SQL UPDATE: UPDATE patients SET recoveryProgress = recoveryProgress + progressInc WHERE id = patientId;
    patient.recoveryProgress = Math.min(100, patient.recoveryProgress + progressInc);
    if (patient.recoveryProgress === 100) { patient.status = "taburcu-edildi"; patient.roomNo = "-"; }

    saveState();
    renderMedicalLogs();
    closeModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadState(); 
});