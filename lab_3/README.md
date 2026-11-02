# Резюме — лабораторні роботи з вебпрограмування

Даниїл Кішик · КБ-209 · Варіант 6.

## HTML + CSS

У корені репозиторію залишені сторінка й основна таблиця стилів. Допоміжні файли зібрані в `assets/`.

```text
assets/
├── fonts/
│   ├── BasisGrotesquePro-Regular.ttf
│   └── BasisGrotesquePro-Medium.ttf
├── favicon.svg
├── fonts.css
└── language.js
lab_2_react/
index.html
styles.css
README.md
.gitignore
```

`assets/fonts.css` підключає локальні шрифти, `assets/language.js` відповідає за UK/EN та активний пункт меню.

Запуск із кореня репозиторію:

```bash
python3 -m http.server 8001 --bind 127.0.0.1
```

Відкрити http://127.0.0.1:8001/. Локальний сервер забезпечує завантаження шрифтів та інших ресурсів через HTTP.

## React + Tailwind CSS 4

Проєкт розміщено в `lab_2_react/`. Для Vite 8 потрібен сумісний Node.js, наприклад 22.12+ у гілці 22 або 24.

```bash
cd lab_2_react
npm install
npm run dev
```

Відкрити адресу Local, яку покаже термінал. Збірка:

```bash
npm run build
```

Обидві версії мають чорний мінімалістичний дизайн, локальний Basis Grotesque Pro Regular/Medium, перемикання UK/EN, закріплене меню, розкривні записи досвіду та адаптивний макет.
