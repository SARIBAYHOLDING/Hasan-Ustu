/* ==========================================================================
   Dr. Hasan Ustu Blog - Custom JavaScript
   Features: Typing effect, theme toggle, mobile menu, active scrollspy,
             dynamic charts dashboard, filters, modals, contact form simulation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Data Store (Academic & Blog Details)
    // ==========================================
    const dataStore = {
        publications: {
            'pub-1': {
                tag: 'Makale (Uluslararası)',
                title: 'Integration of art into STEM education at primary schools: An action research study with primary school teachers',
                meta: 'Yayın Tarihi: 2022 | Hakemli Dergi: Systemic Practice and Action Research',
                content: `
                    <p><strong>Özet:</strong> Bu çalışma, sınıf öğretmenlerinin fen, teknoloji, mühendislik ve matematik (STEM) disiplinlerine sanatsal (Art) süreçleri entegre ederek "STEAM" uygulamalarını sınıf ortamında nasıl yürüttüklerini incelemektedir.</p>
                    <p><strong>Metodoloji:</strong> Araştırmada nitel araştırma modellerinden <strong>Katılımcı Eylem Araştırması (Action Research)</strong> deseni kullanılmıştır. Sınıf öğretmenleriyle birlikte disiplinlerarası etkinlik taslakları hazırlanmış ve ders süreçleri gözlemlenmiştir.</p>
                    <p><strong>Anahtar Bulgular:</strong></p>
                    <ul>
                        <li>Sanat entegrasyonu, ilkokul öğrencilerinin mühendislik tasarım süreçlerindeki yaratıcılık ve empati düzeylerini artırmıştır.</li>
                        <li>Öğretmenlerin STEM pedagojik alan bilgisi düzeylerinde anlamlı artışlar kaydedilmiştir.</li>
                        <li>Müfredat yoğunluğu ve malzeme tedariki, uygulamanın önündeki temel sınırlılıklar olarak belirlenmiştir.</li>
                    </ul>
                    <a href="https://link.springer.com/article/10.1007/s11213-021-09586-y" target="_blank" class="btn btn-primary" style="margin-top: 15px;">Springer Yayın Sayfasına Git</a>
                `
            },
            'pub-2': {
                tag: 'Doktora Tezi',
                title: 'İlkokul düzeyinde bütünleşik STEM/STEAM etkinliklerinin uygulanması: Sınıf öğretmenleriyle bir eylem araştırması',
                meta: 'Mezuniyet: 2019 | Kurum: Necmettin Erbakan Üniversitesi',
                content: `
                    <p><strong>Tez Danışmanı:</strong> Prof. Dr. Ahmet Saban</p>
                    <p><strong>Çalışmanın Önemi:</strong> Bu doktora tezi, Türkiye'deki ilkokul düzeyinde bütünleşik STEM/STEAM uygulamalarının yaygınlaştırılması ve sınıf öğretmenlerinin bu süreçte nasıl profesyonel destek alması gerektiği üzerine tasarlanmış en kapsamlı eylem araştırmalarından biridir.</p>
                    <p><strong>Bulgular & Öneriler:</strong></p>
                    <ul>
                        <li>İlkokul 3. ve 4. sınıf düzeylerinde tasarlanan bütünleşik STEM/STEAM modüllerinin çocukların problem çözme becerilerine olumlu katkısı istatistiksel ve nitel verilerle kanıtlanmıştır.</li>
                        <li>Sınıf öğretmenlerinin disiplinlerarası ders tasarımı yaparken iş birlikli mentorluğa yüksek derecede ihtiyaç duydukları görülmüştür.</li>
                        <li>Öğretmen eğitimlerinde teorik anlatım yerine "uygulama tabanlı mentorluk" modeli önerilmiştir.</li>
                    </ul>
                    <a href="https://tez.yok.gov.tr/UlusalTezMerkezi/" target="_blank" class="btn btn-primary" style="margin-top: 15px;">YÖK Tez Merkezinde Görüntüle</a>
                `
            },
            'pub-3': {
                tag: 'Makale (Ulusal)',
                title: 'Tükenmişliğin Mesleğe Bağlılıkla İlişkisi: Sınıf Öğretmenleri Üzerine Bir Araştırma',
                meta: 'Yayın: 2016 | Dergi: Mersin Üniversitesi Eğitim Fakültesi Dergisi',
                content: `
                    <p><strong>Özet:</strong> Sınıf öğretmenlerinin yaşadıkları mesleki tükenmişlik düzeyleri ile mesleklerine olan bağlılıkları arasındaki ilişki nicel veri analizi yöntemleriyle incelenmiştir.</p>
                    <p><strong>Metodoloji:</strong> Maslach Tükenmişlik Envanteri ve Öğretmenlerin Mesleğe Bağlılık Ölçeği kullanılarak Mersin ve çevre illerde görev yapan sınıf öğretmenlerinden anket verileri toplanmıştır.</p>
                    <p><strong>Analiz ve Sonuçlar:</strong></p>
                    <ul>
                        <li>Öğretmenlerin duygusal tükenme düzeyleri arttıkça mesleki bağlılıklarının doğrusal olarak azaldığı tespit edilmiştir.</li>
                        <li>Mesleki kıdem ve okul yönetiminin destekleyici tutumunun, tükenmişlik hissini azaltan en önemli tampon değişkenler olduğu ortaya konmuştur.</li>
                    </ul>
                    <a href="https://dergipark.org.tr/tr/pub/mersinefd/issue/24430/259160" target="_blank" class="btn btn-primary" style="margin-top: 15px;">DergiPark Sayfasına Git</a>
                `
            },
            'pub-4': {
                tag: 'Makale (Uluslararası)',
                title: 'Sınıf Öğretmenlerinin Mesleki Bağlılık, İşten Ayrılma Niyeti ve Örgütsel Bağlılık İlişkisi',
                meta: 'Yayın: 2017 | Dergi: İlköğretim Online',
                content: `
                    <p><strong>Özet:</strong> Sınıf öğretmenlerinin mesleki bağlılıklarının ve sosyo-demografik özelliklerinin, onların çalıştıkları okuldaki örgütsel bağlılıklarını ve işten ayrılma niyetlerini ne düzeyde yordadığının belirlenmesi hedeflenmiştir.</p>
                    <p><strong>Bulgular:</strong> Yapılan regresyon ve yol analizleri sonucunda, mesleki bağlılığın örgütsel bağlılığı pozitif yönde, işten ayrılma niyetini ise negatif yönde güçlü bir şekilde yordadığı saptanmıştır.</p>
                    <a href="https://dergipark.org.tr/tr/pub/ilkonline/issue/28399/302830" target="_blank" class="btn btn-primary" style="margin-top: 15px;">DergiPark Sayfasına Git</a>
                `
            },
            'proj-1': {
                tag: 'Erasmus+ Projesi',
                title: 'Erasmus+ "STEM in Action" (Uzman & Araştırmacı)',
                meta: 'Proje Süresi: 2022 - 2024 | Koordinatör: MEB AB Dış İlişkiler Projesi',
                content: `
                    <p><strong>Proje Amacı:</strong> Avrupa çapında yenilikçi STEM pedagojilerinin ilkokul düzeyinde sınıf içi eylemlere dönüştürülmesi ve bu süreçte öğretmen yetkinliklerinin artırılması.</p>
                    <p><strong>Gerçekleştirilen Faaliyetler:</strong></p>
                    <ul>
                        <li>Uluslararası ortaklarla ortak STEM ders planı kitapçıklarının hazırlanması.</li>
                        <li>Mersin İl MEB bünyesinde yerel yaygınlaştırma çalıştayları düzenleyerek 200'den fazla öğretmene saha eğitimi verilmesi.</li>
                    </ul>
                `
            },
            'proj-2': {
                tag: 'Eğitim Organizasyonu',
                title: 'Mersin STEM Çalıştayları ve Eğitimleri (Çalıştay Koordinatörü & Mentor)',
                meta: 'Dönem: 2024 - Halen | Düzenleyen: Mersin İl Milli Eğitim Müdürlüğü',
                content: `
                    <p><strong>Faaliyet Tanımı:</strong> Mersin'deki resmi ve özel okullarda görev yapan sınıf öğretmenlerine yönelik bütünleşik STEM müfredat tasarımları yapma becerisi kazandırma.</p>
                    <p><strong>Kapsam:</strong></p>
                    <ul>
                        <li>Her yıl düzenlenen 30 saatlik uygulamalı STEM çalıştaylarında mentorluk.</li>
                        <li>Okulların Avrupa Okul Ağı üzerinden "STEM Okul Etiketi" (STEM School Label) almaları için rehberlik süreçleri.</li>
                    </ul>
                `
            }
        },
        blog: {
            'blog-1': {
                tag: 'STEM Eğitimi',
                title: "Eğitimde Otantik Öğrenme ve STEM Pedagojisi",
                meta: 'Kaynak Makale: İnformal Ortamlarda Araştırmalar Dergisi, 2024 | Yazar: Dr. Hasan Uştu',
                content: `
                    <p>Öğrencilerin okulda öğrendikleri bilgileri günlük hayat durumlarıyla ilişkilendirebilmesi, modern eğitimin en büyük hedeflerinden biridir. Bu makalede, fen eğitimi süreçlerinde otantik (gerçek yaşam durumlarına uygun) öğrenme ortamlarının nasıl tasarlanması gerektiği ele alınmaktadır.</p>
                    <p>STEM pedagojisi, otantik öğrenmenin gerçekleştirilebilmesi için mükemmel bir yapı sunar. Öğrenciler, sadece formülleri ezberlemek yerine çevrelerindeki gerçek bir problemi (örneğin su kirliliği veya enerji verimliliği) çözmek için mühendislik tasarım süreçlerini kullanırlar.</p>
                    <blockquote>"Otantik öğrenme, teorik bilgiyi işlevsel kılarak okul sınırlarının ötesine taşır."</blockquote>
                    <p>Araştırmalarımız göstermektedir ki, gerçek yaşamla ilişkilendirilen ders tasarımlarında öğrencilerin derse olan bilişsel ve duyuşsal katılımları çok daha yüksek olmaktadır.</p>
                    <hr style="margin: 20px 0; border: 0; border-top: 1px solid var(--border-color);">
                    <p><strong>Kanıt & Orijinal Yayın Kaynağı:</strong></p>
                    <a href="https://dergipark.org.tr/tr/pub/jrinen/issue/89531/1301419" target="_blank" class="btn btn-primary">DergiPark Makale Bağlantısı</a>
                `
            },
            'blog-2': {
                tag: 'Veri Analitiği',
                title: 'Veriyle Eğitim Planlama: Mesleki Bağlılık Analizleri',
                meta: 'Kaynak Makale: İlköğretim Online, 2017 | Yazar: Dr. Hasan Uştu',
                content: `
                    <p>Bu makalemizde, sınıf öğretmenlerinin mesleki bağlılıkları, işten ayrılma niyetleri ve demografik özelliklerinin örgütsel bağlılık üzerindeki etkisini istatistiksel yordama modelleriyle analiz ettik.</p>
                    <p>Elde ettiğimiz nicel veriler göstermektedir ki, öğretmenlerin mesleğe karşı duydukları bağlılık, çalıştıkları okula karşı gösterdikleri örgütsel bağlılığın en güçlü yordayıcısıdır. Genç öğretmenlerde ise işten ayrılma eğilimleri kıdemli öğretmenlere oranla anlamlı ölçüde yüksek çıkmıştır.</p>
                    <p>Veri odaklı bu analizler, MEB ve okul yöneticilerinin öğretmen tutma politikaları geliştirirken hangi odak gruplarına yönelmesi gerektiğine dair sayısal kanıtlar sunmaktadır.</p>
                    <hr style="margin: 20px 0; border: 0; border-top: 1px solid var(--border-color);">
                    <p><strong>Kanıt & Orijinal Yayın Kaynağı:</strong></p>
                    <a href="https://dergipark.org.tr/tr/pub/ilkonline/issue/28399/302830" target="_blank" class="btn btn-primary">DergiPark Makale Bağlantısı</a>
                `
            },
            'blog-3': {
                tag: 'Eğitim Kuramı',
                title: 'Öğretmenlikte Tükenmişlik ve Mesleki Adanmışlık Dengesi',
                meta: 'Kaynak Makale: Mersin Üniversitesi Eğitim Fakültesi Dergisi, 2016 | Yazar: Dr. Hasan Uştu',
                content: `
                    <p>Sınıf öğretmenlerinin mesleki tükenmişlik (burnout) düzeyleri ile mesleklerine olan bağlılıkları arasındaki korelasyonel ilişkileri incelediğimiz bu araştırmamız, eğitimcilerin ruh sağlığı ve motivasyonunun okul başarısına doğrudan etkisini ortaya koymaktadır.</p>
                    <p>Nicel analizler neticesinde:</p>
                    <ul>
                        <li>Duygusal tükenmişlik ile mesleki bağlılık arasında negatif yönde yüksek düzeyde anlamlı bir ilişki saptanmıştır.</li>
                        <li>Mesleki kıdem arttıkça öğretmenlerin tükenmişlik hissini yönetme becerilerinin geliştiği görülmüştür.</li>
                        <li>Okul yöneticilerinin sergilediği destekleyici liderlik, öğretmenlerin motivasyon kaybını azaltan en temel faktördür.</li>
                    </ul>
                    <hr style="margin: 20px 0; border: 0; border-top: 1px solid var(--border-color);">
                    <p><strong>Kanıt & Orijinal Yayın Kaynağı:</strong></p>
                    <a href="https://dergipark.org.tr/tr/pub/mersinefd/issue/24430/259160" target="_blank" class="btn btn-primary">DergiPark Makale Bağlantısı</a>
                `
            },
            'blog-4': {
                tag: 'Uzaktan Eğitim',
                title: 'Pandemi Dönemi Uzaktan Eğitim Süreci ve Sahadan Yansımalar',
                meta: 'Kaynak Makale: İnformal Ortamlarda Araştırmalar Dergisi, 2021 | Yazar: Dr. Hasan Uştu',
                content: `
                    <p>Pandemi dönemiyle birlikte eğitim dünyası eşi benzeri görülmemiş bir hızla dijitalleşti. Bu çalışmamızda, sınıf öğretmenlerinin acil uzaktan eğitim süreçlerindeki deneyimlerini, yaşadıkları teknik ve pedagojik zorlukları nitel araştırma desenleri yardımıyla inceledik.</p>
                    <p>Sahadan aldığımız görüşler doğrultusunda öğretmenlerimizin en çok şu alanlarda zorluk çektiği belirlenmiştir:</p>
                    <ul>
                        <li>Öğrencilerde ekran karşısında odaklanma ve motivasyon kaybı.</li>
                        <li>Ölçme ve değerlendirme süreçlerinin dijital ortamdaki sınırlılıkları.</li>
                        <li>Sınıf ortamındaki sosyal etkileşimin ve akran öğreniminin dijital platformlara tam olarak aktarılamaması.</li>
                    </ul>
                    <p>Bu araştırma, geleceğin harmanlanmış (hibrit) eğitim modelleri için önemli bir yol haritası sunmaktadır.</p>
                    <hr style="margin: 20px 0; border: 0; border-top: 1px solid var(--border-color);">
                    <p><strong>Kanıt & Orijinal Yayın Kaynağı:</strong></p>
                    <a href="https://dergipark.org.tr/tr/pub/jrinen/issue/67554/983734" target="_blank" class="btn btn-primary">DergiPark Makale Bağlantısı</a>
                `
            }
        }
    };

    // ==========================================
    // 2. Typing Effect (Hero Section)
    // ==========================================
    const roles = [
        "STEM Eğitimi Uzmanı",
        "MEB Veri Analisti",
        "Doktora Dereceli Eğitimci",
        "Eylem Araştırmacısı & Koordinatör"
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newWordDelay = 2000;
    const roleEl = document.getElementById('dynamic-role');

    function type() {
        if (!roleEl) return;
        const currentWord = roles[roleIdx];
        if (isDeleting) {
            roleEl.textContent = currentWord.substring(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                isDeleting = false;
                roleIdx = (roleIdx + 1) % roles.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, erasingDelay);
            }
        } else {
            roleEl.textContent = currentWord.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx === currentWord.length) {
                isDeleting = true;
                setTimeout(type, newWordDelay);
            } else {
                setTimeout(type, typingDelay);
            }
        }
    }
    setTimeout(type, 1000);

    // ==========================================
    // 3. Dark/Light Theme Handler
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.body.className = `${currentTheme}-theme`;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('light-theme')) {
                document.body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark');
                showToast('Karanlık tema aktif edildi.', 'success');
            } else {
                document.body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light');
                showToast('Aydınlık tema aktif edildi.', 'success');
            }
        });
    }

    // ==========================================
    // 4. Mobile Menu Navigation
    // ==========================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const expanded = mobileToggle.getAttribute('aria-expanded') === 'true' || false;
            mobileToggle.setAttribute('aria-expanded', !expanded);
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Header Shadow on Scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('navbar');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // ==========================================
    // 5. ScrollSpy (Active Navigation Link)
    // ==========================================
    const sections = document.querySelectorAll('section');
    const scrollspyOptions = {
        threshold: 0.25,
        rootMargin: '0px 0px -25% 0px'
    };

    const scrollspyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, scrollspyOptions);

    sections.forEach(section => scrollspyObserver.observe(section));

    // ==========================================
    // 6. Portfolio & Blog Filtering
    // ==========================================
    // Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-item-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            portfolioCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    card.style.display = 'none';
                }
            });
        });
    });

    // Blog Filter
    const blogFilterBtns = document.querySelectorAll('.blog-filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    blogFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            blogFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.blogFilter;
            
            blogCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    card.style.display = 'none';
                }
            });
        });
    });

    // ==========================================
    // 7. Interactive Dashboard Logic
    // ==========================================
    const dashboardData = {
        teachers: {
            title: "Yıllara Göre Eğitilen Öğretmen Sayısı (Kümülatif)",
            badge: "Eğitim Katılım Verisi",
            insight: "Eğitim çalışmalarımız 2024 yılından itibaren Mersin genelinde ivme kazanarak kümülatif olarak 1,450 öğretmene ulaşmıştır. STEM odaklı eylem araştırmaları sınıflarda yaygınlaşmaktadır.",
            all: [
                { label: "2024", val: 480 },
                { label: "2025", val: 980 },
                { label: "2026 (Temmuz)", val: 1450 }
            ],
            2024: [
                { label: "Q1", val: 80 },
                { label: "Q2", val: 150 },
                { label: "Q3", val: 120 },
                { label: "Q4", val: 130 }
            ],
            2025: [
                { label: "Q1", val: 110 },
                { label: "Q2", val: 180 },
                { label: "Q3", val: 90 },
                { label: "Q4", val: 120 }
            ],
            2026: [
                { label: "Q1", val: 190 },
                { label: "Q2", val: 280 }
            ]
        },
        'stem-schools': {
            title: "Aktif STEM Okul Etiketi (STEM School Label) Alan Okullar",
            badge: "Okul Akreditasyon Verisi",
            insight: "Avrupa Okul Ağı üzerinden yürüttüğümüz mentorluk çalışmaları sonucunda Mersin genelinde STEM Etiketi kazanan okul sayısı her geçen dönem katlanarak artmaktadır.",
            all: [
                { label: "2024", val: 12 },
                { label: "2025", val: 29 },
                { label: "2026", val: 48 }
            ],
            2024: [
                { label: "Yenişehir", val: 4 },
                { label: "Mezitli", val: 3 },
                { label: "Toroslar", val: 3 },
                { label: "Akdeniz", val: 2 }
            ],
            2025: [
                { label: "Yenişehir", val: 9 },
                { label: "Mezitli", val: 8 },
                { label: "Toroslar", val: 6 },
                { label: "Akdeniz", val: 6 }
            ],
            2026: [
                { label: "Yenişehir", val: 15 },
                { label: "Mezitli", val: 12 },
                { label: "Toroslar", val: 11 },
                { label: "Akdeniz", val: 10 }
            ]
        },
        projects: {
            title: "Öğretmenler Tarafından Geliştirilen Eylem Projeleri",
            badge: "Akademik Proje Sayısı",
            insight: "STEM çalıştaylarımızın en önemli çıktısı olan eylem araştırmaları ve projeler, çocukların sınıflarda somut tasarımlar üretmesine ve bilimi yaşayarak öğrenmesine vesile olmaktadır.",
            all: [
                { label: "2024", val: 35 },
                { label: "2025", val: 78 },
                { label: "2026", val: 115 }
            ],
            2024: [
                { label: "Mühendislik", val: 12 },
                { label: "Robotik", val: 8 },
                { label: "Fen Odaklı", val: 15 }
            ],
            2025: [
                { label: "Mühendislik", val: 28 },
                { label: "Robotik", val: 22 },
                { label: "Fen Odaklı", val: 28 }
            ],
            2026: [
                { label: "Mühendislik", val: 45 },
                { label: "Robotik", val: 32 },
                { label: "Fen Odaklı", val: 38 }
            ]
        }
    };

    const metricSelect = document.getElementById('data-metric');
    const yearRadios = document.querySelectorAll('input[name="dash-year"]');
    const chartTitle = document.getElementById('chart-title');
    const chartBadge = document.getElementById('chart-badge');
    const chartInsight = document.getElementById('chart-insight');
    const chartBars = document.getElementById('chart-bars');
    const chartXLabels = document.getElementById('chart-x-labels');

    function updateChart() {
        if (!metricSelect || !chartBars) return;
        
        const metric = metricSelect.value;
        let selectedYear = 'all';
        yearRadios.forEach(radio => {
            if (radio.checked) selectedYear = radio.value;
        });

        const dataObj = dashboardData[metric];
        let currentDataset = dataObj[selectedYear];

        // If dataset is undefined for that year (e.g. 2026 didn't finish), fall back to all
        if (!currentDataset) {
            currentDataset = dataObj['all'];
            // Auto check the 'all' radio
            yearRadios.forEach(radio => {
                if (radio.value === 'all') radio.checked = true;
            });
            selectedYear = 'all';
        }

        // Set text
        chartTitle.textContent = selectedYear === 'all' 
            ? dataObj.title 
            : `${selectedYear} Yılı - ${dataObj.title}`;
        chartBadge.textContent = dataObj.badge;
        chartInsight.textContent = dataObj.insight;

        // Clear existing bars
        chartBars.innerHTML = '';
        
        // Find max value in dataset to scale heights
        const maxVal = Math.max(...currentDataset.map(item => item.val));
        
        // Render Bars
        currentDataset.forEach(item => {
            const barCol = document.createElement('div');
            barCol.className = 'chart-bar-col';
            
            // Calculate percentage height
            const pct = maxVal > 0 ? (item.val / maxVal) * 80 : 0; // max 80% to keep label visible
            
            barCol.innerHTML = `
                <span class="chart-bar-val">${item.val}</span>
                <div class="chart-bar-fill" style="height: 0%"></div>
            `;
            
            chartBars.appendChild(barCol);
            
            // Trigger animation in next tick
            setTimeout(() => {
                const fill = barCol.querySelector('.chart-bar-fill');
                if (fill) fill.style.height = `${pct}%`;
            }, 50);
        });

        // Render X labels
        if (chartXLabels) {
            chartXLabels.innerHTML = `
                <span></span>
                <div class="chart-x-axis-labels">
                    ${currentDataset.map(item => `<span>${item.label}</span>`).join('')}
                </div>
            `;
        }
    }

    // Listeners for Dashboard
    if (metricSelect) {
        metricSelect.addEventListener('change', updateChart);
    }
    yearRadios.forEach(radio => {
        radio.addEventListener('change', updateChart);
    });

    // Run first render of chart
    updateChart();

    // ==========================================
    // 8. Modal Handling (Detailed Views)
    // ==========================================
    const modal = document.getElementById('pub-modal');
    const modalBody = document.getElementById('modal-body-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBackdrop = document.getElementById('modal-backdrop');

    function openModal(dataId, type) {
        if (!modal || !modalBody) return;
        
        const details = dataStore[type][dataId];
        if (!details) return;

        let tagClass = 'bg-primary';
        if (type === 'publications') {
            tagClass = details.tag.includes('Tezi') ? 'font-accent bg-accent-soft' : 'font-accent bg-primary-soft';
        } else {
            tagClass = 'font-secondary bg-secondary-soft';
        }

        modalBody.innerHTML = `
            <span class="modal-pub-tag ${tagClass}">${details.tag || ''}</span>
            <h2>${details.title}</h2>
            <div class="modal-meta-row">${details.meta}</div>
            <div class="modal-desc-content">${details.content}</div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Bind event listeners to academic detail buttons
    document.querySelectorAll('.open-pub-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const pubId = btn.dataset.pubId;
            const isProject = pubId.startsWith('proj');
            openModal(pubId, isProject ? 'publications' : 'publications'); // all in publications namespace
        });
    });

    // Bind event listeners to blog "Devamını Oku" buttons
    document.querySelectorAll('.read-blog-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const blogId = btn.dataset.blogId;
            openModal(blogId, 'blog');
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    
    // Esc Key closes modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ==========================================
    // 9. Contact Form Simulation & Toast Alerts
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit-btn');
    const spinner = document.getElementById('form-spinner');

    if (contactForm && submitBtn && spinner) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic fields grab
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                showToast('Lütfen tüm zorunlu alanları doldurunuz.', 'error');
                return;
            }

            // Spinner start
            submitBtn.classList.add('submitting');
            spinner.style.display = 'block';

            // Simulate server network latency
            setTimeout(() => {
                // Done loading
                submitBtn.classList.remove('submitting');
                spinner.style.display = 'none';
                
                // Clear Form
                contactForm.reset();
                
                // Show notification
                showToast(`Teşekkürler Sayın ${name}, mesajınız başarıyla iletildi!`, 'success');
            }, 1800);
        });
    }

    // ==========================================
    // 10. Reusable Toast Notification System
    // ==========================================
    function showToast(message, type = 'success') {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;

        // Create element
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        // Add icon based on type
        const iconSvg = type === 'success' 
            ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
            : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

        toast.innerHTML = `
            ${iconSvg}
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        // Slide in
        setTimeout(() => {
            toast.classList.add('active');
        }, 100);

        // Slide out and remove
        setTimeout(() => {
            toast.classList.remove('active');
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 4000);
    }
    
    // Global exposure just in case
    window.showToast = showToast;
});
