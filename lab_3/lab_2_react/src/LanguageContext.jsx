import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations.js';

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
            ? 'Daniil Kishyk — résumé'
            : 'Даниїл Кішик — резюме';
        document.querySelector('meta[name="description"]').content = language === 'en'
            ? 'Daniil Kishyk. Cybersecurity, Python and computer networks. Personal résumé.'
            : 'Даниїл Кішик. Кібербезпека, Python і комп’ютерні мережі. Особисте резюме.';
        try {
            localStorage.setItem('resume-language', language);
        } catch {
            // Перемикання працює навіть без доступу до сховища.
        }
    }, [language]);

    function t(text) {
        return language === 'en' ? (translations[text] ?? text) : text;
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
