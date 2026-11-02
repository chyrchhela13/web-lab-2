import { useEffect, useState } from 'react';
import { T } from '../LanguageContext.jsx';

function getBrowserInfo() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        vendor: navigator.vendor,
        language: navigator.language,
        languages: [...navigator.languages],
        cookieEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        hardwareConcurrency: navigator.hardwareConcurrency ?? null,
        deviceMemory: navigator.deviceMemory ?? null,
        maxTouchPoints: navigator.maxTouchPoints,
    };
}

function readStorage() {
    const data = Object.create(null);
    for (const key of Object.keys(localStorage)) {
        const value = localStorage.getItem(key);
        try {
            data[key] = JSON.parse(value);
        } catch {
            data[key] = value;
        }
    }
    return data;
}

export default function SystemInfo() {
    const [snapshot, setSnapshot] = useState(null);
    const [error, setError] = useState(false);

    function refresh() {
        try {
            setSnapshot(readStorage());
            setError(false);
        } catch {
            setError(true);
        }
    }

    useEffect(() => {
        try {
            localStorage.setItem('browserInfo', JSON.stringify(getBrowserInfo()));
        } catch {
            setError(true);
        }
        refresh();
        window.addEventListener('storage', refresh);
        window.addEventListener('resume-settings-change', refresh);
        return () => {
            window.removeEventListener('storage', refresh);
            window.removeEventListener('resume-settings-change', refresh);
        };
    }, []);

    return (
        <details id="system-info" className="system-info" onToggle={event => {
            if (event.currentTarget.open) refresh();
        }}>
            <summary><T en="Browser information and localStorage">Інформація про браузер і localStorage</T></summary>
            <pre id="storage-data">
                {error
                    ? <T en="The browser did not allow access to localStorage.">Браузер не надав доступ до localStorage.</T>
                    : snapshot === null
                        ? <T en="Loading…">Завантаження…</T>
                        : JSON.stringify(snapshot, null, 2)}
            </pre>
        </details>
    );
}
