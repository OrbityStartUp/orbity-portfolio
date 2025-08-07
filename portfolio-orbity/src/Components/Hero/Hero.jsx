import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>Welcome to Orbity</h1>
                <p>Your journey to the stars begins here.</p>
            </div>
        </section>
    );
}