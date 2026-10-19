/* Переклад усього тексту без перезавантаження сторінки. */
const translatedElements = [...document.querySelectorAll('[data-en]')];
const labelledElements = [...document.querySelectorAll('[data-en-label]')];
const languageButtons = [...document.querySelectorAll('[data-language]')];

translatedElements.forEach((element) => {
    element.dataset.uk = element.textContent;
});
labelledElements.forEach((element) => {
    element.dataset.ukLabel = element.getAttribute('aria-label');
});

function setLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'uk';
    document.title = english ? 'Daniil Kishyk — résumé' : 'Даниїл Кішик — резюме';
    document.querySelector('meta[name="description"]').content = english
        ? 'Daniil Kishyk. Cybersecurity, Python and computer networks. Personal résumé.'
        : 'Даниїл Кішик. Кібербезпека, Python і комп’ютерні мережі. Особисте резюме.';
    translatedElements.forEach((element) => {
        element.textContent = english ? element.dataset.en : element.dataset.uk;
    });
    labelledElements.forEach((element) => {
        element.setAttribute('aria-label', english ? element.dataset.enLabel : element.dataset.ukLabel);
    });
    languageButtons.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    try {
        localStorage.setItem('resume-language', language);
    } catch {
        // Переклад працює також без доступу до localStorage.
    }
}

languageButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
});

let initialLanguage = 'uk';
try {
    if (localStorage.getItem('resume-language') === 'en') initialLanguage = 'en';
} catch {
    // За замовчуванням — українська.
}
setLanguage(initialLanguage);

/* Активний пункт меню відповідає секції, яку читає користувач. */
const sectionLinks = [...document.querySelectorAll('.site-header nav a')];
const sections = sectionLinks.map((link) => document.querySelector(link.hash));
let scheduled = false;
function updateActiveSection() {
    const threshold = document.querySelector('.site-header').getBoundingClientRect().height + 45;
    let activeSection = sections[0];
    sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= threshold) activeSection = section;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) {
        activeSection = sections[sections.length - 1];
    }
    sectionLinks.forEach((link) => {
        if (link.hash === '#' + activeSection.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
    scheduled = false;
}
window.addEventListener('scroll', () => {
    if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(updateActiveSection);
    }
}, { passive: true });
window.addEventListener('resize', updateActiveSection);
updateActiveSection();
