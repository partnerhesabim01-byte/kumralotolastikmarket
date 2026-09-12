// Kurumsal/statik sayfaları üretir: markalar, hakkımızda, hizmetlerimiz, iletişim, sss, yasal.
// Çalıştırma: node generate-pages.mjs
import { writeFileSync } from "node:fs";
import { BRANDS, BRAND_ASSETS, navHtml, WA_ICON, TEL_ICON, PIN_ICON, TIRE_ICON, PHONE_DISPLAY, PHONE_TEL, WA, DOMAIN, BRAND_NAME, FAVICON } from "./generate-brands.mjs";

function dropdownHtml(currentSlug) {
  return BRANDS.map(
    (b) => `          <a href="${b.slug}.html"${b.slug === currentSlug ? ' style="color:var(--orange-dark);font-weight:700"' : ""}><span class="dot"></span>${b.name}</a>`
  ).join("\n");
}
function footerBrandLinks() {
  return BRANDS.map((b) => `<li><a href="${b.slug}.html">${b.name}</a></li>`).join("\n          ");
}

function shell({ slug, title, desc, breadcrumb, heroTitle, heroDesc, body }) {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPKM5C63');</script>
<!-- End Google Tag Manager -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} | ${BRAND_NAME}</title>
<meta name="description" content="${desc}">
<meta name="author" content="${BRAND_NAME}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#1c1c1e">
<link rel="canonical" href="${DOMAIN}/${slug}.html">
<meta property="og:type" content="website">
<meta property="og:title" content="${title} | ${BRAND_NAME}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${DOMAIN}/${slug}.html">
<meta property="og:locale" content="tr_TR">
<meta property="og:site_name" content="${BRAND_NAME}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="${FAVICON}">
<link rel="manifest" href="site.webmanifest">
<link rel="preload" href="fonts/poppins-latin-ext-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/poppins-latin-ext-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPKM5C63"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<header class="header">
  <div class="container nav">
    <a href="index.html" class="logo" aria-label="${BRAND_NAME} ana sayfa">
      <img src="img/logo.avif" alt="${BRAND_NAME}" width="480" height="140">
    </a>
    <ul class="menu">
      <li><a href="index.html">Anasayfa</a></li>
      <li><a href="hakkimizda.html"${slug === "hakkimizda" ? ' class="active"' : ""}>Kurumsal</a></li>
      <li class="has-sub">
        <a href="markalar.html"${slug === "markalar" ? ' class="active"' : ""}>Markalar</a>
        <div class="dropdown">
${dropdownHtml("")}
        </div>
      </li>
      <li><a href="hizmetlerimiz.html"${slug === "hizmetlerimiz" ? ' class="active"' : ""}>Hizmetlerimiz</a></li>
      <li><a href="lastik-tamiri.html"${slug === "lastik-tamiri" ? ' class="active"' : ""}>Lastik Tamiri</a></li>
      <li><a href="blog.html"${slug === "blog" ? ' class="active"' : ""}>Blog</a></li>
      <li><a href="sss.html"${slug === "sss" ? ' class="active"' : ""}>S.S.S.</a></li>
      <li><a href="iletisim.html"${slug === "iletisim" ? ' class="active"' : ""}>İletişim</a></li>
    </ul>
    <div class="nav-cta">
      <a href="tel:${PHONE_TEL}" class="nav-phone">
        <span class="ico">${TEL_ICON}</span>
        <span><small>Hemen Arayın</small><b>${PHONE_DISPLAY}</b></span>
      </a>
      <button class="burger" aria-label="Menüyü aç/kapat"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="nav-overlay"></div>
<section class="phero"><div class="container">
  <div class="crumb"><a href="index.html">Anasayfa</a> <span>›</span> ${breadcrumb}</div>
  <h1>${heroTitle}</h1><p>${heroDesc}</p>
