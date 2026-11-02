import { useEffect, useState } from 'react';
import { T } from '../LanguageContext.jsx';
import { REVIEWS_URL } from '../config.js';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const controller = new AbortController();
        let active = true;

        async function loadReviews() {
            try {
                const response = await fetch(REVIEWS_URL, { signal: controller.signal });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                if (!Array.isArray(data)) throw new Error('Invalid reviews response');
                if (active) {
                    setReviews(data);
                    setStatus('success');
                }
            } catch (error) {
                if (active && error.name !== 'AbortError') setStatus('error');
            }
        }

        loadReviews();
        // При демонтуванні скасовуємо запит та ігноруємо його пізній результат.
        return () => {
            active = false;
            controller.abort();
        };
    }, []);

    return (
        <section id="reviews" className="section" aria-labelledby="reviews-title">
            <p className="section-index"><T en="04 / Reviews">04 / Відгуки</T></p>
            <h2 id="reviews-title"><T en="Employer reviews">Відгуки роботодавців</T></h2>
            <p id="reviews-status" className="muted" role="status">
                {status === 'loading' && <T en="Loading reviews…">Завантаження відгуків…</T>}
                {status === 'error' && <T en="Unable to load reviews. Check your connection and reload the page.">Не вдалося завантажити відгуки. Перевір інтернет і онови сторінку.</T>}
                {status === 'success' && reviews.length === 0 && <T en="No reviews yet.">Відгуків поки немає.</T>}
            </p>
            <div id="reviews-list" className="reviews-grid">
                {reviews.map(review => (
                    <article className="review" key={review.id}>
                        <h3>{review.name}</h3>
                        <p className="review-email">{review.email}</p>
                        <p>{review.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
