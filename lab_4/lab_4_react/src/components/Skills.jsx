import { T } from '../LanguageContext.jsx';

export default function Skills() {
    return (
        <section id={"skills"} className={"section"} aria-labelledby={"skills-title"}>
            <p className={"section-index"}>
                <T en={"02 / Skills"}>{"02 / Навички"}</T>
            </p>
            <h2 id={"skills-title"}>
                <T en={"Technologies and tools"}>{"Технології та інструменти"}</T>
            </h2>
            <div className={"skills-grid"}>
                <article className={"skill"}>
                    <span className={"muted"}>
                        {"01"}
                    </span>
                    <h3>
                        {"Python"}
                    </h3>
                    <p>
                        <T en={"OOP, collections, files and JSON, exception handling and logging. FastAPI and Swagger UI."}>{"ООП, колекції, файли та JSON, обробка винятків, журналювання. FastAPI та Swagger UI."}</T>
                    </p>
                </article>
                <article className={"skill"}>
                    <span className={"muted"}>
                        {"02"}
                    </span>
                    <h3>
                        {"SQL"}
                    </h3>
                    <p>
                        <T en={"MySQL, SQLite and MySQL Workbench. Tables, relationships, integrity constraints and queries."}>{"MySQL, SQLite, MySQL Workbench. Таблиці, зв’язки, обмеження цілісності та запити."}</T>
                    </p>
                </article>
                <article className={"skill"}>
                    <span className={"muted"}>
                        {"03"}
                    </span>
                    <h3>
                        <T en={"Networking"}>{"Мережі"}</T>
                    </h3>
                    <p>
                        <T en={"IPv4, subnetting, static routing, DHCP and DNS. Cisco Packet Tracer, ping and tracert."}>{"IPv4, підмережі, статична маршрутизація, DHCP і DNS. Cisco Packet Tracer, ping та tracert."}</T>
                    </p>
                </article>
                <article className={"skill"}>
                    <span className={"muted"}>
                        {"04"}
                    </span>
                    <h3>
                        <T en={"Web technologies"}>{"Вебтехнології"}</T>
                    </h3>
                    <p>
                        <T en={"HTML, CSS, JavaScript, responsive layouts and HTTP requests. Basic Git and GitHub workflows."}>{"HTML, CSS, JavaScript, адаптивна верстка та HTTP-запити. Базова робота з Git і GitHub."}</T>
                    </p>
                </article>
            </div>
        </section>
    );
}