</div></section>
${body}
<footer class="footer">
  <div class="container">
    <div class="f-grid">
      <div>
        <span style="display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.15rem;color:#fff">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#d61f26" stroke-width="2">${TIRE_ICON}</svg>
          Kumral <span style="color:#d61f26">Oto Lastik</span>
        </span>
        <p>Aydın'da tüm dünya markalarında lastik satışı, balans, rot ayarı ve lastik depolama hizmeti.</p>
        <div class="f-soc">
          <a href="https://wa.me/${WA}" aria-label="WhatsApp" target="_blank" rel="noopener">${WA_ICON}</a>
          <a href="tel:${PHONE_TEL}" aria-label="Telefon">${TEL_ICON}</a>
        </div>
      </div>
      <div>
        <h4>Hızlı Erişim</h4>
        <ul class="f-links">
          <li><a href="index.html">Anasayfa</a></li>
          <li><a href="hakkimizda.html">Hakkımızda</a></li>
          <li><a href="hizmetlerimiz.html">Hizmetlerimiz</a></li>
          <li><a href="lastik-tamiri.html">Lastik Tamiri</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="sss.html">Sıkça Sorulan Sorular</a></li>
          <li><a href="iletisim.html">İletişim</a></li>
        </ul>
      </div>
      <div>
        <h4>Markalar</h4>
        <ul class="f-links">
          ${footerBrandLinks()}
        </ul>
      </div>
      <div>
        <h4>İletişim</h4>
        <ul class="f-contact">
          <li>${PIN_ICON}<span>Ata Mah. 738. Sokak No:18/A, 09000 Efeler/Aydın</span></li>
          <li>${TEL_ICON}<a href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>Pazartesi - Cumartesi 08:30 - 19:00</span></li>
        </ul>
        <a href="iletisim.html" class="btn btn-primary" style="margin-top:8px">Bilgi Al</a>
      </div>
    </div>
    <div class="f-bottom">
      <span>© <span id="yil">2026</span> ${BRAND_NAME} — Tüm hakları saklıdır.</span>
      <span class="f-legal">
        <a href="gizlilik-politikasi.html">Gizlilik Politikası</a>
        <a href="cerez-politikasi.html">Çerez Politikası</a>
      </span>
    </div>
  </div>
</footer>
<div class="fab">
  <a class="f-wa" href="https://wa.me/${WA}?text=Merhaba,%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener" aria-label="WhatsApp">${WA_ICON}</a>
  <a class="f-tel" href="tel:${PHONE_TEL}" aria-label="Telefon">${TEL_ICON}</a>
</div>
<div class="mbar">
  <a class="m-tel" href="tel:${PHONE_TEL}">${TEL_ICON} Hemen Ara</a>
  <a class="m-wa" href="https://wa.me/${WA}" target="_blank" rel="noopener">${WA_ICON} WhatsApp</a>
</div>
<div class="cookie-banner" role="dialog" aria-label="Çerez onayı">
  <p>Bu sitede deneyiminizi iyileştirmek için çerezler kullanılır. Detaylar için <a href="cerez-politikasi.html">Çerez Politikası</a>'nı inceleyebilirsiniz.</p>
  <div class="cb-acts">
    <button type="button" class="cb-accept">Kabul Et</button>
    <button type="button" class="cb-reject">Reddet</button>
  </div>
</div>
<script src="js/main.js" defer></script>
</body>
</html>
`;
}

/* ===================== MARKALAR ===================== */
const brandGrid = BRANDS.map((b) => {
  const hasLogo = BRAND_ASSETS[b.slug]?.logo;
  const bi = hasLogo
    ? `<div class="bi bi-logo"><img src="img/logos/${b.slug}.avif" alt="${b.name} logo" loading="lazy"></div>`
    : `<div class="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg></div>`;
  return `      <a href="${b.slug}.html" class="brand-card reveal">
        ${bi}
        <h3>${b.name}</h3><p>${b.tag}</p>
        <span class="serv-link">Detaylı Bilgi <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
      </a>`;
}).join("\n");

