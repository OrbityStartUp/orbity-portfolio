import styles from './Team.module.css';

// Fotos importadas dos integrantes
import fotoNico from '../../assets/Icons/Foto de Nico.jpg';

export function Team() {
    return (
        <section className={styles.containerTeam}>
            <h2>Equipe desenvolvedora</h2>
            <div className={styles.imageWrapper}>
                <img src={fotoNico} alt="Foto do integrante Nicolas" />
                <div className={styles.overlay}>
                    <span className={styles.name}>Nicolas</span>
                </div>
            </div>
            <p>Clique para saber mais!</p>
        </section>
    )
}
