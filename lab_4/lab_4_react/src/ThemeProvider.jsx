import { createContext, useContext, useEffect, useRef, useState } from 'react';

const ThemeContext = createContext(null);

export function getThemeByTime(date = new Date()) {
    const hour = date.getHours();
    return hour >= 7 && hour < 21 ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getThemeByTime);
    const manualSelection = useRef(false);

    // Синхронізуємо стан React із CSS-змінними світлої та темної теми.
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!manualSelection.current) setTheme(getThemeByTime());
        }, 60_000);
        return () => clearInterval(interval);
    }, []);

    function toggleTheme() {
        manualSelection.current = true;
        setTheme(current => current === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