writeFileSync(
  "markalar.html",
  shell({
    slug: "markalar",
    title: "Tüm Lastik Markaları",
    desc: "Kumral Oto Lastik Market'te satışa sunulan tüm lastik markaları: Petlas, Lassa, Bridgestone, Goodyear, Milestone, Continental, Hankook, Kumho, Falken, Dunlop, Laufen.",
    breadcrumb: "Markalar",
    heroTitle: "Tüm Markalarımız",
    heroDesc: "Aydın'da 11 dünya markasında yaz, kış ve 4 mevsim lastik seçenekleri sizi bekliyor.",
    body: `<section class="sec"><div class="container"><div class="brand-grid">
${brandGrid}
    </div></div></section>
<div class="container" style="padding-bottom:80px"><div class="cta-band reveal">
  <div><h2>Markanızı Bulamadınız mı?</h2><p>Aradığınız marka veya ebat için hemen arayın, stok durumunu öğrenelim.</p></div>
  <div class="acts">
    <a href="tel:${PHONE_TEL}" class="btn btn-primary btn-lg">${PHONE_DISPLAY}</a>
    <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg">WhatsApp'tan Yaz</a>
  </div>
</div></div>`,
  }),
  "utf8"
);
console.log("yazıldı: markalar.html");

/* ===================== HİZMETLERİMİZ ===================== */
writeFileSync(
  "hizmetlerimiz.html",
  shell({
    slug: "hizmetlerimiz",
    title: "Hizmetlerimiz",
    desc: "Kumral Oto Lastik Market hizmetleri: lastik satış ve montajı, balans ayarı, rot ayarı, mevsimlik lastik depolama.",
    breadcrumb: "Hizmetlerimiz",
    heroTitle: "Hizmetlerimiz",
    heroDesc: "Lastik satışının ötesinde, aracınızın yola güvenle çıkması için gereken tüm işlemleri tek adreste tamamlıyoruz.",
    body: `<section class="sec"><div class="container">
      <div class="serv-grid">
        <div class="serv-card reveal">
          <div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg></div>
          <h3>Lastik Satışı ve Montajı</h3>
          <p>11 dünya markasında yaz, kış ve 4 mevsim lastik seçenekleri; profesyonel montaj hizmetiyle birlikte.</p>
        </div>
        <div class="serv-card reveal">
          <div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg></div>
          <h3>Balans Ayarı</h3>
          <p>Direksiyon titremesini önlemek ve lastik ömrünü uzatmak için hassas balans ayarı yapıyoruz.</p>
        </div>
        <div class="serv-card reveal">
          <div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
          <h3>Rot Ayarı</h3>
          <p>Düzensiz lastik aşınmasını önlemek ve direksiyon hakimiyetini artırmak için rot ayarı sunuyoruz.</p>
        </div>
        <div class="serv-card reveal">
          <div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg></div>
          <h3>Mevsimlik Lastik Depolama</h3>
          <p>Sezon dışı lastiklerinizi uygun koşullarda mağazamızda saklıyoruz, sezon geldiğinde hazır ediyoruz.</p>
        </div>
        <div class="serv-card reveal">
          <div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z"/><path d="M12 8v4l3 2"/></svg></div>
          <h3>Lastik Basıncı ve Kontrol</h3>
          <p>Her montajda lastik basıncını üretici standartlarına göre ayarlıyor, genel durum kontrolü yapıyoruz.</p>
        </div>
        <div class="serv-card reveal">
          <div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/></svg></div>
          <h3>Ücretsiz Danışmanlık</h3>
          <p>Aracınız ve kullanım şeklinize göre en uygun marka ve modeli birlikte belirliyoruz.</p>
        </div>
      </div>
    </div></section>
<div class="container" style="padding-bottom:80px"><div class="cta-band reveal">
  <div><h2>Randevunuzu Hemen Oluşturun</h2><p>Aracınızın ebadını bildirin, uygun tarih ve saati birlikte planlayalım.</p></div>
  <div class="acts">
    <a href="tel:${PHONE_TEL}" class="btn btn-primary btn-lg">${PHONE_DISPLAY}</a>
    <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg">WhatsApp'tan Yaz</a>
  </div>
</div></div>`,
  }),
  "utf8"
);
console.log("yazıldı: hizmetlerimiz.html");

