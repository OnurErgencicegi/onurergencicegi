// ============================================================================
// State
// ============================================================================
let LANG = "en";

const UI = {
  tab_home: { en: "🏡 Home", tr: "🏡 Ana Sayfa" },
  tab_personal: { en: "🕯 Personal", tr: "🕯 Kişisel" },
  tab_work: { en: "🛠 Working Life", tr: "🛠 İş Hayatı" },
  tab_projects: { en: "⛓ Projects", tr: "⛓ Projeler" },
  tab_certificates: { en: "🎖 Certificates", tr: "🎖 Sertifikalar" },
  sub_story: { en: "📜 My Story", tr: "📜 Hikayem" },
  sub_thoughts: { en: "🩸 Thoughts", tr: "🩸 Düşünceler" },
  sub_hobbies: { en: "🎯 Hobbies", tr: "🎯 Hobiler" },
  sub_current: { en: "🚧 Currently working on", tr: "🚧 Şu anda üzerinde çalıştıklarım" },
  sub_past: { en: "🗡 Past projects", tr: "🗡 Geçmiş projeler" },
  currently_working_on: { en: "Currently working on", tr: "Şu anda üzerinde çalıştıklarım" },
  education: { en: "Education", tr: "Eğitim" },
  nothing_yet: { en: "Nothing listed yet.", tr: "Henüz bir şey eklenmedi." },
  long_story_short: { en: "Long story short", tr: "Uzun lafın kısası" },
  long_story_long: { en: "Long story long", tr: "Uzun lafın uzunu" },
  thoughts_caption: {
    en: "Unfiltered journal entries — written in the moment, kept as they were.",
    tr: "Filtrelenmemiş günlük kayıtları — o anda yazıldığı gibi bırakıldı.",
  },
  no_entries: { en: "No entries found.", tr: "Kayıt bulunamadı." },
  search_ph: { en: "Search", tr: "Ara" },
  entry_count: { en: "entries", tr: "kayıt" },
  download_presentation: { en: "⬇ Download presentation", tr: "⬇ Sunumu indir" },
  preview_presentation: { en: "🔍 Preview", tr: "🔍 Önizle" },
  no_attachment: { en: "Presentation coming soon.", tr: "Sunum yakında eklenecek." },
  certificates_caption: {
    en: "Certificates and participation documents collected along the way.",
    tr: "Yol boyunca biriktirdiğim sertifikalar ve katılım belgeleri.",
  },
  view_certificate: { en: "👁 View", tr: "👁 Görüntüle" },
  gpa_label: { en: "GPA", tr: "Not Ortalaması" },
  tab_what: { en: "What it does", tr: "Ne yapar" },
  tab_how: { en: "How it works", tr: "Nasıl çalışır" },
  tab_story: { en: "Story behind the app", tr: "Uygulamanın hikayesi" },
  journal_less: { en: "Show less", tr: "Daha az göster" },
  min_read: { en: "min read", tr: "dk okuma" },
  read_more: { en: "Read more", tr: "Devamını oku" },
  close: { en: "Close", tr: "Kapat" },
  tourism_title: { en: "My Tourism Working Experience", tr: "Turizm Çalışma Deneyimim" },
  tourism_caption: {
    en: "Years of hands-on work in hotels and restaurants around Antalya, from seasonal jobs as a kid to full-time roles.",
    tr: "Antalya çevresindeki otel ve restoranlarda, çocukluktaki sezonluk işlerden tam zamanlı görevlere uzanan yılların saha deneyimi.",
  },
  transcript_view: { en: "📄 View transcript", tr: "📄 Transkripti görüntüle" },
  transcript_dl: { en: "⬇ Download transcript", tr: "⬇ Transkripti indir" },
  staj_gunlugu: { en: "Internship Logbook", tr: "Staj Günlüğü" },
  staj_caption: {
    en: "Compiled from the day-by-day notes kept in my internship logbook.",
    tr: "Staj defterimde gün gün tuttuğum notlardan derlenmiştir.",
  },
};


function L(d) {
  if (d && typeof d === "object" && "en" in d && "tr" in d) return d[LANG] ?? d.en;
  return d;
}
function t(key) { return L(UI[key]); }
function esc(s) {
  if (s == null) return "";
  const div = document.createElement("div");
  div.innerText = s;
  return div.innerHTML;
}

