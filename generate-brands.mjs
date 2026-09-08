// Marka sayfalarını (her lastik markası için) tek şablondan üretir.
// Çalıştırma: node generate-brands.mjs
import { writeFileSync } from "node:fs";

const PHONE_DISPLAY = "0533 020 19 87";
const PHONE_TEL = "+905330201987";
const WA = "905330201987";
const DOMAIN = "https://kumralotolastikmarket.com.tr";
const BRAND_NAME = "Kumral Oto Lastik Market";
const FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231c1c1e' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='9' fill='%23d61f26'/%3E%3Ccircle cx='12' cy='12' r='3' fill='%23fff' stroke='none'/%3E%3C/svg%3E";

const TIRE_ICON = '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M21 12h-2M5 12H3M18.4 5.6l-1.4 1.4M7 16l-1.4 1.4M18.4 18.4L17 17M7 8L5.6 5.6"/>';

// Müşterinin img/ klasörüne eklediği marka logoları + lastik fotoğrafları,
// AVIF'e çevrilip img/logos/<slug>.avif ve img/tires/<slug>.avif olarak
// kaydedildi (bkz. _convert_images.mjs). Lassa ve Milestone için logo
// sağlanmadı — o markalarda .bi rozeti eski jenerik SVG ikonunu korur.
const BRAND_ASSETS = {
  petlas: { logo: [320, 104], tire: [500, 500] },
  lassa: { logo: [320, 71], tire: [620, 857] },
  bridgestone: { logo: [320, 49], tire: [320, 320] },
  goodyear: { logo: [320, 84], tire: [620, 620] },
  milestone: { logo: [320, 90], tire: [345, 499] },
  continental: { logo: [320, 70], tire: [320, 320] },
  hankook: { logo: [320, 67], tire: [620, 717] },
  kumho: { logo: [320, 115], tire: [357, 500] },
  falken: { logo: [320, 94], tire: [368, 500] },
  dunlop: { logo: [320, 84], tire: [343, 500] },
  laufen: { logo: [320, 58], tire: [620, 325] },
};

