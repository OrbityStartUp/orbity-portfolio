import styles from './Header.module.css';

// Icosns import
import iconOrbity from '../../assets/Icons/logo-pequena-semFundo.png';

export function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src={iconOrbity} alt="Logo Orbity" />
                <h1>ORBITY</h1>
            </div>

            <nav className={styles.navbar}>
                <ul className={styles.links}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre nós</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#team">Equipe</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}