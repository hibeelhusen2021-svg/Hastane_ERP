/* ====== MINDCARE ERP & PROJECT MANAGEMENT ENTERPRISE ENGINE v1.2 ====== */

let state = {
    kpi: { totalCiro: 10650.00, therapistHakEdis: 6102.50, netGelir: 4547.50, totalSeans: 18 },
    seansTurleri: [
        { ad: "Bireysel Terapi", seansSayisi: 8, oran: "44.4%", ciro: 4050 },
        { ad: "Çift Terapisi", seansSayisi: 5, oran: "27.8%", ciro: 3600 },
        { ad: "Aile Danışmanlığı", seansSayisi: 3, oran: "16.7%", ciro: 1650 },
        { ad: "Çocuk/Ergen Psikolojisi", seansSayisi: 2, oran: "11.1%", ciro: 1350 }
    ],
    odemeYontemleri: [
        { ad: "B2B Sanal POS (Kredi Kartı)", ciro: 4800, oran: "45.1%" },
        { ad: "Bankacılık EFT / Havale", ciro: 3250, oran: "30.5%" },
        { ad: "Nakit Muhasebe Girişi", ciro: 2600, oran: "24.4%" }
    ],
    clientsData: [
        { name: "Azad Özdemir", phone: "0555 123 4567", email: "azadozdemir@gmail.com", branch: "MindCare Merkez", kvkk: "Onaylı", date: "08.06.2026" },
        { name: "Ömer Aras", phone: "0540 222 33 44", email: "omeraras@gmail.com", branch: "MindCare Kadıköy", kvkk: "Onaylı", date: "08.06.2026" },
        { name: "Selin Bulut", phone: "0539 000 11 22", email: "selinbulut@gmail.com", branch: "MindCare Merkez", kvkk: "Bekliyor", date: "08.06.2026" },
        { name: "Gökhan Yıldırım", phone: "0548 888 99 00", email: "gokhanyildirim@gmail.com", branch: "MindCare Ankara", kvkk: "Onaylı", date: "07.06.2026" },
        { name: "Dilek Aslan", phone: "0537 666 77 88", email: "dilekaslan@gmail.com", branch: "MindCare Kadıköy", kvkk: "Onaylı", date: "06.06.2026" }
    ],
    roomsData: [
        { name: "Ankara Vip Terapi Odası", branch: "Ankara Şubesi", capacity: 2, status: "Aktif / Dolu" },
        { name: "Merkez Büyük Grup Salonu", branch: "Merkez Şube", capacity: 8, status: "Aktif / Boş" },
        { name: "Kadıköy Çocuk Oyun Odası", branch: "Kadıköy Şubesi", capacity: 3, status: "Aktif / Boş" },
        { name: "Mavi Oda Dinlenme Alanı", branch: "Merkez Şube", capacity: 2, status: "Aktif / Dolu" }
    ],
    specializationsData: [
        { id: "CAT-1028", nameTr: "Aile ve Çift Terapisi", nameEn: "Family & Dynamic Couple Therapy" },
        { id: "CAT-1027", nameTr: "Bilişsel Davranışçı Terapi", nameEn: "Cognitive Behavioral Therapy (CBT)" },
        { id: "CAT-1033", nameTr: "Göz Hareketleriyle Duyarsızlaştırma", nameEn: "EMDR Neuro-Therapy" },
        { id: "CAT-1032", nameTr: "Klinik Çocuk Pedagojisi", nameEn: "Child & Adolescent Psychology" }
    ],
    projectSummary: { totalDuration: 75, completedDays: 25, remainingDays: 50, netBalance: 141800.00, budgetUsage: 48.4, taskCount: 6, criticalTasks: 5 },
    projectTasksData: [
        { id: "T1", name: "İş Modeli Kapsamı & Pazar Analizi", duration: 5, start: "30.04.2026", end: "05.05.2026", es: 0, ef: 5, ls: 0, lf: 5, tf: 0, critical: "Evet", status: "Tamamlandı" },
        { id: "T2", name: "Uluslararası Yazılım Mimarisi Belirlenmesi", duration: 7, start: "05.05.2026", end: "12.05.2026", es: 5, ef: 12, ls: 5, lf: 12, tf: 0, critical: "Evet", status: "Tamamlandı" },
        { id: "T3", name: "Premium UI/UX Tasarım Sprintf", duration: 8, start: "12.05.2026", end: "20.05.2026", es: 12, ef: 20, ls: 12, lf: 20, tf: 0, critical: "Evet", status: "Tamamlandı" },
        { id: "T4", name: "Veritabanı Normalizasyonu & ER Mimari", duration: 5, start: "20.05.2026", end: "25.05.2026", es: 20, ef: 25, ls: 20, lf: 25, tf: 0, critical: "Evet", status: "Tamamlandı" },
        { id: "T5", name: "Çirdek API ve Algoritmaların Kodlanması", duration: 15, start: "25.05.2026", end: "09.06.2026", es: 25, ef: 40, ls: 25, lf: 40, tf: 0, critical: "Evet", status: "Devam Ediyor" },
        { id: "T6", name: "Eski Sistem Entegrasyonu Önyüz Giydirme", duration: 15, start: "25.05.2026", end: "09.06.2026", es: 25, ef: 40, ls: 30, lf: 45, tf: 5, critical: "Hayır", status: "Devam Ediyor" }
    ],
    projectTeamData: [
        { name: "Can Yılmaz", role: "Girişimci / CTO / Yazılım Mimarı", mail: "can.yilmaz@mindcare.com", taskCount: "4 İş Paketi", allocation: "%100 Tam Zamanlı" },
        { name: "Elif Kaya", role: "Baş UI/UX Ürün Tasarımcısı", mail: "elif.kaya@mindcare.com", taskCount: "1 İş Paketi", allocation: "%50 Kısmi Zamanlı" },
        { name: "Burak Demir", role: "Kıdemli Veritabanı Geliştiricisi", mail: "burak.demir@mindcare.com", taskCount: "2 İş Paketi", allocation: "%100 Tam Zamanlı" }
    ],
    projectBudgetTransactions: [
        { id: "TX-9021", date: "30.04.2026", title: "Melek Yatırımcı / Çekirdek Sermaye Enjeksiyonu", category: "Yatırım Geliri", amount: 150000.00, type: "Gelir" },
        { id: "TX-9022", date: "25.05.2026", title: "B2B Erken Erişim SaaS Lisans Satış Bedeli", category: "Operasyonel Gelir", amount: 125000.00, type: "Gelir" },
        { id: "TX-9023", date: "15.05.2026", title: "AWS Kurumsal Bulut Sunucu & DB Sunucu Altyapısı", category: "Altyapı Gideri", amount: 38200.00, type: "Gider" },
        { id: "TX-9024", date: "31.05.2026", title: "Teknik Geliştirme Çekirdek Ekip Maaşları", category: "İK / Bordro Gideri", amount: 95000.00, type: "Gider" }
    ],
    appointments: [{ Id: 1, BranchId: 10, TherapistId: 501, ClientId: 1019, RoomId: 1012, StartTime: "2026-06-09 13:00", Fee: "800.00 ₺", Status: "Başarılı / SQL JOIN Eşleşti" }]
};