/* ===================== LASTİK TAMİRİ ===================== */
writeFileSync(
  "lastik-tamiri.html",
  shell({
    slug: "lastik-tamiri",
    title: "Lastik Tamiri",
    desc: "Aydın'da lastik tamiri: delik/çivi yaması, supap değişimi ve yan duvar hasarı kontrolü. Kumral Oto Lastik Market'te güvenli ve kalıcı tamir.",
    breadcrumb: "Lastik Tamiri",
    heroTitle: "Lastik Tamiri",
    heroDesc: "Her delik değişim gerektirmez. Uygun onarım koşullarında lastiğinizi güvenle yola çıkarıyoruz.",
    body: `<section class="content"><div class="container content-grid">
      <div class="prose reveal">
        <p class="lead">Lastiğinizde çivi, vida veya küçük bir kesik mi var? Uygun konum ve boyuttaki hasarlarda, lastiği değiştirmeden önce doğru yöntemle tamir ettirmek hem daha ekonomik hem de çevreye daha duyarlı bir çözümdür.</p>
        <h2>Sunduğumuz Tamir Hizmetleri</h2>
        <ul class="ticks">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span>Delik/Çivi Yaması (mantar yama - iç yama tekniği)</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span>Supap (Valf) Değişimi</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span>Yan Duvar Hasarı Değerlendirmesi</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span>Tamir Sonrası Balans Kontrolü</span></li>
        </ul>
        <h2>Doğru Tamir Yöntemi: Mantar Yama</h2>
        <p>Sırt bölgesindeki uygun boyuttaki delikleri, hem içten hem dıştan kapatan mantar yama (iç yama) yöntemiyle onarıyoruz. Sadece dıştan yapılan geçici yamalar zamanla hava kaçırabileceği için tercih etmiyoruz.</p>
        <h2>Ne Zaman Tamir, Ne Zaman Değişim?</h2>
        <p>Sırt bölgesindeki küçük çaplı delikler genellikle güvenle tamir edilebilir. Ancak yan duvardaki hasarlar, çok büyük kesikler veya daha önce birden fazla kez tamir edilmiş lastiklerde, güvenliğiniz için tamir yerine değişim öneriyoruz.</p>
        <h3>Neden Bu Kadar Titiziz?</h3>
        <p>Lastik, aracınızın yolla tek temas noktasıdır. Uygun olmayan bir tamir, ilerleyen zamanda ani hava kaybına yol açabilir. Bu yüzden her tamir talebini önce yerinde inceliyor, uygun değilse dürüstçe değişim öneriyoruz.</p>
        <div class="note-box"><b>Hızlı Kontrol İçin Gelin:</b> Lastiğinizi mağazamıza getirin, tamir edilebilir olup olmadığını ücretsiz kontrol edelim. <a href="tel:${PHONE_TEL}" style="color:var(--orange-dark);font-weight:700">${PHONE_DISPLAY}</a></div>
      </div>
      <aside class="sidebar">
        <div class="side-card"><h4>Tüm Markalar</h4><ul class="side-links">${navHtml("")}</ul></div>
        <div class="side-card side-cta">
          <h4>Lastiğiniz Tamir Edilebilir mi?</h4>
          <p>Fotoğrafını gönderin veya mağazamıza uğrayın, hemen değerlendirelim.</p>
          <span class="ph">${PHONE_DISPLAY}</span>
          <a href="tel:${PHONE_TEL}" class="btn btn-primary btn-block">Hemen Ara</a>
          <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="btn btn-wa btn-block" style="margin-top:10px">${WA_ICON} WhatsApp</a>
        </div>
        <div class="side-card">
          <h4>Adres</h4>
          <p class="muted" style="font-size:.92rem;margin:0">Ata Mah. 738. Sokak No:18/A, 09000 Efeler/Aydın</p>
        </div>
      </aside>
    </div></section>
<div class="container" style="padding-bottom:80px"><div class="cta-band reveal">
  <div><h2>Lastiğiniz mi Delindi?</h2><p>Değişime gerek kalmadan tamir edilip edilemeyeceğini hemen öğrenin.</p></div>
  <div class="acts">
    <a href="tel:${PHONE_TEL}" class="btn btn-primary btn-lg">${PHONE_DISPLAY}</a>
    <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg">WhatsApp'tan Yaz</a>
  </div>
</div></div>`,
  }),
  "utf8"
);
console.log("yazıldı: lastik-tamiri.html");

