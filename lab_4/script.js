"use strict";

// Мова зберігається локально; переклади не потребують інтернету.
let currentLanguage = "uk";
try {
    if (localStorage.getItem("resume-language") === "en") currentLanguage = "en";
} catch { /* Перемикання працює і без доступу до сховища. */ }

const messages = {
    noReviews: {uk: "Відгуків поки немає.", en: "No reviews yet."},
    reviewsError: {uk: "Не вдалося завантажити відгуки. Перевір інтернет і онови сторінку.", en: "Unable to load reviews. Check your connection and reload the page."},
    storageError: {uk: "Браузер не надав доступ до localStorage.", en: "The browser did not allow access to localStorage."},
    formSetup: {uk: "Спочатку встав адресу своєї форми Formspree у script.js.", en: "Add your Formspree form URL to script.js first."},
    lightTheme: {uk: "Увімкнути світлу тему", en: "Switch to light mode"},
    darkTheme: {uk: "Увімкнути темну тему", en: "Switch to dark mode"}
};
function t(key) { return messages[key][currentLanguage]; }

function updateThemeButton() {
    const button = document.getElementById("theme-toggle");
    const target = document.documentElement.dataset.theme === "light" ? "darkTheme" : "lightTheme";
    button.setAttribute("aria-label", t(target));
    button.title = t(target);
}

function setLanguage(language) {
    if (language !== "uk" && language !== "en") return;
    currentLanguage = language;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-uk][data-en]").forEach(element => {
        element.textContent = element.getAttribute(`data-${language}`);
    });
    document.querySelectorAll("[data-uk-label][data-en-label]").forEach(element => {
        element.setAttribute("aria-label", element.getAttribute(`data-${language}-label`));
    });
    document.querySelectorAll("[data-language]").forEach(button => {
        button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    document.title = language === "en"
        ? "Daniil Kishyk — Cybersecurity and computer networks"
        : "Даниїл Кішик — кібербезпека та комп’ютерні мережі";
    document.querySelector('meta[name="description"]').content = language === "en"
        ? "Daniil Kishyk — Cybersecurity student at Lviv Polytechnic National University. Networking, Python and SQL. Seeking an information security internship."
        : "Даниїл Кішик — студент кібербезпеки у Львівській політехніці. Комп’ютерні мережі, Python та SQL. Резюме кандидата на стажування з кібербезпеки.";
    try { localStorage.setItem("resume-language", language); } catch {}
    document.querySelectorAll("[data-message]").forEach(element => {
        element.textContent = t(element.dataset.message);
    });
    updateThemeButton();
    displayStorage();
}


// Після створення форми Formspree встав її адресу між лапками.
// Приклад формату: https://formspree.io/f/xxxxxxxx
const FORMSPREE_URL = "https://formspree.io/f/xwllwqjd";

// 60 000 мілісекунд = 1 хвилина.
const CONTACT_DELAY = 60_000;


/* ==================================================
   1. ІНФОРМАЦІЯ ПРО БРАУЗЕР І LOCALSTORAGE
   ================================================== */

// Збираємо відомості, які браузер надає сторінці.
const browserInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: [...navigator.languages],
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency ?? null,
    deviceMemory: navigator.deviceMemory ?? null,
    maxTouchPoints: navigator.maxTouchPoints
};

const storageOutput = document.getElementById("storage-data");

// Зберігаємо об’єкт як JSON-рядок.
try {
    localStorage.setItem(
        "browserInfo",
        JSON.stringify(browserInfo)
    );
} catch (error) {
    console.error("Не вдалося зберегти інформацію:", error);
}

// Відображаємо всі ключі localStorage цього сайту.
function displayStorage() {
    try {
        const storedData = Object.create(null);

        for (const key of Object.keys(localStorage)) {
            const value = localStorage.getItem(key);

            try {
                storedData[key] = JSON.parse(value);
            } catch {
                storedData[key] = value;
            }
        }

        storageOutput.textContent = JSON.stringify(
            storedData,
            null,
            2
        );
    } catch {
        storageOutput.textContent =
            t("storageError");
    }
}

displayStorage();

