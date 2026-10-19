import { useLanguage } from '../LanguageContext.jsx';
import { CompassIcon, GithubIcon } from './Icons.jsx';

function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="mx-auto grid max-w-[1512px] grid-cols-[1fr_auto_1fr] items-center gap-6 border-t border-[#262626] px-14 py-7 max-[900px]:grid-cols-[1fr_auto] max-[900px]:px-8 max-[900px]:py-[26px] max-[600px]:gap-x-2.5 max-[600px]:gap-y-[22px] max-[600px]:px-6 max-[600px]:py-[25px]">
            <a href="https://github.com/chyrchhela13/web-lab-2" target="_blank" rel="noopener noreferrer" aria-label={t('Мій проєкт на GitHub — нова вкладка')} className="inline-flex items-center gap-[11px] justify-self-start text-base font-medium text-[#f5f5f5] transition-colors hover:text-[#aaa] focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-white max-[600px]:gap-[9px] max-[600px]:text-sm">
                <GithubIcon className="h-[23px] w-[23px] max-[600px]:h-[21px] max-[600px]:w-[21px]" /><span>GitHub</span>
            </a>
            <p className="text-center text-[13px] tracking-[.01em] text-[#959595] tabular-nums max-[900px]:col-span-2 max-[900px]:row-start-2 max-[600px]:text-xs">{t('Кішик © 2026 | Варіант 6')}</p>
            <span className="inline-flex items-center gap-[11px] justify-self-end rounded-full bg-[#1c1c1c] px-[17px] py-[11px] text-sm whitespace-nowrap text-[#c4c4c4] max-[600px]:gap-2 max-[600px]:px-[13px] max-[600px]:py-2.5 max-[600px]:text-xs">
                <CompassIcon className="h-[17px] w-[17px] text-[#eee] max-[600px]:h-[15px] max-[600px]:w-[15px]" /><span>{t('Львів, Україна')}</span>
            </span>
        </footer>
    );
}
export default Footer;
