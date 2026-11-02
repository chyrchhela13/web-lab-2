import { T } from '../LanguageContext.jsx';

export default function Experience() {
    return (
        <section id={"experience"} className={"section"} aria-labelledby={"experience-title"}>
            <p className={"section-index"}>
                <T en={"01 / Competencies"}>{"01 / Компетенції"}</T>
            </p>
            <h2 id={"experience-title"}>
                <T en={"Core competencies"}>{"Ключові компетенції"}</T>
            </h2>
            <p className={"section-description"}>
                <T en={"My background covers computer networks, programming and working with data."}>{"Моя підготовка охоплює комп’ютерні мережі, програмування та роботу з даними."}</T>
            </p>
            <div className={"experience-list"}>
                <details className={"job"} open>
                    <summary>
                        <span className={"job-period"}>
                            <T en={"Network infrastructure"}>{"Мережева інфраструктура"}</T>
                        </span>
                        <span className={"job-heading"}>
                            <span className={"company"}>
                                <T en={"Network configuration and diagnostics"}>{"Налаштування та діагностика мереж"}</T>
                            </span>
                            <span className={"position"}>
                                <T en={"IP addressing · Routing · DHCP"}>{"IP-адресація · Маршрутизація · DHCP"}</T>
                            </span>
                        </span>
                    </summary>
                    <ul>
                        <li>
                            <T en={"I understand how devices communicate on local networks and the roles of routers and switches."}>{"Розумію принципи взаємодії пристроїв у локальних мережах і призначення маршрутизаторів та комутаторів."}</T>
                        </li>
                        <li>
                            <T en={"I calculate IPv4 subnets and configure addressing, static routes and automatic network configuration through DHCP."}>{"Розраховую IPv4-підмережі, налаштовую адресацію, статичні маршрути та автоматичне отримання мережевих параметрів через DHCP."}</T>
                        </li>
                        <li>
                            <T en={"I check host reachability, trace packet routes and inspect network settings when troubleshooting connectivity."}>{"Перевіряю доступність вузлів, аналізую маршрут передавання пакетів і перевіряю мережеві налаштування під час пошуку несправностей."}</T>
                        </li>
                    </ul>
                </details>
                <details className={"job"} open>
                    <summary>
                        <span className={"job-period"}>
                            <T en={"Programming"}>{"Програмування"}</T>
                        </span>
                        <span className={"job-heading"}>
                            <span className={"company"}>
                                <T en={"Data processing and API development"}>{"Оброблення даних і розроблення API"}</T>
                            </span>
                            <span className={"position"}>
                                <T en={"Python · OOP · HTTP APIs"}>{"Python · ООП · HTTP API"}</T>
                            </span>
                        </span>
                    </summary>
                    <ul>
                        <li>
                            <T en={"I write Python programs using functions, classes, collections and exception handling."}>{"Пишу програми на Python із використанням функцій, класів, колекцій та обробки винятків."}</T>
                        </li>
                        <li>
                            <T en={"I read, validate and transform text and JSON data, and calculate summary statistics."}>{"Працюю з текстовими файлами та JSON: зчитую, перевіряю, перетворюю дані й обчислюю зведені показники."}</T>
                        </li>
                        <li>
                            <T en={"I build HTTP APIs with FastAPI, validate input and handle common request errors."}>{"Створюю HTTP API на FastAPI, перевіряю вхідні дані та обробляю типові помилки запитів."}</T>
                        </li>
                    </ul>
                </details>
                <details className={"job"} open>
                    <summary>
                        <span className={"job-period"}>
                            <T en={"Databases"}>{"Бази даних"}</T>
                        </span>
                        <span className={"job-heading"}>
                            <span className={"company"}>
                                <T en={"Data structure and integrity"}>{"Структурування та цілісність даних"}</T>
                            </span>
                            <span className={"position"}>
                                {"SQL · MySQL · SQLite"}
                            </span>
                        </span>
                    </summary>
                    <ul>
                        <li>
                            <T en={"I create tables, choose data types and define primary and foreign keys."}>{"Створюю таблиці, добираю типи даних, визначаю первинні та зовнішні ключі."}</T>
                        </li>
                        <li>
                            <T en={"I use integrity constraints to enforce required and unique values and relationships between tables."}>{"Використовую обмеження цілісності для обов’язкових і унікальних значень та зв’язків між таблицями."}</T>
                        </li>
                        <li>
                            <T en={"I write queries to insert, retrieve, filter and sort data."}>{"Пишу запити для додавання, вибірки, фільтрації та сортування даних."}</T>
                        </li>
                    </ul>
                </details>
            </div>
        </section>
    );
}