const BRANDS = [
  {
    slug: "petlas",
    name: "Petlas",
    origin: "Türkiye",
    tag: "Yerli üretim, uygun fiyat/performans dengesi",
    lead: "Petlas, Adana merkezli üretim tesisiyle Türkiye'nin köklü lastik üreticilerinden biridir. İş Bankası iştiraki olarak yurt içi ve yurt dışı pazarlarda geniş bir ürün gamı sunar.",
    types: ["Yaz Lastiği", "Kış Lastiği", "4 Mevsim Lastiği", "Hafif Ticari Araç Lastiği"],
    why: "Petlas'ı tercih eden müşterilerimiz, yerli üretimin sunduğu uygun fiyat avantajıyla günlük kullanım için dengeli bir performans elde ediyor.",
  },
  {
    slug: "lassa",
    name: "Lassa",
    origin: "Türkiye",
    tag: "Brisa güvencesiyle Türkiye'nin lider markalarından",
    lead: "Lassa, Bridgestone ile Sabancı Holding ortaklığında faaliyet gösteren Brisa tarafından Kocaeli'de üretilir. Türkiye'de en çok tercih edilen lastik markalarından biridir.",
    types: ["Yaz Lastiği", "Kış Lastiği", "4 Mevsim Lastiği", "SUV Lastiği"],
    why: "Lassa, hem şehir içi konforu hem de uzun yol dayanıklılığını bir arada arayan sürücüler için dengeli bir seçenek sunar.",
  },
  {
    slug: "bridgestone",
    name: "Bridgestone",
    origin: "Japonya",
    tag: "Dünyanın en büyük lastik üreticilerinden",
    lead: "Bridgestone, Japonya merkezli olup dünya genelinde üretim hacmi bakımından sektörün öncü markalarından biridir. Binek araçtan ticari araca geniş bir ürün yelpazesine sahiptir.",
    types: ["Yaz Lastiği", "Kış Lastiği", "4 Mevsim Lastiği", "SUV/4x4 Lastiği"],
    why: "Bridgestone'u tercih eden müşterilerimiz, üst segment teknolojiyle üretilmiş lastiklerin sunduğu yol tutuş ve uzun ömür avantajından faydalanıyor.",
  },
  {
    slug: "goodyear",
    name: "Goodyear",
    origin: "ABD",
    tag: "Global ölçekte köklü Amerikan markası",
    lead: "Goodyear, Amerika Birleşik Devletleri merkezli, dünya genelinde onlarca ülkede üretim yapan, otomotiv sektörünün en tanınmış lastik markalarından biridir.",
    types: ["Yaz Lastiği", "Kış Lastiği", "4 Mevsim Lastiği", "Ticari Araç Lastiği"],
    why: "Goodyear, özellikle uzun yol kullanımında yakıt verimliliği ve dayanıklılık arayan sürücüler arasında tercih edilir.",
  },
  {
    slug: "milestone",
    name: "Milestone",
    origin: "Hindistan (Apollo Tyres)",
    tag: "Apollo Tyres bünyesinde ekonomik segment",
    lead: "Milestone, Hindistan merkezli global lastik üreticisi Apollo Tyres bünyesinde, ekonomik segmentte fiyat/performans odaklı çözümler sunan bir markadır.",
    types: ["Yaz Lastiği", "Kış Lastiği", "4 Mevsim Lastiği"],
    why: "Milestone, bütçe dostu bir seçenekle güvenilir bir lastik arayan müşterilerimiz için pratik bir çözümdür.",
  },
  {
    slug: "continental",
    name: "Continental",
    origin: "Almanya",
    tag: "Almanya kökenli, premium teknoloji",
    lead: "Continental, Almanya merkezli olup otomotiv teknolojileri ve premium segment lastik üretimiyle tanınan, sektörün önde gelen markalarından biridir.",
    types: ["Yaz Lastiği", "Kış Lastiği", "4 Mevsim Lastiği", "SUV/4x4 Lastiği"],
    why: "Continental'i tercih eden müşterilerimiz, özellikle ıslak zeminde fren mesafesi ve yol tutuş performansından memnun kalıyor.",
  },
  {
    slug: "hankook",
    name: "Hankook",
    origin: "Güney Kore",
    tag: "Güney Kore merkezli, geniş ürün gamı",
    lead: "Hankook, Güney Kore merkezli olup dünya genelinde geniş bir ürün gamıyla binek araçtan performans lastiklerine kadar farklı segmentlere hitap eder.",
    types: ["Yaz Lastiği", "Kış Lastiği", "4 Mevsim Lastiği", "SUV Lastiği"],
    why: "Hankook, orta-üst segmentte fiyat/performans dengesi arayan müşterilerimiz arasında sık tercih edilen markalardan biridir.",
  },
  {
    slug: "kumho",
    name: "Kumho",
    origin: "Güney Kore",
    tag: "Konfor ve performans dengesi",
    lead: "Kumho, Güney Kore merkezli bir lastik üreticisi olup konfor ve performansı bir arada sunan ürün gamıyla bilinir.",
    types: ["Yaz Lastiği", "Kış Lastiği", "4 Mevsim Lastiği"],
    why: "Kumho, sessiz sürüş konforu ve dengeli sürüş performansı arayan müşterilerimiz için iyi bir alternatiftir.",
  },
  {
    slug: "falken",
    name: "Falken",
    origin: "Japonya (Sumitomo Rubber)",
    tag: "Sportif sürüş odaklı, Sumitomo Rubber bünyesinde",
    lead: "Falken, Japon menşeli Sumitomo Rubber Industries bünyesinde faaliyet gösteren, özellikle sportif ve dinamik sürüş performansıyla öne çıkan bir markadır.",
    types: ["Yaz Lastiği", "4 Mevsim Lastiği", "SUV/4x4 Lastiği"],
    why: "Falken, viraj performansı ve yol tutuşuna önem veren, daha dinamik sürüş tarzına sahip müşterilerimiz arasında tercih edilir.",
  },
  {
    slug: "dunlop",
    name: "Dunlop",
    origin: "İngiltere kökenli",
    tag: "Tarihi İngiliz markası, Goodyear/Sumitomo bünyesinde",
    lead: "Dunlop, İngiltere kökenli, lastik sektörünün en eski markalarından biridir; günümüzde bölgeye göre Goodyear ya da Sumitomo Rubber bünyesinde üretilmektedir.",
    types: ["Yaz Lastiği", "Kış Lastiği", "4 Mevsim Lastiği"],
    why: "Dunlop, uzun yıllara dayanan marka güveniyle dengeli bir sürüş deneyimi arayan müşterilerimiz tarafından tercih edilir.",
  },
  {
    slug: "laufen",
    name: "Laufen",
    origin: "Güney Kore (Hankook)",
    tag: "Hankook bünyesinde uygun fiyatlı segment",
    lead: "Laufen, Hankook bünyesinde faaliyet gösteren, uygun fiyatlı segmentte güvenilir bir alternatif sunan bir markadır.",
    types: ["Yaz Lastiği", "Kış Lastiği", "4 Mevsim Lastiği"],
    why: "Laufen, Hankook kalite standartlarından uygun bütçeyle faydalanmak isteyen müşterilerimiz için pratik bir seçenektir.",
  },
];