/* ===================== HAKKIMIZDA ===================== */
writeFileSync(
  "hakkimizda.html",
  shell({
    slug: "hakkimizda",
    title: "Hakkımızda",
    desc: "Kumral Oto Lastik Market hakkında: Aydın'da 11 dünya markasında lastik satışı, balans, rot ayarı ve depolama hizmeti.",
    breadcrumb: "Hakkımızda",
    heroTitle: "Hakkımızda",
    heroDesc: "Efeler / Aydın merkezli mağazamızda, doğru lastik seçiminin güvenli sürüşün ilk adımı olduğuna inanıyoruz.",
    body: `<section class="content"><div class="container content-grid">
      <div class="prose reveal">
        <p class="lead">Kumral Oto Lastik Market olarak, Aydın'da bireysel ve kurumsal müşterilerimize 11 dünya markasında lastik satışı, montaj, balans, rot ayarı ve mevsimlik lastik depolama hizmeti sunuyoruz.</p>
        <h2>Kimiz?</h2>
        <p>Ekibimiz, aracınız için doğru lastiği seçmenin sadece marka tercihinden ibaret olmadığını, kullanım alışkanlıklarınıza ve bütçenize uygun bir denge kurmak gerektiğini biliyor. Bu yaklaşımla her müşterimize kendi ihtiyacına özel öneri sunuyoruz.</p>
        <h2>Neden Bizi Tercih Etmelisiniz?</h2>
        <div class="feat-grid" style="margin-top:10px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px">
          <div class="serv-card" style="padding:26px 22px"><div class="si" style="width:48px;height:48px;margin-bottom:12px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg></div><h3 style="font-size:1.05rem">Geniş Marka Yelpazesi</h3><p style="font-size:.9rem">11 markada ekonomikten premium segmente seçenek.</p></div>
          <div class="serv-card" style="padding:26px 22px"><div class="si" style="width:48px;height:48px;margin-bottom:12px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px"><path d="M20 6L9 17l-5-5"/></svg></div><h3 style="font-size:1.05rem">Uzman Montaj</h3><p style="font-size:.9rem">Balans ve rot ayarı dahil tam kontrol.</p></div>
          <div class="serv-card" style="padding:26px 22px"><div class="si" style="width:48px;height:48px;margin-bottom:12px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div><h3 style="font-size:1.05rem">Randevulu Hızlı Hizmet</h3><p style="font-size:.9rem">Bekleme yapmadan aracınızın işlemini tamamlayın.</p></div>
        </div>
        <h2>Misyonumuz</h2>
        <p>Doğru bilgiyle, doğru markayı, doğru fiyattan sunarak müşterilerimizin yola güvenle çıkmasını sağlamak temel önceliğimizdir.</p>
        <div class="note-box"><b>Ücretsiz Danışmanlık:</b> Aracınızın ebadını ve kullanım şeklinizi söyleyin, size en uygun markayı önerelim. Hemen arayın: <a href="tel:${PHONE_TEL}" style="color:var(--orange-dark);font-weight:700">${PHONE_DISPLAY}</a></div>
      </div>
      <aside class="sidebar">
        <div class="side-card"><h4>Markalarımız</h4><ul class="side-links">${navHtml("")}</ul></div>
        <div class="side-card side-cta">
          <h4>Ücretsiz Bilgi Alın</h4>
          <p>Aracınızın ebadını söyleyin, uygun markayı önerelim.</p>
          <span class="ph">${PHONE_DISPLAY}</span>
          <a href="tel:${PHONE_TEL}" class="btn btn-primary btn-block">Hemen Ara</a>
          <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="btn btn-wa btn-block" style="margin-top:10px">${WA_ICON} WhatsApp</a>
        </div>
      </aside>
    </div></section>`,
  }),
  "utf8"
);
console.log("yazıldı: hakkimizda.html");

