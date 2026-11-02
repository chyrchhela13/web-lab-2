import { useLanguage } from '../LanguageContext.jsx';

function Education() {
    const { t } = useLanguage();
    return (
        <section id="education" aria-labelledby="education-title" className="grid grid-cols-2 gap-[100px] border-t border-[#262626] pt-[78px] pb-[86px] max-[900px]:gap-[45px] max-[600px]:grid-cols-1 max-[600px]:gap-7 max-[600px]:pt-[51px] max-[600px]:pb-[55px]">
            <div>
                <p className="mb-[22px] text-xs tracking-[.01em] text-[#959595] max-[600px]:mb-5 max-[600px]:text-[11px]">{t('03 / Освіта')}</p>
                <h2 id="education-title" className="max-w-[400px] text-[56px] leading-[1.1] font-medium tracking-[-.04em] max-[900px]:text-[45px]">{t('Львівська політехніка')}</h2>
            </div>
            <div className="pt-9 max-[600px]:pt-0">
                <p className="max-w-[350px] text-[21px] leading-[1.5] font-medium tracking-[-.015em] max-[600px]:text-[19px]">{t('Національний університет «Львівська політехніка»')}</p>
                <p className="mt-[21px] text-sm leading-[1.9] text-[#959595] max-[600px]:mt-[17px]">{t('Спеціальність «Кібербезпека»')}<br />{t('Група КБ-209 · Львів')}</p>
                <a href="https://lpnu.ua/" target="_blank" rel="noopener noreferrer" className="mt-[25px] inline-flex items-center gap-3 rounded-full border border-[#3b3b3b] bg-transparent px-5 py-2.5 text-sm font-normal text-[#aaa] transition-colors hover:border-[#777] hover:bg-[#101010] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-white">
                    <span>{t('Сайт університету')}</span><span aria-hidden="true" className="text-lg leading-none">↗</span><span className="sr-only">{t(' (нова вкладка)')}</span>
                </a>
            </div>
        </section>
    );
}
export default Education;