function navHtml(currentSlug) {
  return BRANDS.map(
    (b) =>
      `<li><a href="${b.slug}.html"${b.slug === currentSlug ? ' style="color:var(--orange-dark);font-weight:700"' : ""}>${b.name} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></a></li>`
  ).join("");
}

function footerBrandLinks() {
  return BRANDS.map((b) => `<li><a href="${b.slug}.html">${b.name}</a></li>`).join("\n          ");
}

function dropdownHtml(currentSlug) {
  return BRANDS.map(
    (b) =>
      `<a href="${b.slug}.html"${b.slug === currentSlug ? ' style="color:var(--orange-dark);font-weight:700"' : ""}><span class="dot"></span>${b.name}</a>`
  ).join("\n          ");
}

const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.9 5-1.3A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3-1.3-5-4.4-5.1-4.6-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.9-.1 1.6z"/></svg>';
const TEL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.4 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c1 .3 1.9.6 2.9.7A2 2 0 0122 16.9z"/></svg>';
const PIN_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>';

// Sık aranan lastik ebatları — tüm marka sayfalarında ortak gösterilir (gerçek
// stok/fiyat verisi olmadığı için marka bazında değil, mağazanın genel olarak
// çalıştığı ebat aralığı olarak sunulur; müşteri aramadan tam ebat/stok teyidi
// yapılır — bkz. not-box).
const TIRE_SIZES = [
  "175/65 R14", "185/65 R15", "195/65 R15", "205/55 R16",
  "205/60 R16", "215/60 R16", "215/55 R17", "225/45 R17",
  "225/50 R17", "235/55 R18", "245/45 R18", "255/35 R19",
];
function sizeGridHtml() {
  return TIRE_SIZES.map((s) => `<span class="size-chip">${s}</span>`).join("\n          ");
}

function joinTr(list) {
  const low = list.map((t) => t.toLocaleLowerCase("tr"));
  if (low.length <= 1) return low.join("");
  return low.slice(0, -1).join(", ") + " ve " + low[low.length - 1];
}

// Yerel SEO makalesi (300+ kelime hedefi): "aydın {marka} bayii",
// "efeler {marka} bayii", "{marka} lastik fiyatları" gibi aramalarda
// çıkabilmesi için doğal, okunabilir uzun metin — fiyat rakamı YAZILMAZ,
// yerine "hemen fiyat alın" gibi genel çağrı cümleleri kullanılır (kullanıcı
// talebi). Her markada name/origin/tag/types farklı olduğu için sayfalar
// birbirinin birebir kopyası olmuyor (duplicate content riski azaltılır).
function seoArticleHtml(b) {
  const typesJoined = joinTr(b.types);
  const tagLower = b.tag.charAt(0).toLocaleLowerCase("tr") + b.tag.slice(1);
  return `
        <h2>Aydın'da ${b.name} Bayii Arıyorsanız</h2>
        <p>Aydın'da ${b.name} lastik arayan sürücüler için Efeler merkezli mağazamız güvenilir bir ${b.name} bayii noktasıdır. ${b.origin} kökenli ${b.name}, ${tagLower}. Mağazamızda ${b.name} markasının ${typesJoined} seçeneklerini bulabilir, aracınızın modeline ve kullanım alışkanlığınıza en uygun ebadı birlikte belirleyebiliriz. Aydın ve Efeler'de ${b.name} bayii arayışınızda hem doğru ürün seçimi hem de doğru montaj için tek adrestesiniz — lastik değişiminin ardından balans ve rot ayarını da aynı ziyarette, ek bir randevuya gerek kalmadan tamamlıyoruz.</p>
        <h3>${b.name} Lastik Fiyatları İçin Hemen Arayın</h3>
        <p>${b.name} lastik fiyatları; model, ebat ve sezona göre değişiklik gösterdiği için güncel tutarı sitede paylaşmak yerine telefonla anında bilgi veriyoruz. Aracınızın plaka veya ebat bilgisini ilettiğinizde, size özel ${b.name} fiyat teklifini birkaç dakika içinde alabilirsiniz. Efeler ve Aydın genelinden gelen müşterilerimiz, ${b.name} bayii ağında ürünün orijinalliğinden ve garanti kapsamından emin olarak alışveriş yapıyor. Fiyatı öğrenmek için beklemenize gerek yok — şimdi arayın, ${b.name} modelleriniz için hızlıca fiyat alın ve randevunuzu bugün planlayın.</p>`;
}

