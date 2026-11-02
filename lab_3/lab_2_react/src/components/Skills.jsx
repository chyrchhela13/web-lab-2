import { useLanguage } from '../LanguageContext.jsx';
import { skills } from '../data.js';

function Skills() {
    const { t } = useLanguage();
    return (
        <section id="skills" aria-labelledby="skills-title" className="border-t border-[#262626] pt-[76px] pb-[82px] max-[600px]:pt-[51px] max-[600px]:pb-[55px]">
            <p className="mb-[22px] text-xs tracking-[.01em] text-[#959595] max-[600px]:mb-5 max-[600px]:text-[11px]">{t('02 / Навички')}</p>
            <h2 id="skills-title" className="text-[43px] leading-[1.12] font-medium tracking-[-.035em] max-[600px]:text-[33px]">{t('Те, з чим я працюю')}</h2>
            <div className="mt-[47px] grid grid-cols-4 gap-7 max-[900px]:grid-cols-2 max-[900px]:gap-y-9 max-[600px]:mt-8 max-[600px]:gap-x-5 max-[600px]:gap-y-8">
                {skills.map(([name, description], index) => (
                    <div key={name} className="border-t border-[#262626] pt-[19px]">
                        <span className="text-[11px] text-[#959595]">0{index + 1}</span>
                        <h3 className="mt-7 text-2xl leading-[1.12] font-medium tracking-[-.02em] max-[600px]:mt-[22px] max-[600px]:text-[21px]">{t(name)}</h3>
                        <p className="mt-3.5 max-w-[220px] text-sm leading-[1.7] text-[#959595] max-[600px]:text-[13px]">{t(description)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;