// ============================================================================
// Render: static labels
// ============================================================================
function renderLabels() {
  document.querySelector('[data-tab="home"]').textContent = t("tab_home");
  document.querySelector('[data-tab="personal"]').textContent = t("tab_personal");
  document.querySelector('[data-tab="work"]').textContent = t("tab_work");
  document.querySelector('[data-tab="projects"]').textContent = t("tab_projects");
  document.querySelector('[data-tab="certificates"]').textContent = t("tab_certificates");

  document.querySelector('[data-subtab="story"]').textContent = t("sub_story");
  document.querySelector('[data-subtab="thoughts"]').textContent = t("sub_thoughts");
  document.querySelector('[data-subtab="hobbies"]').textContent = t("sub_hobbies");

  document.querySelector('[data-subtab2="current"]').textContent = t("sub_current");
  document.querySelector('[data-subtab2="past"]').textContent = t("sub_past");

  document.getElementById("lbl-currently-working").textContent = t("currently_working_on");
  document.getElementById("lbl-education").textContent = t("education");
  document.getElementById("lbl-gpa").textContent = t("gpa_label");

  document.getElementById("lbl-my-story").textContent = t("sub_story").split(" ").slice(1).join(" ");
  document.getElementById("lbl-story-short").textContent = t("long_story_short");
  document.getElementById("lbl-story-long").textContent = t("long_story_long");

  document.getElementById("lbl-thoughts").textContent = t("sub_thoughts").split(" ").slice(1).join(" ");

  document.getElementById("lbl-hobbies").textContent = t("sub_hobbies").split(" ").slice(1).join(" ");

  document.getElementById("lbl-work").textContent = t("tab_work").split(" ").slice(1).join(" ");
  document.getElementById("lbl-tourism").textContent = t("tourism_title");
  document.getElementById("lbl-tourism-caption").textContent = t("tourism_caption");
  document.getElementById("btn-transcript-view").textContent = t("transcript_view");
  document.getElementById("btn-transcript-dl").textContent = t("transcript_dl");
  document.getElementById("lbl-logbook").textContent = t("staj_gunlugu");
  document.getElementById("lbl-logbook-caption").textContent = t("staj_caption");

  document.getElementById("lbl-projects").textContent = t("tab_projects").split(" ").slice(1).join(" ");

  document.getElementById("lbl-certificates").textContent = t("tab_certificates").split(" ").slice(1).join(" ");
  document.getElementById("lbl-certificates-caption").textContent = t("certificates_caption");

  document.getElementById("btn-tr").classList.toggle("active", LANG === "tr");
  document.getElementById("btn-en").classList.toggle("active", LANG === "en");
}

// ============================================================================
// Render: Home
// ============================================================================
function renderHome() {
  const p = SITE_DATA.profile;
  document.getElementById("profile-name").textContent = p.name;
  document.getElementById("profile-tagline").textContent = L(p.tagline);
  document.getElementById("profile-intro").textContent = L(p.intro);

  const linkIcon = SITE_DATA.link_icon || {};
  const linksHtml = Object.entries(p.links).map(([label, url]) =>
    `<a class="link-btn" href="${esc(url)}" target="_blank">${linkIcon[label] || "🔗"} ${esc(label)}</a>`
  ).join("");
  document.getElementById("profile-links").innerHTML = linksHtml;

  const cur = document.getElementById("home-current-projects");
  cur.innerHTML = SITE_DATA.current_projects.length
    ? SITE_DATA.current_projects.map(pr => projectCardHtml(pr, "home")).join("")
    : `<p style="color:var(--muted)">${t("nothing_yet")}</p>`;
  bindProjectCardEvents(cur);
}