function brandMediaHtml(slug, name) {
  const a = BRAND_ASSETS[slug];
  if (!a) return "";
  const logoImg = a.logo
    ? `<img src="img/logos/${slug}.avif" alt="${name} logo" class="logo-photo" width="${a.logo[0]}" height="${a.logo[1]}" loading="lazy">`
    : "";
  return `<div class="brand-media${a.logo ? "" : " no-logo"}">
          <img src="img/tires/${slug}.avif" alt="${name} lastik modeli" class="tire-photo" width="${a.tire[0]}" height="${a.tire[1]}" loading="lazy">
          ${logoImg}
        </div>`;
}

function page(b) {
  const typesList = b.types
    .map(
      (t) =>
        `        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span>${t}</span></li>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${b.name} Lastik Fiyatları ve Modelleri | ${BRAND_NAME} - Aydın</title>
<meta name="description" content="Aydın'da ${b.name} lastik satışı. ${b.tag}. ${BRAND_NAME}'te ${b.name} yaz, kış ve 4 mevsim lastik modelleri için bilgi alın.">
<meta name="keywords" content="aydın ${b.name.toLowerCase()} bayii, efeler ${b.name.toLowerCase()} bayii, ${b.name.toLowerCase()} lastik fiyatları, aydın ${b.name.toLowerCase()} lastik, ${b.name.toLowerCase()} lastik bayi aydın, kumral oto lastik market">
<meta name="author" content="${BRAND_NAME}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#1c1c1e">
<link rel="canonical" href="${DOMAIN}/${b.slug}.html">
<meta property="og:type" content="website">
<meta property="og:title" content="${b.name} Lastik | ${BRAND_NAME}">
<meta property="og:description" content="Aydın'da ${b.name} lastik modelleri için ${BRAND_NAME}'i arayın.">
<meta property="og:url" content="${DOMAIN}/${b.slug}.html">
<meta property="og:locale" content="tr_TR">
<meta property="og:site_name" content="${BRAND_NAME}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="${FAVICON}">
<link rel="manifest" href="site.webmanifest">
<link rel="preload" href="fonts/poppins-latin-ext-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/poppins-latin-ext-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="css/style.css">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"AutoPartsStore","name":"${BRAND_NAME}","telephone":"${PHONE_TEL}","url":"${DOMAIN}/${b.slug}.html","address":{"@type":"PostalAddress","addressLocality":"Efeler","addressRegion":"Aydın","addressCountry":"TR"}}</script>
</head>
<body>
<header class="header">
  <div class="container nav">
    <a href="index.html" class="logo" aria-label="${BRAND_NAME} ana sayfa">
      <img src="img/logo.avif" alt="${BRAND_NAME}" width="480" height="140">
    </a>
    <ul class="menu">
      <li><a href="index.html">Anasayfa</a></li>
      <li><a href="hakkimizda.html">Kurumsal</a></li>
      <li class="has-sub">
        <a href="markalar.html">Markalar</a>
        <div class="dropdown">
          ${dropdownHtml(b.slug)}
        </div>
      </li>
      <li><a href="hizmetlerimiz.html">Hizmetlerimiz</a></li>
      <li><a href="lastik-tamiri.html">Lastik Tamiri</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="sss.html">S.S.S.</a></li>
      <li><a href="iletisim.html">İletişim</a></li>
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
  <div class="crumb"><a href="index.html">Anasayfa</a> <span>›</span> <a href="markalar.html">Markalar</a> <span>›</span> ${b.name}</div>
  <h1>${b.name} Lastik | Aydın</h1><p>${b.tag}. ${BRAND_NAME}'te ${b.name} marka lastik seçenekleri için bize ulaşın.</p>
</div></section>
<section class="content"><div class="container content-grid">
      <div class="prose reveal">
        <p class="lead">${b.lead}</p>
        ${brandMediaHtml(b.slug, b.name)}
        <h2>${b.name} Lastik Seçeneklerimiz</h2>
        <ul class="ticks">
${typesList}
        </ul>
        <h2>${b.name} Lastik Ebatları</h2>
        <p>Mağazamızda ${b.name} markasında en çok tercih edilen ebatlar stoklu bulunur; listede görmediğiniz bir ebat için de arayarak temin durumunu öğrenebilirsiniz.</p>
        <div class="size-grid">
          ${sizeGridHtml()}
        </div>
        <p class="muted" style="font-size:.85rem;margin-top:10px">Ebat listesi genel stok aralığımızı gösterir, ${b.name} için güncel model/stok bilgisini lütfen arayarak öğrenin.</p>
        <h2>Neden ${b.name}?</h2>
        <p>${b.why}</p>
        <h3>Menşei</h3>
        <p>${b.name}, ${b.origin} kökenli bir markadır.</p>
        <h3>Montaj ve Ek Hizmetler</h3>
        <p>${b.name} lastik alımınızla birlikte balans ayarı, rot ayarı ve eski lastik teslim/depolama hizmetlerimizden de faydalanabilirsiniz.</p>
        ${seoArticleHtml(b)}
        <div class="note-box"><b>Güncel Stok ve Fiyat İçin Arayın:</b> Ebat ve araç bilginizi iletin, size uygun ${b.name} modelini ve güncel fiyatı hemen bildirelim. <a href="tel:${PHONE_TEL}" style="color:var(--orange-dark);font-weight:700">${PHONE_DISPLAY}</a></div>
      </div>
      <aside class="sidebar">
        <div class="side-card"><h4>Tüm Markalar</h4><ul class="side-links">${navHtml(b.slug)}</ul></div>
        <div class="side-card side-cta">
          <h4>Ücretsiz Bilgi Alın</h4>
          <p>Aracınızın ebadını söyleyin, uygun ${b.name} modelini önerelim.</p>
          <span class="ph">${PHONE_DISPLAY}</span>
          <a href="tel:${PHONE_TEL}" class="btn btn-primary btn-block">Hemen Ara</a>
          <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="btn btn-wa btn-block" style="margin-top:10px">${WA_ICON} WhatsApp</a>
        </div>
        <div class="side-card">
          <h4>Adres</h4>
          <p class="muted" style="font-size:.92rem;margin:0">Efeler / Aydın merkezli mağazamızdan hizmet veriyoruz.</p>
        </div>
      </aside>
    </div></section>
<div class="container" style="padding-bottom:80px"><div class="cta-band reveal">
  <div><h2>${b.name} Lastik İçin Bize Ulaşın</h2><p>Güncel stok durumu ve fiyat bilgisi için hemen arayın.</p></div>
  <div class="acts">
    <a href="tel:${PHONE_TEL}" class="btn btn-primary btn-lg">${PHONE_DISPLAY}</a>
    <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg">WhatsApp'tan Yaz</a>
  </div>
</div></div>
<footer class="footer">
  <div class="container">
    <div class="f-grid">
      <div>
        <span style="display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.1rem;color:#fff">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#d61f26" stroke-width="2">${TIRE_ICON}</svg>
          Kumral <span style="color:#d61f26">Oto Lastik</span>
        </span>
        <p>Aydın'da tüm dünya markalarında lastik satış, balans ve rot ayarı hizmeti.</p>
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
          <li>${PIN_ICON}<span>Efeler / Aydın (açık adres eklenecek)</span></li>
          <li>${TEL_ICON}<a href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a></li>
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
  <a class="f-wa" href="https://wa.me/${WA}?text=Merhaba,%20${encodeURIComponent(b.name)}%20lastik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener" aria-label="WhatsApp">${WA_ICON}</a>
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

for (const b of BRANDS) {
  writeFileSync(`${b.slug}.html`, page(b), "utf8");
  console.log(`yazıldı: ${b.slug}.html`);
}

export { BRANDS, BRAND_ASSETS, navHtml, footerBrandLinks, dropdownHtml, WA_ICON, TEL_ICON, PIN_ICON, TIRE_ICON, PHONE_DISPLAY, PHONE_TEL, WA, DOMAIN, BRAND_NAME, FAVICON };
