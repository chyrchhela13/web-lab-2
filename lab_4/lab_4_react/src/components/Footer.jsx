import { useLanguage, T } from '../LanguageContext.jsx';
import { GlobeIcon } from './Icons.jsx';
import SystemInfo from './SystemInfo.jsx';

export default function Footer() {
    const { language, setLanguage, t } = useLanguage();
    return (
        <footer className="site-footer">
            <a className="github-link" href="https://github.com/chyrchhela13" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <p className="copyright"><T en="© 2026 Daniil Kishyk">© 2026 Даниїл Кішик</T></p>
            <div className="language-switch" role="group" aria-label={t('Мова сторінки', 'Page language')}>
                <GlobeIcon />
                <button type="button" data-language="uk" aria-label="Українська" aria-pressed={language === 'uk'} onClick={() => setLanguage('uk')}>UK</button>
                <span className="language-divider" aria-hidden="true">/</span>
                <button type="button" data-language="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
            </div>
            <SystemInfo />
        </footer>
    );
}
