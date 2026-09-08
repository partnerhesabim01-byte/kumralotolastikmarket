// Blog: listeleme sayfası (blog.html) + 6 makale. shell()'i generate-pages.mjs'ten
// alır (aynı header/footer/menu tüm sitede tutarlı kalsın diye).
// Çalıştırma: node generate-blog.mjs
import { writeFileSync } from "node:fs";
import { PHONE_DISPLAY, PHONE_TEL, WA, DOMAIN, BRAND_NAME, TEL_ICON, WA_ICON } from "./generate-brands.mjs";
import { shell } from "./generate-pages.mjs";

const ARTICLES = [
  {
    slug: "aydinda-lastik-tamircisi-nasil-secilir",
    title: "Aydın'da Lastik Tamircisi Nasıl Seçilir?",
    date: "2026-03-04",
    excerpt: "Aydın'da güvenilir bir lastik tamircisi seçerken nelere dikkat etmeniz gerektiğini, doğru servisi nasıl ayırt edeceğinizi anlatıyoruz.",
    keywords: "aydın lastik tamircisi, efeler lastik tamircisi, güvenilir lastikçi aydın",
    body: `
        <p class="lead">Aracınızın lastiğinde ani bir sorun yaşadığınızda ya da periyodik bakım zamanı geldiğinde, Aydın'da doğru lastik tamircisini bulmak hem cebinizi hem de yol güvenliğinizi doğrudan etkiler. Bu yazıda, bir lastikçiyi seçerken gerçekten önemli olan kriterleri sıralıyoruz.</p>
        <h2>Ekipman ve Teknik Altyapı</h2>
        <p>İyi bir lastik tamircisi, sadece lastik değiştirmekle kalmaz; dijital balans cihazı, rot ayarı ekipmanı ve azot dolum imkanı gibi teknik altyapıya da sahip olmalıdır. Aydın'da lastik tamircisi ararken, servisin bu ekipmanlara sahip olup olmadığını sormaktan çekinmeyin — özellikle balans ve rot ayarı, lastik ömrünü doğrudan etkileyen işlemlerdir ve doğru cihazlarla yapılmadığında kısa sürede tekrar sorun yaşanır.</p>
        <h2>Şeffaf ve Hızlı Hizmet</h2>
        <p>Güvenilir bir lastikçi, aracınızdaki sorunu size açıkça anlatır; lastiğin gerçekten değişmesi mi gerektiğini yoksa basit bir tamirle mi devam edilebileceğini dürüstçe söyler. Efeler ve çevresinde hizmet veren işletmelerin çoğu benzer hizmetleri sunsa da, işlemin ne kadar sürdüğü ve randevu almanın ne kadar kolay olduğu da önemli bir fark yaratır. Ani bir patlak veya çivi batması gibi acil durumlarda aynı gün içinde işleminizi tamamlayabilen bir servis tercih etmeniz, zaman kaybını en aza indirir.</p>
        <h2>Marka Çeşitliliği Önemli</h2>
        <p>Aracınızın markasına ve kullanım şeklinize uygun lastik önerebilen, geniş bir marka yelpazesiyle çalışan bir tamirci; sizi tek bir markaya mahkum etmez. Petlas, Lassa, Bridgestone, Goodyear, Continental, Hankook, Kumho, Falken, Dunlop, Milestone ve Laufen gibi farklı bütçe ve performans segmentlerinden markalarla çalışan bir işletme, ihtiyacınıza en uygun seçeneği sunma şansına sahiptir.</p>
        <h2>Montaj Sonrası Hizmetler</h2>
        <p>Lastik değişiminin ardından balans ve rot ayarının aynı ziyarette yapılabilmesi, hem zamandan tasarruf sağlar hem de yeni lastiklerinizin düzgün oturmasını garanti altına alır. Ayrıca eski lastiklerinizin teslim alınması veya depolanması gibi ek hizmetler sunan bir işletme tercih etmek, işinizi daha da kolaylaştırır.</p>
        <h2>Sonuç</h2>
        <p>Aydın'da lastik tamircisi seçerken teknik donanımı, hizmet hızını, marka çeşitliliğini ve montaj sonrası sunulan ek hizmetleri birlikte değerlendirmeniz, uzun vadede hem bütçenizi hem de sürüş güvenliğinizi korur. Kumral Oto Lastik Market olarak Efeler merkezli mağazamızda bu kriterlerin tamamını karşılamaya çalışıyoruz — aracınız için en uygun çözümü bulmak üzere hemen arayabilirsiniz.</p>`,
  },
  {
    slug: "lastik-degisim-zamani-nasil-anlasilir",
    title: "Lastik Değişim Zamanı Nasıl Anlaşılır?",
    date: "2026-03-11",
    excerpt: "Diş derinliğinden yaşına kadar, lastiğinizin değişim zamanının geldiğini gösteren belirtileri anlatıyoruz.",
    keywords: "lastik değişim zamanı, lastik ne zaman değişir, aşınmış lastik belirtileri",
    body: `
        <p class="lead">Lastikler, aracınızın yolla temas eden tek parçası olduğu için durumları doğrudan sürüş güvenliğinizi etkiler. Peki lastiğinizin değişim zamanının geldiğini nasıl anlarsınız? İşte dikkat etmeniz gereken belirtiler.</p>
        <h2>Diş Derinliği Kontrolü</h2>
        <p>Türkiye'de yasal minimum diş derinliği 1,6 mm olsa da, güvenli sürüş için bu değerin 3 mm'nin altına düşmeden lastiğinizi değiştirmeniz önerilir. Özellikle yağmurlu havalarda düşük diş derinliği, frenleme mesafesini ciddi ölçüde uzatır ve savrulma riskini artırır. Bir madeni parayı diş oyuklarına dikey olarak yerleştirerek basit bir kontrol yapabilir, emin olamadığınız durumlarda mağazamıza uğrayarak ücretsiz kontrol ettirebilirsiniz.</p>
        <h2>Lastik Yaşı</h2>
        <p>Az kullanılsa bile lastik kauçuğu zamanla sertleşir ve esnekliğini kaybeder. Genel kural olarak 5-6 yaşını geçen lastiklerin, görünüşte sorunsuz olsalar bile performans kaybı yaşadığı kabul edilir. Lastiğin yan yüzeyindeki DOT kodu, üretim tarihini gösterir ve yaşını kolayca öğrenmenizi sağlar.</p>
        <h2>Yüzeyde Çatlak ve Şişlik</h2>
        <p>Lastik yüzeyinde veya yan duvarında oluşan çatlaklar, kabarcıklar ya da şişlikler; iç yapının zarar gördüğünün açık göstergesidir. Bu tür hasarlar aniden patlamaya yol açabileceğinden, fark ettiğiniz anda aracınızı bir uzmana göstermeniz gerekir.</p>
        <h2>Titreşim ve Düzensiz Aşınma</h2>
        <p>Direksiyonda hissettiğiniz titreşim veya lastiğin belirli bölgelerinde düzensiz aşınma, hem lastik değişim zamanının geldiğine hem de balans/rot ayarınızın bozulmuş olabileceğine işaret eder. Bu durumda yalnızca lastik değiştirmek yeterli olmayabilir; aracınızın rot ve balans ayarının da kontrol edilmesi gerekir.</p>
        <h2>Mevsimsel Geçiş Zamanlaması</h2>
        <p>Yaz ve kış lastikleri arasındaki geçiş de bir tür "değişim zamanı" gerektirir. Hava sıcaklığı 7°C'nin altına düştüğünde kış lastiğine, tekrar ısındığında yaz lastiğine geçmek, hem performans hem de lastik ömrü açısından önemlidir.</p>
        <h2>Ne Yapmalısınız?</h2>
        <p>Yukarıdaki belirtilerden herhangi birini fark ettiğinizde, aracınızı bir uzmana göstermeniz en doğrusu. Kumral Oto Lastik Market'te lastiklerinizi ücretsiz kontrol ediyor, gerçekten değişim gerekip gerekmediği konusunda size dürüst bir değerlendirme sunuyoruz — gereksiz yere lastik değiştirmenize gerek kalmıyor. Aydın ve Efeler'den randevu almak için hemen arayabilirsiniz.</p>`,
  },
  {
    slug: "lastik-secerken-nelere-dikkat-etmeli",
    title: "Lastik Seçerken Nelere Dikkat Etmelisiniz?",
    date: "2026-03-18",
    excerpt: "Doğru lastik seçimi için ebat, mevsim ve kullanım alışkanlığınıza göre nelere bakmanız gerektiğini anlatıyoruz.",
    keywords: "lastik seçimi, doğru lastik nasıl seçilir, lastik seçerken dikkat edilecekler",
    body: `
        <p class="lead">Piyasada onlarca marka ve yüzlerce model arasından doğru lastiği seçmek kafa karıştırıcı olabilir. Oysa birkaç temel kritere dikkat ederek, aracınız ve kullanım alışkanlığınız için en uygun seçimi kolayca yapabilirsiniz.</p>
        <h2>Doğru Ebat</h2>
        <p>Her şeyden önce, aracınızın ruhsatında veya sürücü kapısı iç kısmındaki etikette belirtilen ebada uygun lastik seçmelisiniz. 205/55 R16 gibi bir ebat kodu; lastiğin genişliğini, yanak oranını ve jant çapını ifade eder. Yanlış ebat seçimi, aracın sürüş dinamiklerini bozabilir ve hatta güvenlik riski oluşturabilir.</p>
        <h2>Mevsime Uygun Lastik Türü</h2>
        <p>Yaz lastikleri sıcak havada iyi performans gösterirken, kış lastikleri düşük sıcaklıklarda daha iyi tutunma sağlar. Dört mevsim boyunca benzer koşullarda araç kullananlar için 4 mevsim lastikleri pratik bir orta yol sunar. Kullanım bölgenizin iklim koşullarını göz önünde bulundurarak doğru türü seçmek, hem güvenlik hem de ekonomik açıdan önemlidir.</p>
        <h2>Kullanım Alışkanlığınız</h2>
        <p>Şehir içi kısa mesafe kullanımı ile uzun yol/otoyol ağırlıklı kullanım, farklı lastik özellikleri gerektirir. Sportif sürüş tarzına sahipseniz viraj performansı öne çıkan modelleri, konforlu ve sessiz bir sürüş istiyorsanız bu yönde öne çıkan modelleri tercih edebilirsiniz. Mağazamızda bu tercihlerinize göre size en uygun markayı önerebiliyoruz.</p>
        <h2>Marka ve Bütçe Dengesi</h2>
        <p>Premium markalar (Continental, Bridgestone, Goodyear, Hankook gibi) üst düzey teknoloji ve uzun ömür sunarken, Petlas ve Lassa gibi yerli üretim markalar uygun fiyat/performans dengesi arayanlar için iyi bir seçenektir. Milestone ve Laufen gibi ekonomik segment markalar ise bütçe dostu bir alternatif sağlar. Önemli olan, bütçenizle beklentinizi dengeleyen markayı bulmaktır.</p>
        <h2>Yakıt Verimliliği ve Gürültü</h2>
        <p>Avrupa lastik etiketinde yer alan yakıt verimliliği, ıslak zemin tutuşu ve gürültü seviyesi bilgileri, satın alma kararınızda size yol gösterebilir. Düşük yuvarlanma direncine sahip lastikler, uzun vadede yakıt tasarrufu sağlar.</p>
        <h2>Uzman Görüşü Alın</h2>
        <p>Tüm bu kriterleri tek başınıza değerlendirmek yerine, aracınızın modelini ve kullanım alışkanlığınızı bir uzmana anlatarak yönlendirme almanız en pratik yoldur. Kumral Oto Lastik Market'te aracınıza özel en uygun lastik seçeneklerini birlikte belirliyor, ücretsiz bilgilendirme yapıyoruz — Aydın'dan hemen arayabilirsiniz.</p>`,
  },
  {
    slug: "aydinda-en-yakin-lastik-bayii-nasil-bulunur",
    title: "Aydın'da En Yakın Lastik Bayii Nasıl Bulunur?",
    date: "2026-03-25",
    excerpt: "Aydın'da size en yakın ve güvenilir lastik bayiini bulurken dikkat etmeniz gereken noktaları derledik.",
    keywords: "en yakın lastik bayii aydın, aydın lastik bayii, efeler lastik bayii",
    body: `
        <p class="lead">"Aydın'da en yakın lastik bayii" araması yaptığınızda karşınıza onlarca sonuç çıkabilir. Ancak sadece konum yakınlığına bakmak, doğru seçim yapmanız için yeterli değildir. İşte bir lastik bayii seçerken göz önünde bulundurmanız gereken kriterler.</p>
        <h2>Konum ve Ulaşım Kolaylığı</h2>
        <p>Efeler merkezli bir mağaza, Aydın'ın büyük bölümüne kolay ulaşım imkanı sunar. Özellikle acil bir lastik sorunu yaşadığınızda, işyerinize veya evinize yakın bir bayiye ulaşabilmek zaman kaybını azaltır. Ancak sadece mesafeye değil, bayiin sunduğu hizmet kalitesine de bakmak gerekir.</p>
        <h2>Stok Çeşitliliği</h2>
        <p>Aradığınız ebat veya markanın stokta bulunması, ikinci bir yere gitmenizi önler. Çok sayıda dünya markasıyla (Petlas, Lassa, Bridgestone, Goodyear, Milestone, Continental, Hankook, Kumho, Falken, Dunlop, Laufen) çalışan bir bayii, ihtiyacınız olan ebat ve modeli bulma şansınızı artırır.</p>
        <h2>Randevu ve Bekleme Süresi</h2>
        <p>Bazı bayiler yoğunluk nedeniyle günler sonrasına randevu verirken, bazıları aynı gün içinde işleminizi tamamlayabilir. Telefonla veya WhatsApp üzerinden hızlı iletişim kurabildiğiniz, randevu sürecinin şeffaf olduğu bir bayii tercih etmeniz, zamanınızı daha verimli kullanmanızı sağlar.</p>
        <h2>Ek Hizmetler</h2>
        <p>Sadece lastik satışı değil; balans ayarı, rot ayarı, lastik tamiri ve eski lastik depolama gibi hizmetleri de aynı çatı altında sunan bir bayii tercih etmek, farklı işler için farklı yerlere gitme zahmetinden sizi kurtarır.</p>
        <h2>Müşteri Yorumları ve Güven</h2>
        <p>Bir bayiin gerçek müşteri deneyimlerini araştırmak, karar verme sürecinizde önemli bir referans noktasıdır. Uzun süredir Aydın'da hizmet veren, düzenli müşteri kitlesine sahip işletmeler genellikle daha güvenilir bir tercih olur.</p>
        <h2>Online Arama Yaparken Dikkat Edilmesi Gerekenler</h2>
        <p>"En yakın lastik bayii" araması yaptığınızda karşınıza çıkan ilk birkaç sonuç her zaman size en uygun seçenek olmayabilir. Bayiin gerçekten Aydın'da fiziksel bir mağazası olup olmadığını, çalışma saatlerini ve hangi markalarla çalıştığını kontrol etmek, yerinde bir karar vermenizi sağlar. Google Haritalar üzerinden mağazanın konumunu ve ulaşım süresini önceden kontrol etmek de zamandan tasarruf ettirir.</p>
        <h2>Kumral Oto Lastik Market Farkı</h2>
        <p>Efeler'de konumlanan mağazamızda, yukarıda saydığımız kriterlerin tamamını bir arada sunmaya çalışıyoruz: geniş marka yelpazesi, hızlı randevu imkanı, balans/rot ayarı ve lastik tamiri gibi ek hizmetler. Aydın'da en yakın ve güvenilir lastik bayiini arıyorsanız, ihtiyacınızı öğrenmek için hemen bizi arayabilir veya WhatsApp'tan yazabilirsiniz.</p>`,
  },
  {
    slug: "kis-lastigine-ne-zaman-gecilmeli",
    title: "Kış Lastiğine Ne Zaman Geçilmeli?",
    date: "2026-04-01",
    excerpt: "Kış lastiğine geçiş zamanlaması, yasal zorunluluklar ve dikkat edilmesi gereken noktalar.",
    keywords: "kış lastiğine ne zaman geçilmeli, kış lastiği zamanı, kış lastiği aydın",
    body: `
        <p class="lead">Mevsim geçişleriyle birlikte sürücülerin en sık sorduğu sorulardan biri, kış lastiğine tam olarak ne zaman geçilmesi gerektiğidir. Doğru zamanlama, hem güvenliğiniz hem de lastik ömrünüz için kritik önem taşır.</p>
        <h2>7°C Kuralı</h2>
        <p>Genel kabul gören kurala göre, ortalama hava sıcaklığı 7°C'nin altına düştüğünde kış lastiğine geçilmesi önerilir. Bunun nedeni, yaz lastiklerinin kauçuk yapısının düşük sıcaklıklarda sertleşerek yol tutuşunu kaybetmesidir. Kış lastikleri ise özel kauçuk karışımları sayesinde düşük sıcaklıklarda dahi esnekliğini korur.</p>
        <h2>Yasal Zorunluluk</h2>
        <p>Türkiye'de kar yağışı ve don olayının görüldüğü bazı il ve ilçelerde, belirli tarihler arasında ticari araçlar için kış lastiği kullanımı yasal zorunluluktur. Aydın gibi nispeten ılıman iklime sahip bölgelerde bu zorunluluk genellikle aranmasa da, yükseklerde veya kış aylarında ani soğuk hava dalgalarının yaşandığı güzergahlarda seyahat edecekseniz kış lastiği bulundurmanız güvenliğiniz açısından faydalıdır.</p>
        <h2>Sadece Kar İçin Değil</h2>
        <p>Kış lastiklerinin faydası yalnızca karlı yollarla sınırlı değildir. Soğuk ve yağışlı havalarda, kar hiç yağmasa bile, kış lastikleri yaz lastiklerine göre daha kısa frenleme mesafesi ve daha iyi yol tutuşu sağlar. Bu nedenle sadece kar riskine göre değil, genel sıcaklık ortalamasına göre karar vermek daha doğrudur.</p>
        <h2>4 Mevsim Lastiği Bir Alternatif mi?</h2>
        <p>Yazın çok sıcak, kışın da çok soğuk olmayan bölgelerde yaşayan ve sık sık farklı iklim koşullarında seyahat etmeyen sürücüler için 4 mevsim lastikleri, yaz-kış geçişi derdi olmadan pratik bir çözüm sunabilir. Ancak yoğun kış şartlarında kış lastiği kadar performans göstermeyeceğini bilmek gerekir.</p>
        <h2>Ne Zaman Randevu Almalısınız?</h2>
        <p>Kış lastiğine geçiş dönemlerinde (genellikle kasım ayı başı) bayilerde yoğunluk yaşanabilir. Son ana bırakmadan, hava sıcaklıkları düşmeye başladığında randevunuzu planlamanız, hem bekleme süresini kısaltır hem de olası bir soğuk hava dalgasına hazırlıklı yakalanmanızı sağlar.</p>
        <h2>Sonuç</h2>
        <p>Kış lastiğine geçiş zamanlamasını doğru yapmak, hem güvenliğiniz hem de aracınızın performansı için önemlidir. Kumral Oto Lastik Market olarak mevsim geçişlerinde lastik değişimi ve doğru model seçimi konusunda Aydın'daki müşterilerimize destek oluyoruz — hemen arayarak randevunuzu oluşturabilirsiniz.</p>`,
  },
  {
    slug: "lastik-basinci-ve-bakimi-neden-onemli",
    title: "Lastik Basıncı ve Bakımı Neden Önemli?",
    date: "2026-04-08",
    excerpt: "Doğru lastik basıncının yakıt tüketiminden sürüş güvenliğine etkilerini ve düzenli bakımın önemini anlatıyoruz.",
    keywords: "lastik basıncı, lastik bakımı, lastik basıncı neden önemli",
    body: `
        <p class="lead">Lastik basıncı, çoğu sürücünün göz ardı ettiği ama aslında sürüş güvenliği, yakıt tüketimi ve lastik ömrünü doğrudan etkileyen bir faktördür. Bu yazıda, doğru lastik basıncının önemini ve düzenli bakımın nasıl yapılması gerektiğini anlatıyoruz.</p>
        <h2>Düşük Basıncın Riskleri</h2>
        <p>Gereğinden düşük basınçlı bir lastik, yol ile temas eden yüzeyi artırarak sürtünmeyi ve dolayısıyla yakıt tüketimini yükseltir. Ayrıca lastiğin kenar kısımlarının aşırı aşınmasına yol açar ve yüksek hızda ısınarak patlama riskini artırır. Özellikle uzun yol öncesi düşük basınçlı lastikle yola çıkmak ciddi bir güvenlik riski taşır.</p>
        <h2>Yüksek Basıncın Etkileri</h2>
        <p>Gereğinden fazla şişirilmiş lastikler ise yol ile temas yüzeyini azaltarak tutuşu zayıflatır ve lastiğin orta kısmının erken aşınmasına neden olur. Bu durum, özellikle yağışlı havalarda fren mesafesinin uzamasına ve savrulma riskinin artmasına yol açabilir.</p>
        <h2>Doğru Basınç Nasıl Bulunur?</h2>
        <p>Aracınız için önerilen lastik basıncı değeri, genellikle sürücü kapısının iç kısmındaki etikette veya kullanım kılavuzunda belirtilir. Bu değer, ön ve arka lastikler için farklı olabilir ve yük durumuna göre de değişiklik gösterebilir. Basıncı, lastikler soğukken (araç en az birkaç saat hareket etmemişken) kontrol etmek en doğru sonucu verir.</p>
        <h2>Ne Sıklıkla Kontrol Edilmeli?</h2>
        <p>Uzmanlar, lastik basıncının ayda en az bir kez ve uzun yol öncesi mutlaka kontrol edilmesini önerir. Mevsim geçişlerinde hava sıcaklığındaki değişim de lastik basıncını etkilediğinden, bu dönemlerde kontrol sıklığını artırmak faydalı olur.</p>
        <h2>Azot Dolumunun Avantajı</h2>
        <p>Normal havaya kıyasla azot gazı, sıcaklık değişimlerinden daha az etkilenir ve lastik basıncının daha uzun süre stabil kalmasını sağlar. Bu da hem daha az sık kontrol ihtiyacı hem de daha tutarlı bir sürüş performansı anlamına gelir.</p>
        <h2>Düzenli Bakımın Diğer Unsurları</h2>
        <p>Basınç kontrolünün yanı sıra, düzenli balans ve rot ayarı da lastik ömrünü uzatan önemli bakım adımlarıdır. Düzensiz aşınan bir lastik, doğru basınçta olsa bile beklenenden erken değişim gerektirebilir.</p>
        <h2>Sonuç</h2>
        <p>Lastik basıncı ve genel bakım, küçük ama etkisi büyük detaylardır. Kumral Oto Lastik Market'te lastik basıncı kontrolü ve azot dolumu hizmetlerimizden faydalanabilir, aracınızın düzenli bakımını ihmal etmeden güvenle yola çıkabilirsiniz — Aydın'dan hemen arayarak bilgi alabilirsiniz.</p>`,
  },
];

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