// ============================================================================
// Render: Project card (shared between Home + Projects tab)
// ============================================================================
function projectCardHtml(p, ctx) {
  const status = p.status ? `<span class="status-badge">${esc(L(p.status))}</span>` : (p.year ? `<span class="status-badge">${esc(p.year)}</span>` : "");
  const link = p.link ? `<a href="${esc(p.link)}" target="_blank">${esc(p.link)}</a>` : "";
  const key = `${ctx}_${p.title}`.replace(/\s+/g, "_");

  const tabDefs = [["what", "tab_what"], ["how", "tab_how"], ["story", "tab_story"]];
  const tabsHtml = `<div class="ptabs" role="tablist">${tabDefs.map(([k, lbl], i) =>
    `<button type="button" role="tab" class="ptab${i === 0 ? " active" : ""}" data-ptab="${k}" aria-selected="${i === 0}">${esc(t(lbl))}</button>`).join("")}</div>
    ${tabDefs.map(([k], i) =>
    `<div class="ptab-panel${i === 0 ? " active" : ""}" data-ppanel="${k}">${esc(L(p[k] || p.description || ""))}</div>`).join("")}`;

  let attachmentHtml = "";
  if (p.attachment) {
    attachmentHtml = `
      <div class="btn-row" style="margin-top:0.6rem; display:flex; gap:0.6rem; flex-wrap:wrap;">
        <button class="btn" data-pdf-preview="${esc(p.attachment)}" data-pdf-title="${esc(p.title)}">${esc(t("preview_presentation"))}</button>
        <a class="btn dl" href="${esc(p.attachment)}" download>${esc(t("download_presentation"))}</a>
      </div>`;
  } else if ("attachment" in p) {
    attachmentHtml = `<p style="color:var(--muted); font-size:0.85rem;">${esc(t("no_attachment"))}</p>`;
  }

  const coverHtml = (p.cover && p.attachment)
    ? `<button type="button" class="project-cover" data-pdf-preview="${esc(p.attachment)}" data-pdf-title="${esc(p.title)}" title="${esc(t("preview_presentation"))}"><img src="${esc(p.cover)}" alt="${esc(p.title)}"></button>`
    : "";

  return `
    <div class="project-card${coverHtml ? " has-cover" : ""}" data-key="${key}">
      <div class="pc-main">
        <b>${esc(p.title)}</b>${status}
        ${tabsHtml}
        ${link}
        ${attachmentHtml}
      </div>
      ${coverHtml}
    </div>`;
}

function bindProjectCardEvents(root) {
  root.querySelectorAll(".ptab").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".project-card");
      card.querySelectorAll(".ptab").forEach(b => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on);
      });
      card.querySelectorAll(".ptab-panel").forEach(pn =>
        pn.classList.toggle("active", pn.dataset.ppanel === btn.dataset.ptab));
    });
  });
  root.querySelectorAll("[data-pdf-preview]").forEach(btn => {
    btn.addEventListener("click", () => {
      openModal(`
        <h3>${esc(btn.dataset.pdfTitle)}</h3>
        <embed src="${esc(btn.dataset.pdfPreview)}#view=FitH&navpanes=0" type="application/pdf">
      `);
    });
  });
}

// ============================================================================
// Render: Personal — Story
// ============================================================================
function renderStory() {
  document.getElementById("story-short").textContent = L(SITE_DATA.long_story_short);
  document.getElementById("story-long").textContent = L(SITE_DATA.my_story);
}

