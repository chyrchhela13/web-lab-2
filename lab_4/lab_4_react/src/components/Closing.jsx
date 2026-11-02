import { T, useLanguage } from '../LanguageContext.jsx';

export default function Closing() {
    const { t } = useLanguage();
    return (
        <section className={"closing"} aria-label={t("Кар’єрні інтереси", "Career interests")}>
            <p>
                <T en={"Open to internship opportunities."}>{"Готовий обговорити можливості стажування."}</T>
                <br />
                <span className={"muted"}>
                    <T en={"My main interests are information security, networking and programming."}>{"Основні інтереси — інформаційна безпека, мережі та програмування."}</T>
                </span>
            </p>
        </section>
    );
}
