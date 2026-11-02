import Header from './components/Header.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <>
            <Header />

            <main>
                <section>
                    <h2>Мета</h2>
                    <p>
                        Отримання посади молодшого фахівця з кібербезпеки
                        або стажера-програміста.
                    </p>
                    <p>
                        <strong>Загальний досвід:</strong>{' '}
                        робота з комп’ютерними мережами, програмування мовою
                        Python, створення вебсторінок і баз даних.
                        Базові знання захисту інформації.
                    </p>
                </section>

                <Experience />
                <Education />
                <Skills />
            </main>

            <Footer />
        </>
    );
}

export default App;