// ============================================================================
// Render: Personal — Thoughts (journal)
// ============================================================================
function renderJournal() {
  const entries = SITE_DATA.journal_entries;

  const list = document.getElementById("journal-list");

  if (!entries.length) {
    list.innerHTML = `<p style="color:var(--muted)">${t("no_entries")}</p>`;
    return;
  }

  const fmtDate = (str) => {
    const m = /^(\d{4})-(\d{2})-(\d{2})(?: (\d{2}):(\d{2}))?/.exec(str || "");
    if (!m) return str || "";
    const d = new Date(+m[1], +m[2] - 1, +m[3]);
    let out = d.toLocaleDateString(LANG === "tr" ? "tr-TR" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
    if (m[4] && !(m[4] === "00" && m[5] === "00")) out += ` · ${m[4]}:${m[5]}`;
    return out;
  };
  const bodyHtml = (text) => text.split(/\n{2,}/).map(par => {
    par = par.trim();
    if (!par) return "";
    if (/^-{3,}$/.test(par)) return '<hr class="j-sep">';
    return `<p>${esc(par).replace(/\n/g, "<br>")}</p>`;
  }).join("");

  list.innerHTML = entries.map((e, i) => {
    const text = (LANG === "tr" ? e.text_tr : e.text_en) || "";
    const words = text.trim().split(/\s+/).length;
    const mins = Math.max(1, Math.round(words / 200));
    const long = text.length > 700;
    return `<article class="journal-card${long ? " collapsible collapsed" : ""}">
      <div class="journal-meta"><span>${esc(fmtDate(e.date))}</span><span class="j-dot">·</span><span>${mins} ${esc(t("min_read"))}</span></div>
      <div class="journal-body">${bodyHtml(text)}</div>
      ${long ? `<button type="button" class="j-toggle" data-jtoggle>${esc(t("read_more"))}</button>` : ""}
    </article>`;
  }).join("");
}

// ============================================================================
// Render: Personal — Hobbies
// ============================================================================
function hobbyCardHtml(h) {
  let imageHtml;
  if (h.image) {
    imageHtml = `<div class="hobby-image-wrap"><img src="${esc(h.image)}" alt="${esc(L(h.title))}"></div>`;
  } else {
    imageHtml = `<div class="hobby-image-wrap"><span class="hobby-banner-icon-inline">${h.icon}</span></div>`;
  }
  let linksHtml = "";
  if (h.link) linksHtml += `<a class="link-btn" href="${esc(h.link.url)}" target="_blank">🔗 ${esc(h.link.label)}</a>`;
  if (h.link2) linksHtml += `<a class="link-btn" href="${esc(h.link2.url)}" target="_blank">🔗 ${esc(h.link2.label)}</a>`;
  if (linksHtml) linksHtml = `<div class="link-btn-row" style="margin-top:0.7rem;">${linksHtml}</div>`;

  return `<div class="hobby-card">
    <div class="hobby-body">
      <span class="hobby-icon-badge"><span>${h.icon}</span></span>
      <span class="hobby-title">${esc(L(h.title))}</span>
      <p class="hobby-text">${esc(L(h.text))}</p>
      ${linksHtml}
    </div>
    ${imageHtml}
  </div>`;
}

function renderHobbies() {
  document.getElementById("hobbies-grid").innerHTML = SITE_DATA.hobbies.map(hobbyCardHtml).join("");
  const tags = SITE_DATA.hobby_tags[LANG] || [];
  document.getElementById("hobby-tags").innerHTML = tags.map(tag => `<span class="hobby-tag">${esc(tag)}</span>`).join("");
}

// ============================================================================
// Render: Work
// ============================================================================
function renderWork() {
  const list = document.getElementById("experience-list");
  list.innerHTML = SITE_DATA.experience.map(exp => {
    const link = exp.link ? `<a href="${esc(exp.link)}" target="_blank">${esc(exp.link)}</a>` : "";
    const extended = exp.extended
      ? `<details class="exp"><summary>${esc(t("read_more"))}</summary><div class="exp-body">${esc(L(exp.extended))}</div></details>`
      : "";
    return `<div class="project-card">
      <b>${esc(exp.title)}</b><span class="status-badge">${esc(exp.period)}</span>
      <p>${esc(L(exp.description))}</p>
      ${link}
      ${extended}
    </div>`;
  }).join("");

  document.getElementById("tourism-list").innerHTML = (SITE_DATA.tourism_experience || []).map(x => `
    <div class="project-card">
      <b>${esc(L(x.role))} — ${esc(x.company)}</b><span class="status-badge">${esc(L(x.period))}</span>
      <p style="color:var(--muted); margin:0.3rem 0 0;">${esc(L(x.location))}<br>${esc(L(x.sector))}</p>
    </div>`).join("");

  const lp = SITE_DATA.logbook_presentation;
  const lpEl = document.getElementById("logbook-presentation");
  if (lp) {
    lpEl.innerHTML = `
      <div class="project-card log-pres">
        <button type="button" class="project-cover" data-pdf-preview="${esc(lp.file)}" data-pdf-title="${esc(L(lp.title))}" title="${esc(t("preview_presentation"))}"><img src="${esc(lp.cover)}" alt="${esc(L(lp.title))}"></button>
        <div class="log-pres-body">
          <b>${esc(L(lp.title))}</b><span class="status-badge">${esc(L(lp.badge))}</span>
          <p>${esc(L(lp.text))}</p>
          <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
            <button class="btn" data-pdf-preview="${esc(lp.file)}" data-pdf-title="${esc(L(lp.title))}">${esc(t("preview_presentation"))}</button>
            <a class="btn dl" href="${esc(lp.file)}" download>${esc(t("download_presentation"))}</a>
          </div>
        </div>
      </div>`;
    bindProjectCardEvents(lpEl);
  } else {
    lpEl.innerHTML = "";
  }

  const logbook = document.getElementById("logbook-list");
  logbook.innerHTML = SITE_DATA.internship_weeks.map(w => `
    <details class="exp">
      <summary>${esc(L(w.title))} · ${esc(w.period)}</summary>
      <div class="exp-body">${esc(L(w.content))}</div>
      <ul class="log-days">${(w.days || []).map(d => `<li><span class="log-date">${esc(d.date)}</span> <b>${esc(L(d.title))}</b><br>${esc(L(d.text))}</li>`).join("")}</ul>
    </details>
  `).join("");
}

// ============================================================================
// Render: Projects tab
// ============================================================================
function renderProjects() {
  const cur = document.getElementById("projects-current-list");
  cur.innerHTML = SITE_DATA.current_projects.length
    ? SITE_DATA.current_projects.map(p => projectCardHtml(p, "projects_current")).join("")
    : `<p style="color:var(--muted)">${t("nothing_yet")}</p>`;
  bindProjectCardEvents(cur);

  const past = document.getElementById("projects-past-list");
  past.innerHTML = SITE_DATA.past_projects.length
    ? SITE_DATA.past_projects.map(p => projectCardHtml(p, "projects_past")).join("")
    : `<p style="color:var(--muted)">${t("nothing_yet")}</p>`;
  bindProjectCardEvents(past);
}

// ============================================================================
// Render: Certificates
// ============================================================================
function renderCertificates() {
  const list = document.getElementById("certificates-list");
  if (!SITE_DATA.certificates.length) {
    list.innerHTML = `<p style="color:var(--muted)">${t("nothing_yet")}</p>`;
    return;
  }
  list.innerHTML = SITE_DATA.certificates.map((c, idx) => {
    const isImage = c.file && /\.(png|jpe?g)$/i.test(c.file);
    const thumb = isImage
      ? `<div class="cert-thumb"><img src="${esc(c.file)}" data-cert-view="${idx}"></div>`
      : "";
    const viewBtn = isImage
      ? `<button class="btn" data-cert-view="${idx}">${esc(t("view_certificate"))}</button>`
      : "";
    return `<div class="cert-row">
      <div class="project-card cert-card">
        <b>${esc(L(c.title))}</b>
        <div class="cert-meta">${esc(c.issuer)} · ${esc(c.date)}</div>
        <p>${esc(L(c.description))}</p>
        ${viewBtn}
      </div>
      ${thumb}
    </div>`;
  }).join("");

  list.querySelectorAll("[data-cert-view]").forEach(el => {
    el.addEventListener("click", () => {
      const c = SITE_DATA.certificates[el.dataset.certView];
      openModal(`
        <h3>${esc(L(c.title))}</h3>
        <p style="color:var(--muted); font-size:0.85rem;">${esc(c.issuer)} · ${esc(c.date)}</p>
        <img src="${esc(c.file)}">
      `);
    });
  });
}

// ============================================================================
// Modal
// ============================================================================
function openModal(html) {
  document.getElementById("modal-box").classList.toggle("wide", html.includes("<embed"));
  document.getElementById("modal-content").innerHTML = html;
  document.getElementById("modal-overlay").classList.add("open");
}
function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.getElementById("modal-content").innerHTML = "";
}