function articleCard(a) {
  return `      <a href="${a.slug}.html" class="brand-card reveal" style="text-align:left">
        <span class="muted" style="font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;font-weight:700;color:var(--orange-dark)">${formatDate(a.date)}</span>
        <h3 style="margin-top:8px">${a.title}</h3>
        <p>${a.excerpt}</p>
        <span class="serv-link">Devamını Oku <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
      </a>`;
}

function otherArticlesHtml(currentSlug) {
  return ARTICLES.filter((a) => a.slug !== currentSlug)
    .slice(0, 5)
    .map((a) => `<li><a href="${a.slug}.html">${a.title} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></a></li>`)
    .join("\n          ");
}

// ===== blog.html (listeleme) =====
writeFileSync(
  "blog.html",
  shell({
    slug: "blog",
    title: "Blog",
    desc: "Aydın'da lastik bakımı, doğru lastik seçimi, lastik değişim zamanı ve en yakın lastik bayii hakkında uzman tavsiyeleri. Kumral Oto Lastik Market blog.",
    breadcrumb: "Blog",
    heroTitle: "Blog",
    heroDesc: "Lastik bakımı, doğru seçim ve Aydın'da lastikçi bulma konularında faydalı bilgiler.",
    body: `<section class="sec"><div class="container"><div class="brand-grid">
${ARTICLES.map(articleCard).join("\n")}
    </div></div></section>
<div class="container" style="padding-bottom:80px"><div class="cta-band reveal">
  <div><h2>Aracınız İçin Doğru Lastiği Bulalım</h2><p>Sorularınız için hemen arayın, size özel öneri sunalım.</p></div>
  <div class="acts">
    <a href="tel:${PHONE_TEL}" class="btn btn-primary btn-lg">${PHONE_DISPLAY}</a>
    <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg">WhatsApp'tan Yaz</a>
  </div>
</div></div>`,
  }),
  "utf8"
);
console.log("yazıldı: blog.html");

