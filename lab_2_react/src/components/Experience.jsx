import { useLanguage } from '../LanguageContext.jsx';
import { jobs } from '../data.js';

function Experience() {
    const { t } = useLanguage();
    return (
        <section id="experience" aria-labelledby="experience-title" className="border-t border-[#262626] pt-[76px] pb-[82px] max-[600px]:pt-[51px] max-[600px]:pb-[55px]">
            <p className="mb-[22px] text-xs tracking-[.01em] text-[#959595] max-[600px]:mb-5 max-[600px]:text-[11px]">{t('01 / Досвід')}</p>
            <h2 id="experience-title" className="text-[43px] leading-[1.12] font-medium tracking-[-.035em] max-[600px]:text-[33px]">{t('Досвід роботи')}</h2>
            <p className="mt-[18px] text-[15px] text-[#959595] max-[600px]:mt-3.5 max-[600px]:max-w-[280px] max-[600px]:text-sm">{t('Від технічної підтримки до захисту інформації.')}</p>
            <div className="mt-[46px] border-b border-[#262626] max-[600px]:mt-8">
                {jobs.map((job, index) => (
                    <details key={job.company} open={index === 0} className="group border-t border-[#262626]">
                        <summary className="grid cursor-pointer list-none grid-cols-[210px_minmax(0,1fr)_30px] items-center gap-6 py-[26px] marker:content-none hover:[&_.company]:text-[#c6c6c6] focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-white [&::-webkit-details-marker]:hidden max-[900px]:grid-cols-[170px_minmax(0,1fr)_22px] max-[900px]:gap-[22px] max-[600px]:grid-cols-[minmax(0,1fr)_20px] max-[600px]:gap-x-[18px] max-[600px]:gap-y-[9px] max-[600px]:py-[23px]">
                            <span className="self-start pt-[5px] text-[13px] text-[#959595] max-[600px]:col-start-1 max-[600px]:row-start-1 max-[600px]:pt-0 max-[600px]:text-xs">{t(job.period)}</span>
                            <span className="flex flex-col gap-1.5 max-[600px]:col-start-1 max-[600px]:row-start-2 max-[600px]:gap-[7px]">
                                <span className="company text-2xl leading-[1.25] font-medium tracking-[-.025em] transition-colors max-[600px]:text-[22px]">{t(job.company)}</span>
                                <span className="text-sm text-[#959595] max-[600px]:text-[13px]">{t(job.position)}</span>
                            </span>
                            <span aria-hidden="true" className="relative h-4 w-4 justify-self-end before:absolute before:top-[7px] before:left-px before:h-px before:w-3.5 before:bg-[#bbb] after:absolute after:top-[7px] after:left-px after:h-px after:w-3.5 after:rotate-90 after:bg-[#bbb] after:transition-transform group-open:after:rotate-0 max-[600px]:col-start-2 max-[600px]:row-span-2 max-[600px]:row-start-1" />
                        </summary>
                        <div className="ml-[234px] pr-9 pb-7 text-sm leading-[1.8] text-[#959595] max-[900px]:ml-[192px] max-[600px]:ml-0 max-[600px]:pr-[15px] max-[600px]:pb-[25px] max-[600px]:text-[13px]">
                            <ul className="list-disc space-y-1 pl-[17px] marker:text-[#777]">{job.tasks.map((task) => <li key={task}>{t(task)}</li>)}</ul>
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
export default Experience;
