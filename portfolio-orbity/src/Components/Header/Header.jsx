import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import iconOrbity from '../../assets/Icons/logo-pequena-semFundo.png';

export function Header() {
    const [isColored, setIsColored] = useState(false);

    useEffect(() => {
        const homeSection = document.querySelector('#home');

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Se a home NÃO estiver visível, aplica cor
                setIsColored(!entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (homeSection) observer.observe(homeSection);

        return () => observer.disconnect();
    }, []);

    return (
        <header className={`${styles.header} ${isColored ? styles.active : ''}`}>
            <div className={styles.logo}>
                <img src={iconOrbity} alt="Logo Orbity" />
                <h1>ORBITY</h1>
            </div>

            <nav className={styles.navbar}>
                <ul className={styles.links}>
                    <li><a href="#home">Ínicio</a></li>
                    <li><a href="#about">Sobre nós</a></li>
                    <li><a href="#missons">Missão, visão e valores</a></li>
                    <li><a href="#team">Equipe</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}
