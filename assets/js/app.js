/* ==================================================
   STRATEGO TRANS — APP LOGIC (2026 EDITION)
================================================== */

if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. VERTIMŲ DUOMENŲ BAZĖ ---
    const translations = {
        en: {
            "nav-home": "HOME", "nav-services": "SERVICES", "nav-gallery": "GALLERY", "nav-about": "ABOUT", "nav-contact": "CONTACT",
            "hero-title": "Driven by Precision.<br><span>Trusted Across Europe.</span>",
            "hero-desc": "Reliable transport solutions for premium vehicles, yachts and commercial freight.",
            "services-tag": "OUR SERVICES", "services-title": "Premium Logistics Solutions",
            "service1-title": "Vehicle Transport", "service1-desc": "Safe and professional transport of passenger cars, luxury vehicles and commercial vehicles across Europe.",
            "service2-title": "Boat Transport", "service2-desc": "Secure transport of boats, yachts and watercraft with specialized equipment and experienced drivers.",
            "service3-title": "Freight Forwarding", "service3-desc": "International logistics solutions tailored to your business requirements.",
            "service4-title": "Road Assistance 24/7", "service4-desc": "Fast roadside assistance and vehicle recovery available throughout Europe.",
            "gallery-tag": "OUR FLEET", "gallery-title": "Precision in Motion",
            "gallery-item1": "Luxury Fleet", "gallery-item2": "Secure Loading", "gallery-item3": "Professional Team", "gallery-item4": "European Coverage",
            "about-tag": "ABOUT US", "about-title": "Driven by Precision.", "about-text": "Stratego Trans delivers premium transport, vehicle logistics and freight forwarding services across Europe with a strong focus on reliability, safety and precision.",
            "contact-tag": "CONTACT", "contact-title": "Let's Move Forward",
            "form-name": "Your Name", "form-email": "Your E-mail", "form-message": "Your Message", "form-submit": "SEND MESSAGE",
            "label-address": "Address:", "label-phone": "Phone:", "label-email": "E-mail:",
            "menu-footer-text": "Premium Transport & Logistics Standards"
        },
        lt: {
            "nav-home": "PRADŽIA", "nav-services": "PASLAUGOS", "nav-gallery": "GALERIJA", "nav-about": "APIE MUS", "nav-contact": "KONTAKTAI",
            "hero-title": "Tikslumas kelyje.<br><span>Patikimi visoje Europoje.</span>",
            "hero-desc": "Patikimi transporto sprendimai premium klasės automobiliams, jachtoms ir komerciniams kroviniams.",
            "services-tag": "MŪSŲ PASLAUGOS", "services-title": "Premium logistikos sprendimai",
            "service1-title": "Transporto pervežimas", "service1-desc": "Saugus ir profesionalus lengvųjų, prabangių ir komercinių automobilių pervežimas visoje Europoje.",
            "service2-title": "Laivų transportavimas", "service2-desc": "Saugus jachtų, katerių ir kitų vandens transporto priemonių pervežimas specializuota įranga.",
            "service3-title": "Krovinių ekspedijavimas", "service3-desc": "Tarptautiniai logistikos sprendimai, pritaikyti jūsų verslo poreikiams.",
            "service4-title": "Pagalba kelyje 24/7", "service4-desc": "Skubi pagalba kelyje ir automobilių evakuacija visoje Europoje.",
            "gallery-tag": "MŪSŲ PARKAS", "gallery-title": "Tikslumas judesyje",
            "gallery-item1": "Prabangus parkas", "gallery-item2": "Saugus pakrovimas", "gallery-item3": "Profesionali komanda", "gallery-item4": "Europos mastas",
            "about-tag": "APIE MUS", "about-title": "Varomi tikslumo.", "about-text": "Stratego Trans teikia aukščiausios kokybės transporto, logistikos ir ekspedijavimo paslaugas Europoje, orientuodamiesi į patikimumą ir saugumą.",
            "contact-tag": "KONTAKTAI", "contact-title": "Judėkime pirmyn",
            "form-name": "Jūsų vardas", "form-email": "Jūsų el. paštas", "form-message": "Jūsų žinutė", "form-submit": "SIŲSTI ŽINUTĘ",
            "label-address": "Adresas:", "label-phone": "Telefonas:", "label-email": "El. paštas:",
            "menu-footer-text": "Premium transporto ir logistikos standartai"
        },
        de: {
            "nav-home": "STARTSEITE", "nav-services": "DIENSTLEISTUNGEN", "nav-gallery": "GALERIE", "nav-about": "ÜBER UNS", "nav-contact": "KONTAKT",
            "hero-title": "Präzision in Bewegung.<br><span>Europaweit vertraut.</span>",
            "hero-desc": "Zuverlässige Transportlösungen für Premiumfahrzeuge, Yachten und gewerbliche Fracht.",
            "services-tag": "UNSERE LEISTUNGEN", "services-title": "Premium Logistiklösungen",
            "service1-title": "Fahrzeugtransport", "service1-desc": "Sicherer und professioneller Transport von PKWs, Luxusfahrzeugen und Nutzfahrzeugen in ganz Europa.",
            "service2-title": "Bootstransport", "service2-desc": "Sicherer Transport von Booten, Yachten und Wasserfahrzeugen mit Spezialausrüstung und erfahrenen Fahrern.",
            "service3-title": "Güterkraftverkehr", "service3-desc": "Internationale Logistiklösungen, maßgeschneidert auf Ihre geschäftlichen Anforderungen.",
            "service4-title": "Pannenhilfe 24/7", "service4-desc": "Schnelle Pannenhilfe und Fahrzeugbergung in ganz Europa verfügbar.",
            "gallery-tag": "UNSERE FLOTTE", "gallery-title": "Präzision in Bewegung",
            "gallery-item1": "Luxusflotte", "gallery-item2": "Sichere Verladung", "gallery-item3": "Professionelles Team", "gallery-item4": "Europaweite Abdeckung",
            "about-tag": "ÜBER UNS", "about-title": "Angetrieben von Präzision.", "about-text": "Stratego Trans bietet erstklassige Transport-, Logistik- und Speditionsdienstleistungen in ganz Europa mit einem starken Fokus auf Zuverlässigkeit, Sicherheit und Präzision.",
            "contact-tag": "KONTAKT", "contact-title": "Lassen Sie uns vorankommen",
            "form-name": "Ihr Name", "form-email": "Ihre E-Mail", "form-message": "Ihre Nachricht", "form-submit": "NACHRICHT SENDEN",
            "label-address": "Adresse:", "label-phone": "Telefon:", "label-email": "E-Mail:",
            "menu-footer-text": "Premium Transport- und Logistikstandards"
        },
        pl: {
            "nav-home": "START", "nav-services": "USŁUGI", "nav-gallery": "GALERIA", "nav-about": "O NAS", "nav-contact": "KONTAKT",
            "hero-title": "Precyzja w ruchu.<br><span>Zaufanie w całej Europie.</span>",
            "hero-desc": "Niezawodne rozwiązania transportowe dla pojazdów premium, jachtów i ładunków komercyjnych.",
            "services-tag": "NASZE USŁUGI", "services-title": "Premium rozwiązania logistyczne",
            "service1-title": "Transport pojazdów", "service1-desc": "Bezpieczny i profesjonalny przewóz samochodów osobowych, luksusowych i komercyjnych w całej Europie.",
            "service2-title": "Transport łodzi", "service2-desc": "Bezpieczny transport łodzi, jachtów i jednostek pływających przy użyciu specjalistycznego sprzętu.",
            "service3-title": "Spedycja towarów", "service3-desc": "Międzynarodowe rozwiązania logistyczne dostosowane do wymagań Twojego biznesu.",
            "service4-title": "Pomoc drogowa 24/7", "service4-desc": "Szybka pomoc drogowa i holowanie dostępne w całej Europie.",
            "gallery-tag": "NASZA FLOTA", "gallery-title": "Precyzja w ruchu",
            "gallery-item1": "Flota luksusowa", "gallery-item2": "Bezpieczny załadunek", "gallery-item3": "Profesjonalny zespół", "gallery-item4": "Zasięg europejski",
            "about-tag": "O NAS", "about-title": "Napędzani precyzją.", "about-text": "Stratego Trans świadczy najwyższej jakości usługi transportowe, logistyczne i spedycyjne w Europie, stawiając na niezawodność, bezpieczeństwo i precyzję.",
            "contact-tag": "KONTAKT", "contact-title": "Idźmy naprzód",
            "form-name": "Twoje imię", "form-email": "Twój e-mail", "form-message": "Twoja wiadomość", "form-submit": "WYŚLIJ WIADOMOŚĆ",
            "label-address": "Adres:", "label-phone": "Telefon:", "label-email": "E-mail:",
            "menu-footer-text": "Standardy transportu i logistyki premium"
        },
        ru: {
            "nav-home": "ГЛАВНАЯ", "nav-services": "УСЛУГИ", "nav-gallery": "ГАЛЕРЕЯ", "nav-about": "О НАС", "nav-contact": "КОНТАКТЫ",
            "hero-title": "Точность в движении.<br><span>Доверие по всей Европе.</span>",
            "hero-desc": "Надежные транспортные решения для премиальных автомобилей, яхт и коммерческих грузов.",
            "services-tag": "НАШИ УСЛУГИ", "services-title": "Премиум логистические решения",
            "service1-title": "Перевозка автомобилей", "service1-desc": "Безопасная и профессиональная перевозка легковых, люксовых и коммерческих автомобилей по всей Европе.",
            "service2-title": "Перевозка катеров", "service2-desc": "Безопасная перевозка катеров, яхт и водной техники со специальным оборудованием.",
            "service3-title": "Экспедирование грузов", "service3-desc": "Международные логистические решения, адаптированные к потребностям вашего бизнеса.",
            "service4-title": "Помощь на дороге 24/7", "service4-desc": "Быстрая помощь на дороге и эвакуация доступны по всей Европе.",
            "gallery-tag": "НАШ АВТОПАРК", "gallery-title": "Точность в движении",
            "gallery-item1": "Люксовый автопарк", "gallery-item2": "Безопасная погрузка", "gallery-item3": "Профессиональная команда", "gallery-item4": "Европейский охват",
            "about-tag": "О НАС", "about-title": "Движимые точностью.", "about-text": "Stratego Trans предоставляет первоклассные услуги по транспортировке, логистике и экспедированию грузов в Европе с акцентом на надежность, безопасность и точность.",
            "contact-tag": "КОНТАКТЫ", "contact-title": "Давайте двигаться вперед",
            "form-name": "Ваше имя", "form-email": "Ваш эл. адрес", "form-message": "Ваше сообщение", "form-submit": "ОТПРАВИТЬ СООБЩЕНИЕ",
            "label-address": "Адрес:", "label-phone": "Телефон:", "label-email": "Эл. почта:",
            "menu-footer-text": "Премиум стандарты транспорта и логистики"
        }
    };

    window.changeLang = (lang) => {
        const langData = translations[lang];
        if (!langData) return;
        
        Object.keys(langData).forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') { el.placeholder = langData[id]; }
                else if (el.tagName === 'BUTTON') { el.innerText = langData[id]; }
                else { el.innerHTML = langData[id]; }
            }
        });
        
        localStorage.setItem('preferredLang', lang);

        // ŠI EILUTĖ ATNAUJINS FORMOS NUORODĄ IŠKART PO KALBOS PASPAUDIMO:
        if(typeof updateRedirect === 'function') updateRedirect();
    };

    // Kalbos nustatymas pagal URL arba saugomą reikšmę
    const urlParams = new URLSearchParams(window.location.search);
    const savedLang = urlParams.get('lang') || localStorage.getItem('preferredLang') || 'en';
    changeLang(savedLang);

    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBackdrop = document.getElementById('menuBackdrop');
    const menuCards = document.querySelectorAll('.menu-card');
    const bgSlides = document.querySelectorAll('.menu-bg-slide');
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceVisual = document.getElementById('serviceVisual');

    function toggleMenu() {
        const isActive = menuOverlay.classList.contains('active');
        menuBtn.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        menuBackdrop.classList.toggle('active');
        document.body.style.overflow = !isActive ? 'hidden' : '';
    }

    function showBg(bgId) { bgSlides.forEach(s => s.classList.toggle('active', s.id === bgId)); }
    function resetBgs() { bgSlides.forEach(s => s.classList.toggle('active', s.id === 'bg-default')); }

    if(menuBtn) menuBtn.addEventListener('click', (e) => { e.preventDefault(); toggleMenu(); });
    if(menuBackdrop) menuBackdrop.addEventListener('click', toggleMenu);

    menuCards.forEach(card => {
        card.addEventListener('click', () => { setTimeout(toggleMenu, 150); });
        card.addEventListener('mouseenter', () => { const target = card.querySelector('a').getAttribute('data-bg'); if (target) showBg(target); });
        card.addEventListener('mouseleave', resetBgs);
    });

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    const handleScrollAnimation = () => {
        scrollElements.forEach(el => { if (el.getBoundingClientRect().top <= window.innerHeight * 0.85) el.classList.add('active'); });
        serviceCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                const newImg = card.getAttribute('data-img');
                if (serviceVisual && serviceVisual.style.backgroundImage !== `url("${newImg}")`) {
                    serviceVisual.style.opacity = 0;
                    setTimeout(() => {
                        serviceVisual.style.backgroundImage = `url("${newImg}")`;
                        serviceVisual.style.opacity = 1;
                    }, 300);
                }
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    setTimeout(handleScrollAnimation, 150);
});