/* ===================== İLETİŞİM ===================== */
writeFileSync(
  "iletisim.html",
  shell({
    slug: "iletisim",
    title: "İletişim",
    desc: "Kumral Oto Lastik Market iletişim bilgileri: telefon, WhatsApp ve çalışma saatleri.",
    breadcrumb: "İletişim",
    heroTitle: "İletişim",
    heroDesc: "Sorularınız ve randevu talepleriniz için bize ulaşın.",
    body: `<section class="sec"><div class="container cnt-grid">
      <div class="cnt-cards reveal">
        <div class="cnt-card"><div class="ci">${PIN_ICON.replace("currentColor", "#fff")}</div><div><h4>Adres</h4><p>Ata Mah. 738. Sokak No:18/A, 09000 Efeler/Aydın</p></div></div>
        <div class="cnt-card"><div class="ci">${TEL_ICON.replace("currentColor", "#fff")}</div><div><h4>Telefon</h4><a href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a></div></div>
        <div class="cnt-card"><div class="ci">${WA_ICON}</div><div><h4>WhatsApp</h4><a href="https://wa.me/${WA}" target="_blank" rel="noopener">${PHONE_DISPLAY}</a></div></div>
        <div class="cnt-card"><div class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div><div><h4>Çalışma Saatleri</h4><p>Pazartesi - Cumartesi 08:30 - 19:00</p></div></div>
      </div>
      <div class="map-wrap reveal"><iframe src="https://maps.google.com/maps?q=${encodeURIComponent("Ata Mah. 738. Sokak No:18/A, 09000 Efeler/Aydın")}&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy" title="Kumral Oto Lastik Market konum haritası"></iframe></div>
    </div></section>
<section class="sec quote" style="padding-top:0" id="teklif">
  <div class="container quote-wrap">
    <div class="quote-info reveal">
      <span class="sec-tag">Ücretsiz Bilgi ve Randevu</span>
      <h2>Dakikalar İçinde Bilgi Alın</h2>
      <p>Formu doldurun, ekibimiz en kısa sürede sizi arasın veya doğrudan WhatsApp üzerinden bilgi alın.</p>
      <ul class="quote-list">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Ücretsiz bilgi ve danışmanlık</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> 11 markada geniş seçenek</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Balans, rot ve depolama</li>
      </ul>
    </div>
    <div class="form-box reveal">
      <h3>Bilgi ve Randevu Formu</h3>
      <p class="fsub">Bilgilerinizi girin, talebiniz WhatsApp üzerinden bize ulaşsın.</p>
      <form data-wa>
        <div class="fgrid">
          <div class="field"><label>Ad Soyad *</label><input type="text" name="ad" placeholder="Adınız Soyadınız" required></div>
          <div class="field"><label>Telefon *</label><input type="tel" name="tel" placeholder="05__ ___ __ __" required></div>
        </div>
        <div class="field"><label>Lastik Ebadı</label><input type="text" name="ebat" placeholder="Örn: 195/65 R15"></div>
        <div class="field"><label>Eklemek İstedikleriniz</label><textarea name="mesaj" placeholder="Aracınız veya talebiniz hakkında eklemek istedikleriniz"></textarea></div>
        <button type="submit" class="btn btn-wa btn-block btn-lg">${WA_ICON} WhatsApp ile Bilgi İste</button>
        <p class="form-note">Bilgileriniz yalnızca size dönüş yapmak için kullanılır, üçüncü kişilerle paylaşılmaz.</p>
      </form>
    </div>
  </div>
</section>`,
  }),
  "utf8"
);
console.log("yazıldı: iletisim.html");

/* ===================== SSS ===================== */
const faqs = [
  ["Hangi marka lastikleri satıyorsunuz?", "Petlas, Lassa, Bridgestone, Goodyear, Milestone, Continental, Hankook, Kumho, Falken, Dunlop ve Laufen marka lastikleri satıyoruz."],
  ["Fiyat listesi neden yok?", "Lastik fiyatları döviz kuruna ve tedarik durumuna göre sık değiştiği için güncel fiyatı telefon veya WhatsApp üzerinden anlık olarak paylaşıyoruz."],
  ["Balans ve rot ayarı lastik fiyatına dahil mi?", "Lastik montajıyla birlikte balans ayarı hizmetimizden faydalanabilirsiniz; rot ayarı ihtiyaç durumuna göre ayrıca değerlendirilir. Detaylar için bizi arayın."],
  ["Eski lastiklerimi ne yapıyorsunuz?", "Talep ederseniz eski lastiklerinizi mevzuata uygun şekilde teslim alıyoruz; isterseniz mevsimlik depolama hizmetimizden de faydalanabilirsiniz."],
  ["Randevu almam gerekiyor mu?", "Bekleme yapmadan hizmet alabilmeniz için önceden arayıp randevu oluşturmanızı öneririz."],
  ["Hangi ebatlarda lastik buluyorsunuz?", "Ruhsatınızdaki ebat bilgisini paylaşın, stoktaki uygun marka ve modelleri birlikte değerlendirelim."],
  ["Ticari araç lastiği satıyor musunuz?", "Evet, seçili markalarda hafif ticari araç lastiği seçeneklerimiz de mevcuttur."],
  ["Mağazanız nerede?", "Ata Mah. 738. Sokak No:18/A, 09000 Efeler/Aydın adresinde hizmet veriyoruz. Telefon veya WhatsApp üzerinden de konum paylaşabiliriz."],
];
const faqHtml = faqs.map(([q, a]) => `      <div class="faq-item">
        <button class="faq-q" type="button">${q}<span class="pm">+</span></button>
        <div class="faq-a"><p>${a}</p></div>
      </div>`).join("\n");

