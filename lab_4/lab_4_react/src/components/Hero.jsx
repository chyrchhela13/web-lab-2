import { T } from '../LanguageContext.jsx';

export default function Hero() {
    return (
        <section id={"about"} className={"hero"} aria-labelledby={"name"}>
            <p className={"eyebrow"}>
                <T en={"Cybersecurity and computer networks"}>{"Кібербезпека та комп’ютерні мережі"}</T>
            </p>
            <h1 id={"name"}>
                <T en={"Daniil Kishyk"}>{"Даниїл Кішик"}</T>
            </h1>
            <p className={"hero-description"}>
                <T en={"Cybersecurity student at Lviv Polytechnic National University. I have foundational knowledge of networking, Python and SQL, and am seeking an internship in information security."}>{"Студент кібербезпеки у Львівській політехніці. Маю базові знання мережевих технологій, Python та SQL. Розглядаю стажування у сфері інформаційної безпеки."}</T>
            </p>
        </section>
    );
}
