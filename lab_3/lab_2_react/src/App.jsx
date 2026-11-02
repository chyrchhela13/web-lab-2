import Header from './components/Header.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import { useLanguage } from './LanguageContext.jsx';

function App() {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-black font-['Basis_Grotesque_Pro',Arial,sans-serif] text-base leading-[1.6] font-normal text-[#f5f5f5] antialiased [font-synthesis:none] selection:bg-[#e4e4e4] selection:text-black">
            <a href="#main" className="absolute top-[-80px] left-6 z-200 bg-white px-[18px] py-3 text-black focus:top-3">{t('Перейти до вмісту')}</a>
            <div id="top" aria-hidden="true" />
            <Header />
            <main id="main">
                <section id="about" aria-labelledby="name" className="flex min-h-[555px] flex-col items-center justify-center px-6 pt-20 pb-[110px] text-center min-[1600px]:min-h-[610px] max-[900px]:min-h-[520px] max-[600px]:min-h-[455px] max-[600px]:pt-[75px] max-[600px]:pb-[90px]">
                    <p className="mb-[26px] text-[13px] tracking-[.01em] text-[#aaa] max-[600px]:mb-6 max-[600px]:text-xs">{t('Особисте резюме')}</p>
                    <h1 id="name" className="text-[clamp(58px,6.7vw,98px)] leading-[1.08] font-medium tracking-[-.055em] max-[600px]:text-[clamp(46px,12.8vw,72px)] max-[600px]:tracking-[-.05em]">{t('Даниїл Кішик')}</h1>
                    <p className="mt-[30px] max-w-[535px] text-[17px] leading-[1.6] text-[#959595] max-[600px]:mt-[25px] max-[600px]:max-w-[325px] max-[600px]:text-[15px]">{t('Шукаю можливість розпочати роботу молодшим фахівцем з кібербезпеки або стажером-програмістом.')}</p>
                </section>
                <div className="mx-auto max-w-[1192px] px-14 max-[900px]:px-8 max-[600px]:px-6">
                    <Experience />
                    <Skills />
                    <Education />
                    <section aria-label={t('Про мій досвід')} className="flex items-center justify-between gap-[30px] border-t border-[#262626] pt-[51px] pb-[60px] max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-6 max-[600px]:pt-[35px] max-[600px]:pb-[43px]">
                        <p className="text-lg leading-[1.65] tracking-[-.01em] max-[600px]:text-base"><span>{t('Комп’ютерні мережі, програмування й бази даних.')}</span>{' '}<br className="max-[600px]:hidden" /><span className="text-[#959595]">{t('Основа, на якій я будую свій наступний крок.')}</span></p>
                        <a href="#top" className="inline-flex items-center gap-3 text-sm whitespace-nowrap text-[#c4c4c4] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-white"><span>{t('На початок')}</span><span aria-hidden="true" className="text-lg leading-none">↑</span></a>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default App;
