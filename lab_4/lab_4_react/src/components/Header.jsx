import { useLanguage, T } from '../LanguageContext.jsx';
import { useTheme } from '../ThemeProvider.jsx';
import { SunIcon, MoonIcon } from './Icons.jsx';

export default function Header() {
    const { t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const label = theme === 'dark'
        ? t('Увімкнути світлу тему', 'Switch to light mode')
        : t('Увімкнути темну тему', 'Switch to dark mode');

    return (
        <header className="site-header">
            <div className="header-inner">
                <nav aria-label={t('Головна навігація', 'Main navigation')}>
                    <a href="#about"><T en="About me">Про мене</T></a>
                    <a href="#experience"><T en="Competencies">Компетенції</T></a>
                    <a href="#skills"><T en="Skills">Навички</T></a>
                    <a href="#education"><T en="Education">Освіта</T></a>
                </nav>
                <button id="theme-toggle" className="theme-toggle" type="button" onClick={toggleTheme}
                    aria-label={label} title={label} aria-pressed={theme === 'dark'}>
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
}