// ===== Makale sayfaları =====
for (const a of ARTICLES) {
  const html = shell({
    slug: a.slug,
    title: a.title,
    desc: a.excerpt,
    breadcrumb: `<a href="blog.html">Blog</a> <span>›</span> ${a.title}`,
    heroTitle: a.title,
    heroDesc: formatDate(a.date),
    body: `<section class="content"><div class="container content-grid">
      <div class="prose reveal">
${a.body}
        <div class="note-box"><b>Sorularınız mı var?</b> Aracınızın modeli ve kullanım alışkanlığınıza göre en uygun lastiği birlikte belirleyelim, hemen fiyat alın. <a href="tel:${PHONE_TEL}" style="color:var(--orange-dark);font-weight:700">${PHONE_DISPLAY}</a></div>
      </div>
      <aside class="sidebar">
        <div class="side-card"><h4>Diğer Yazılar</h4><ul class="side-links">
          ${otherArticlesHtml(a.slug)}
        </ul></div>
        <div class="side-card side-cta">
          <h4>Hemen Fiyat Alın</h4>
          <p>Aracınızın ebadını söyleyin, size uygun lastiği önerelim.</p>
          <span class="ph">${PHONE_DISPLAY}</span>
          <a href="tel:${PHONE_TEL}" class="btn btn-primary btn-block">Hemen Ara</a>
          <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="btn btn-wa btn-block" style="margin-top:10px">${WA_ICON} WhatsApp</a>
        </div>
      </aside>
    </div></section>`,
  });
  writeFileSync(`${a.slug}.html`, html, "utf8");
  console.log("yazıldı:", `${a.slug}.html`);
}
