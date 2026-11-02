import { T } from '../LanguageContext.jsx';

export default function Education() {
    return (
        <section id={"education"} className={"section education"} aria-labelledby={"education-title"}>
            <div>
                <p className={"section-index"}>
                    <T en={"03 / Education"}>{"03 / Освіта"}</T>
                </p>
                <h2 id={"education-title"}>
                    <T en={"Bachelor’s studies"}>{"Бакалаврат"}</T>
                </h2>
            </div>
            <div className={"education-description"}>
                <h3>
                    <T en={"Lviv Polytechnic National University"}>{"Національний університет «Львівська політехніка»"}</T>
                </h3>
                <p className={"muted"}>
                    <T en={"Pursuing a bachelor’s degree in Cybersecurity."}>{"Здобуваю ступінь бакалавра за спеціальністю «Кібербезпека»."}</T>
                    <br />
                    <T en={"Second year · Lviv, Ukraine"}>{"Другий курс · Львів, Україна"}</T>
                </p>
                <p className={"muted"}>
                    <T en={"Areas of study: computer networks, programming, databases and information security."}>{"Основні напрями підготовки: комп’ютерні мережі, програмування, бази даних і захист інформації."}</T>
                </p>
                <a className={"outline-button"} href={"https://lpnu.ua/"} target={"_blank"} rel={"noopener noreferrer"}>
                    <T en={"University website ↗"}>{"Сайт університету ↗"}</T>
                </a>
            </div>
        </section>
    );
}
