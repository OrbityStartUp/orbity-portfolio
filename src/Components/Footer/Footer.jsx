import styles from "./Footer.module.css";
import iconOrbity from '../../assets/Icons/logo-pequena-semFundo.png';

import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer>
            <div className={styles.footerIcon}>
                <img src={iconOrbity} alt="Logo do Orbity" />
                <h3>ORBITY</h3>
            </div>

            <div className={styles.direitosAutorais}>
                <p>&copy; 2025 ORBITY</p>
            </div>

            <div className={styles.redesSociais}>
                <div className={styles.whatsapp}>
                    <a href="#">
                        <FaWhatsapp size={32}/>
                    </a>
                </div>

                <div className={styles.instagram}>
                    <a href="#">
                        <FaInstagram size={32}/>
                    </a>
                </div>

                <div className={styles.github}>
                    <a href="https://github.com/OrbityStartUp" target="_blank">
                        <FaGithub size={32}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}