document.addEventListener("DOMContentLoaded", () => {
    setupMainRouter();
    renderAllViews();
});

function setupMainRouter() {
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", (e) => {
            const tabId = e.currentTarget.getAttribute("data-tab");
            if (!tabId) return;

            document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
            document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
            
            e.currentTarget.classList.add("active");
            document.getElementById(tabId).classList.add("active");

            if (tabId === "sql-editor-view") {
                document.body.classList.add("dark-theme-mode");
                executeMockSQL();
            } else {
                document.body.classList.remove("dark-theme-mode");
            }
        });
    });
}

function renderAllViews() {
    // KPI RECONSTRUCTION
    const kpiGrid = document.getElementById("dashboard-kpis");
    if (kpiGrid) {
        kpiGrid.innerHTML = `
            <div class="kpi-card" style="border-top: 4px solid #10b981;">
                <span style="font-size:0.75rem; color:#64748b; font-weight:700;">BRÜT CİRO (REVENUE)</span>
                <h2 style="font-size:1.8rem; margin-top:8px; font-weight:800; color:#10b981;">${state.kpi.totalCiro.toLocaleString('tr-TR')} ₺</h2>
            </div>
            <div class="kpi-card" style="border-top: 4px solid #f59e0b;">
                <span style="font-size:0.75rem; color:#64748b; font-weight:700;">HAK EDİŞ DAĞILIMLARI</span>
                <h2 style="font-size:1.8rem; margin-top:8px; font-weight:800; color:#f59e0b;">${state.kpi.therapistHakEdis.toLocaleString('tr-TR')} ₺</h2>
            </div>
            <div class="kpi-card" style="border-top: 4px solid #2563eb;">
                <span style="font-size:0.75rem; color:#64748b; font-weight:700;">NET PLATFORM KAZANCI</span>
                <h2 style="font-size:1.8rem; margin-top:8px; font-weight:800; color:#2563eb;">${state.kpi.netGelir.toLocaleString('tr-TR')} ₺</h2>
            </div>
        `;
    }

    document.getElementById("seans-turu-container").innerHTML = state.seansTurleri.map(s => `
        <div style="margin-bottom:15px;">
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:600; margin-bottom:6px;"><span>${s.ad} (${s.seansSayisi} Adet)</span><span>${s.ciro} ₺</span></div>
            <div style="background:#e2e8f0; height:8px; border-radius:10px;"><div style="background:#2563eb; width:${s.oran}; height:100%; border-radius:10px;"></div></div>
        </div>
    `).join('');

    document.getElementById("odeme-yontemleri-container").innerHTML = state.odemeYontemleri.map(o => `
        <div style="margin-bottom:15px;">
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:600; margin-bottom:6px;"><span>${o.ad}</span><span>%${o.oran}</span></div>
            <div style="background:#e2e8f0; height:8px; border-radius:10px;"><div style="background:#10b981; width:${o.oran}; height:100%; border-radius:10px;"></div></div>
        </div>
    `).join('');

    document.getElementById("clients-table-body").innerHTML = state.clientsData.map(c => `
        <tr><td><strong>${c.name}</strong></td><td>${c.phone}</td><td>${c.email}</td><td>${c.branch}</td><td><span class="badge ${c.kvkk==='Onaylı'?'badge-success':'badge-warning'}">${c.kvkk}</span></td><td>${c.date}</td></tr>
    `).join('');

    document.getElementById("rooms-grid-container").innerHTML = state.roomsData.map(r => `
        <div class="card" style="margin-bottom:0; border-top: 3px solid #3b82f6;">
            <h4>${r.name}</h4>
            <p style="font-size:0.8rem; color:#64748b; margin:5px 0;">${r.branch}</p>
            <div style="font-size:0.85rem; font-weight:600; margin-bottom:10px;">Kapasite: ${r.capacity} Koltuk</div>
            <span class="badge badge-success">${r.status}</span>
        </div>
    `).join('');

    document.getElementById("specializations-table-body").innerHTML = state.specializationsData.map(s => `
        <tr><td><code style="color:#ef4444; font-weight:700;">${s.id}</code></td><td><strong>${s.nameTr}</strong></td><td style="color:#64748b; font-style:italic;">${s.nameEn}</td><td><span class="badge badge-success">Sistemde Aktif</span></td></tr>
    `).join('');

    const p = state.projectSummary;
    document.getElementById("project-kpi-grid").innerHTML = `
        <div class="kpi-card" style="border-left: 5px solid #2563eb;"><span>MVP PAZARA ÇIKIŞ SÜRESİ</span><h2>${p.totalDuration} Gün</h2><small>Kalan: ${p.remainingDays} Gün</small></div>
        <div class="kpi-card" style="border-left: 5px solid #10b981;"><span>İŞLETME SERMAYESİ (CASH FLOW)</span><h2>${p.netBalance.toLocaleString('tr-TR')} ₺</h2><small>Bütçe Tüketimi: %${p.budgetUsage}</small></div>
        <div class="kpi-card" style="border-left: 5px solid #ef4444;"><span>CPM METRİK RİSKİ</span><h2>${p.criticalTasks} Kritik Görev</h2><small>Toplam ${p.taskCount} Kritik İş Paketi</small></div>
    `;

    document.getElementById("project-tasks-tbody").innerHTML = state.projectTasksData.map(t => `
        <tr>
            <td><code>${t.id}</code></td><td><strong>${t.name}</strong></td><td>${t.duration} Gün</td><td>${t.start}</td><td>${t.end}</td>
            <td>${t.es}/${t.ef}</td><td>${t.ls}/${t.lf}</td><td style="color:${t.tf===0?'#ef4444':'#64748b'}; font-weight:700;">${t.tf}</td>
            <td style="color:${t.critical==='Evet'?'#ef4444':'#10b981'}; font-weight:700;">${t.critical}</td>
            <td><span class="badge ${t.status==='Tamamlandı'?'badge-success':'badge-warning'}">${t.status}</span></td>
        </tr>
    `).join('');

    document.getElementById("project-team-tbody").innerHTML = state.projectTeamData.map(m => `
        <tr><td><strong>${m.name}</strong></td><td><span class="badge badge-success" style="background:#eff6ff; color:#1e40af;">${m.role}</span></td><td>${m.mail}</td><td>${m.taskCount}</td><td style="font-weight:700; color:#10b981;">${m.allocation}</td></tr>
    `).join('');

    document.getElementById("project-budget-tbody").innerHTML = state.projectBudgetTransactions.map(b => `
        <tr><td><code>${b.id}</code></td><td>${b.date}</td><td><strong>${b.title}</strong></td><td>${b.category}</td><td style="text-align:right; font-weight:700; color:${b.type==='Gelir'?'#10b981':'#ef4444'};">${b.type==='Gelir'?'+':'-'}${b.amount.toLocaleString('tr-TR')} ₺</td></tr>
    `).join('');
}

function executeMockSQL() {
    const tbody = document.getElementById("sql-results-body");
    const thead = document.getElementById("sql-results-header");
    const row = state.appointments[0];
    const headers = Object.keys(row);
    
    thead.innerHTML = `<tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>`;
    tbody.innerHTML = `<tr>${headers.map(h => `<td>${row[h]}</td>`).join('')}</tr>`;
}