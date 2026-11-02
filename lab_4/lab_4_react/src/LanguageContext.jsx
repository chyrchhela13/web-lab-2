import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        try {
            return localStorage.getItem('resume-language') === 'en' ? 'en' : 'uk';
        } catch {
            return 'uk';
        }
    });

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = language === 'en'
            ? 'Daniil Kishyk — Cybersecurity and computer networks'
            : 'Даниїл Кішик — кібербезпека та комп’ютерні мережі';
        const description = document.querySelector('meta[name="description"]');
        if (description) {
            description.content = language === 'en'
                ? 'Daniil Kishyk — Cybersecurity student. Networking, Python and SQL. Seeking an information security internship.'
                : 'Даниїл Кішик — студент кібербезпеки. Комп’ютерні мережі, Python та SQL. Розглядаю стажування у сфері інформаційної безпеки.';
        }
        try {
            localStorage.setItem('resume-language', language);
        } catch {
            // Мова перемикається і тоді, коли браузер заборонив localStorage.
        }
        window.dispatchEvent(new Event('resume-settings-change'));
    }, [language]);

    function t(uk, en = uk) {
        return language === 'en' ? en : uk;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

// Короткий запис перекладеного тексту для JSX.
export function T({ children, en }) {
    const { t } = useLanguage();
    return t(children, en);
}