writeFileSync(
  "sss.html",
  shell({
    slug: "sss",
    title: "Sıkça Sorulan Sorular",
    desc: "Kumral Oto Lastik Market hakkında merak edilenler: markalar, fiyatlandırma, randevu ve hizmetler.",
    breadcrumb: "S.S.S.",
    heroTitle: "Sıkça Sorulan Sorular",
    heroDesc: "Lastik alım ve montaj süreciyle ilgili en çok merak edilen soruları sizin için derledik.",
    body: `<section class="sec"><div class="container"><div class="faq">
${faqHtml}
    </div></div></section>`,
  }),
  "utf8"
);
console.log("yazıldı: sss.html");

/* ===================== YASAL SAYFALAR ===================== */
function legalPage(slug, title, sections) {
  const sectionsHtml = sections.map(([h, ps]) => `      <h2>${h}</h2>\n` + ps.map((p) => `      <p>${p}</p>`).join("\n")).join("\n");
  writeFileSync(
    `${slug}.html`,
    shell({
      slug,
      title,
      desc: `${BRAND_NAME} ${title.toLowerCase()} metni.`,
      breadcrumb: title,
      heroTitle: title,
      heroDesc: "",
      body: `<section class="legal-body"><div class="container">
      <p class="updated">Son güncelleme: Eylül 2026</p>
${sectionsHtml}
    </div></section>`,
    }),
    "utf8"
  );
  console.log(`yazıldı: ${slug}.html`);
}

legalPage("gizlilik-politikasi", "Gizlilik Politikası", [
  ["Genel", [`${BRAND_NAME} olarak, bu web sitesi üzerinden bizimle iletişime geçen ziyaretçilerin kişisel verilerinin güvenliğine önem veriyoruz. Bu metin, hangi bilgilerin toplandığını ve nasıl kullanıldığını açıklar.`]],
  ["Toplanan Bilgiler", ["Web sitemizdeki iletişim formu veya WhatsApp üzerinden bize ilettiğiniz ad-soyad, telefon numarası ve mesaj içeriği gibi bilgiler yalnızca talebinize dönüş yapmak amacıyla işlenir."]],
  ["Bilgilerin Kullanımı", ["Paylaştığınız bilgiler yalnızca sizinle iletişime geçmek, randevu planlamak ve hizmet sunmak amacıyla kullanılır; üçüncü kişi veya kurumlarla paylaşılmaz, pazarlama amacıyla satılmaz."]],
  ["İletişim", [`Gizlilik politikamızla ilgili sorularınız için ${PHONE_DISPLAY} numaralı telefondan bize ulaşabilirsiniz.`]],
]);

legalPage("cerez-politikasi", "Çerez Politikası", [
  ["Çerezler Hakkında", ["Web sitemiz, deneyiminizi iyileştirmek amacıyla çerezler (cookie) kullanabilir."]],
  ["Çerez Türleri", ["Zorunlu çerezler sitenin temel işlevlerini (menü, form gönderimi) çalıştırmak için kullanılır. Tercihe bağlı çerezler ise yalnızca onayınız halinde, ziyaret istatistiklerini ölçmek için kullanılabilir."]],
  ["Tercihlerinizi Yönetme", ["Site ilk ziyaretinizde açılan çerez onay bandından tercihlerinizi 'Kabul Et' veya 'Reddet' seçenekleriyle belirleyebilir, tarayıcı ayarlarınızdan çerezleri istediğiniz zaman silebilirsiniz."]],
]);

export { shell };
