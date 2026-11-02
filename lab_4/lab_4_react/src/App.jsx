import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Reviews from './components/Reviews.jsx';
import Closing from './components/Closing.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';

export default function App() {
    return (
        <div id="top">
            <Header />
            <main>
                <Hero />
                <div className="content">
                    <Experience />
                    <Skills />
                    <Education />
                    <Reviews />
                    <Closing />
                </div>
            </main>
            <Footer />
            <ContactForm />
        </div>
    );
}
