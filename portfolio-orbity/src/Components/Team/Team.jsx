import { useState } from "react";
import styles from "./Team.module.css";
import { ModalTeam } from "../ModalTeam/ModalTeam"; // caminho do seu modal
import fotoNico from "../../assets/Icons/Foto de Nico.jpg";

export function Team() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className={styles.containerTeam}>
                <div
                    className={styles.imageWrapper}
                    onClick={() => setIsModalOpen(true)}
                >
                    <img src={fotoNico} alt="Foto do integrante Nicolas" />
                    <div className={styles.overlay}>
                        <span className={styles.name}>Nicolas</span>
                    </div>
                </div>
                <p>Clique para saber mais!</p>
            </section>

            <ModalTeam isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <img src={fotoNico} alt="Foto do integrante Nicolas" />
                <div>
                    <h2>Nicolas</h2>
                    <p>
                        Aqui você pode colocar as informações específicas sobre o
                        integrante, bio, função na equipe, etc.
                    </p>
                </div>
            </ModalTeam>
        </>
    );
}
