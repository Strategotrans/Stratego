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
    };

    const savedLang = localStorage.getItem('preferredLang') || 'en';
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