// ============================================================================
// Tabs
// ============================================================================
function setupTabs(selector, panelPrefix, attr) {
  const buttons = document.querySelectorAll(selector);
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(`[id^="${panelPrefix}-"]`).forEach(p => p.classList.remove("active"));
      document.getElementById(`${panelPrefix}-${btn.dataset[attr]}`).classList.add("active");
    });
  });
  if (buttons.length) buttons[0].classList.add("active");
}

// ============================================================================
// Init
// ============================================================================
function renderAll() {
  renderLabels();
  renderHome();
  renderStory();
  renderJournal();
  renderHobbies();
  renderWork();
  renderProjects();
  renderCertificates();
}

function init() {
  setupTabs(".tabs:not(.subtabs) .tab-btn", "panel", "tab");
  setupTabs('[data-subtab]', "subpanel", "subtab");
  setupTabs('[data-subtab2]', "subpanel2", "subtab2");
  // set initial active panels (first of each group)
  document.getElementById("panel-home").classList.add("active");
  document.getElementById("subpanel-story").classList.add("active");
  document.getElementById("subpanel2-current").classList.add("active");

  document.getElementById("btn-tr").addEventListener("click", () => { LANG = "tr"; document.documentElement.lang = "tr"; renderAll(); });
  document.getElementById("btn-en").addEventListener("click", () => { LANG = "en"; document.documentElement.lang = "en"; renderAll(); });


  document.getElementById("journal-list").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-jtoggle]");
    if (!btn) return;
    const card = btn.closest(".journal-card");
    const collapsed = card.classList.toggle("collapsed");
    btn.textContent = t(collapsed ? "read_more" : "journal_less");
  });
  document.getElementById("btn-transcript-view").addEventListener("click", (e) => {
    openModal(`<h3>${esc(t("transcript_view").replace("📄 ", ""))}</h3><embed src="${esc(e.currentTarget.dataset.pdf)}#view=FitH&navpanes=0" type="application/pdf">`);
  });
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  renderAll();
}

document.addEventListener("DOMContentLoaded", init);
