import { useEffect, useRef, useState } from 'react';
import { T } from '../LanguageContext.jsx';
import { CONTACT_DELAY, FORMSPREE_URL } from '../config.js';

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [missingEndpoint, setMissingEndpoint] = useState(false);
    const dialogRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), CONTACT_DELAY);
        return () => clearTimeout(timer);
    }, []);

    // Стан isOpen керує стандартним модальним елементом dialog.
    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen && !dialog.open) dialog.showModal();
        if (!isOpen && dialog.open) dialog.close();
    }, [isOpen]);

    return (
        <dialog ref={dialogRef} id="contact-dialog" className="contact-dialog" aria-labelledby="contact-title"
            onCancel={() => setIsOpen(false)} onClose={() => setIsOpen(false)}>
            <div className="dialog-heading">
                <h2 id="contact-title"><T en="Get in touch">Зв’язатися зі мною</T></h2>
                <button id="close-dialog" type="button" onClick={() => setIsOpen(false)}><T en="Close">Закрити</T></button>
            </div>
            <form id="contact-form" action={FORMSPREE_URL} method="POST" onSubmit={event => {
                if (!FORMSPREE_URL) {
                    event.preventDefault();
                    setMissingEndpoint(true);
                }
            }}>
                <label><span><T en="Name">Ім’я</T></span><input type="text" name="name" autoComplete="name" required /></label>
                <label><span><T en="Email">Електронна пошта</T></span><input type="email" name="email" autoComplete="email" required /></label>
                <label><span><T en="Phone number">Номер телефону</T></span><input type="tel" name="phone" autoComplete="tel" required /></label>
                <label><span><T en="Message">Повідомлення</T></span><textarea name="message" rows="4" required /></label>
                <p id="form-status" className="muted" role="status">
                    {missingEndpoint && <T en="Add your Formspree form URL to src/config.js first.">Спочатку вкажи адресу своєї форми Formspree у src/config.js.</T>}
                </p>
                <button className="submit-button" type="submit"><T en="Send message">Надіслати повідомлення</T></button>
            </form>
        </dialog>
    );
}