// Оновлюємо дані при розкритті блоку у футері.
document.getElementById("system-info")
    .addEventListener("toggle", displayStorage);


/* ==================================================
   2. ЗАВАНТАЖЕННЯ ВІДГУКІВ ДЛЯ ВАРІАНТА 6
   ================================================== */

const reviewsList = document.getElementById("reviews-list");
const reviewsStatus = document.getElementById("reviews-status");

async function loadReviews() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/6/comments"
        );

        // fetch сам по собі не вважає HTTP 404 або 500 помилкою.
        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }

        const comments = await response.json();

        if (!Array.isArray(comments)) {
            throw new Error("Сервер повернув неправильні дані");
        }

        reviewsList.replaceChildren();

        // Проходимо масив у тому порядку, в якому він отриманий.
        for (const comment of comments) {
            const article = document.createElement("article");
            article.className = "review";

            const title = document.createElement("h3");
            title.textContent = comment.name;

            const email = document.createElement("p");
            email.className = "review-email";
            email.textContent = comment.email;

            const body = document.createElement("p");
            body.textContent = comment.body;

            article.append(title, email, body);
            reviewsList.append(article);
        }

        if (comments.length === 0) {
            reviewsStatus.dataset.message = "noReviews";
            reviewsStatus.textContent = t("noReviews");
        } else {
            delete reviewsStatus.dataset.message;
            reviewsStatus.textContent = "";
        }

    } catch (error) {
        reviewsStatus.dataset.message = "reviewsError";
        reviewsStatus.textContent = t("reviewsError");

        console.error("Помилка завантаження відгуків:", error);
    }
}

loadReviews();


/* ==================================================
   3. ФОРМА ЗВОРОТНОГО ЗВ’ЯЗКУ ЧЕРЕЗ ХВИЛИНУ
   ================================================== */

const dialog = document.getElementById("contact-dialog");
const closeDialogButton = document.getElementById("close-dialog");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// Запускаємо таймер один раз після завантаження сторінки.
setTimeout(() => {
    if (!dialog.open) {
        dialog.showModal();
    }
}, CONTACT_DELAY);

// Закриваємо вікно кнопкою.
// Escape також працює завдяки стандартному елементу dialog.
closeDialogButton.addEventListener("click", () => {
    dialog.close();
});

// Після налаштування Formspree задаємо адресу отримувача запиту.
if (FORMSPREE_URL) {
    contactForm.action = FORMSPREE_URL;
}

contactForm.addEventListener("submit", (event) => {
    if (!FORMSPREE_URL) {
        event.preventDefault();

        formStatus.dataset.message = "formSetup";
        formStatus.textContent = t("formSetup");

        return;
    }

    // Якщо адресу задано, браузер сам надішле форму методом POST.
    // Після цього відкриється сторінка результату Formspree.
});


/* ==================================================
   4. СВІТЛА ТА ТЕМНА ТЕМА
   ================================================== */

const themeButton = document.getElementById("theme-toggle");

// Після ручного перемикання автоматичний режим призупиняємо
// до наступного перезавантаження сторінки.
let manualThemeSelected = false;

function getThemeByTime() {
    const hour = new Date().getHours();

    // Від 07:00 включно до 21:00 — світла тема.
    return hour >= 7 && hour < 21
        ? "light"
        : "dark";
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    themeButton.setAttribute(
        "aria-pressed",
        String(theme === "dark")
    );
    updateThemeButton();
}

// Обираємо тему одразу після завантаження.
applyTheme(getThemeByTime());

// Перевіряємо час щохвилини, поки не було ручного вибору.
setInterval(() => {
    if (!manualThemeSelected) {
        applyTheme(getThemeByTime());
    }
}, 60_000);

// Ручне перемикання кнопкою.
themeButton.addEventListener("click", () => {
    manualThemeSelected = true;

    const currentTheme = document.documentElement.dataset.theme;

    const nextTheme = currentTheme === "dark"
        ? "light"
        : "dark";

    applyTheme(nextTheme);
});

// Перемикач UK / EN у футері.
document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
});
setLanguage(currentLanguage);
