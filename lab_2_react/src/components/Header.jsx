import { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';
import { GlobeIcon } from './Icons.jsx';

const navigation = [
    ['about', 'Про мене'],
    ['experience', 'Досвід'],
    ['skills', 'Навички'],
    ['education', 'Освіта'],
];

function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        let frame = 0;
        function update() {
            const threshold = document.getElementById('site-header').offsetHeight + 45;
            let active = 'about';
            navigation.forEach(([id]) => {
                if (document.getElementById(id).getBoundingClientRect().top <= threshold) active = id;
            });
            if (scrollY + innerHeight >= document.documentElement.scrollHeight - 3) active = 'education';
            setActiveSection(active);
            frame = 0;
        }
        function schedule() {
            if (!frame) frame = requestAnimationFrame(update);
        }
        update();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
        };
    }, []);

    return (
        <header id="site-header" className="sticky top-0 z-100 border-b border-white/[.055] bg-black/72 backdrop-blur-[20px]">
            <div className="mx-auto flex min-h-[88px] max-w-[1512px] items-center justify-between gap-[30px] px-14 py-5 max-[900px]:px-8 max-[900px]:py-[18px] max-[600px]:min-h-20 max-[600px]:gap-4 max-[600px]:px-6 max-[600px]:py-4">
                <nav aria-label={t('Головна навігація')} className="flex items-center gap-8 max-[900px]:gap-6 max-[600px]:grid max-[600px]:grid-cols-2 max-[600px]:gap-x-[23px] max-[600px]:gap-y-[5px]">
                    {navigation.map(([id, label]) => (
                        <a key={id} href={'#' + id} aria-current={activeSection === id ? 'location' : undefined} className="text-[15px] font-medium whitespace-nowrap text-[#a5a5a5] transition-colors hover:text-white aria-[current=location]:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-white max-[600px]:text-[13px]">
                            {t(label)}
                        </a>
                    ))}
                </nav>
                <div role="group" aria-label={t('Мова сторінки')} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#1c1c1c] px-[13px] py-[7px] max-[600px]:gap-[7px] max-[600px]:px-[11px] max-[600px]:py-1.5">
                    <GlobeIcon className="mr-[3px] h-4 w-4 text-[#eee] max-[600px]:mr-px max-[600px]:h-[15px] max-[600px]:w-[15px]" />
                    <button type="button" aria-label="Українська" aria-pressed={language === 'uk'} onClick={() => setLanguage('uk')} className="cursor-pointer border-0 bg-transparent py-[3px] text-[13px] leading-[1.5] text-[#929292] hover:text-white aria-pressed:font-medium aria-pressed:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white max-[600px]:text-xs">UK</button>
                    <span aria-hidden="true" className="text-xs text-[#595959]">/</span>
                    <button type="button" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')} className="cursor-pointer border-0 bg-transparent py-[3px] text-[13px] leading-[1.5] text-[#929292] hover:text-white aria-pressed:font-medium aria-pressed:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white max-[600px]:text-xs">EN</button>
                </div>
            </div>
        </header>
    );
}
export default Header;
