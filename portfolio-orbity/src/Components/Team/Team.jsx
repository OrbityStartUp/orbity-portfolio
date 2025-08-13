import { useState } from "react";
import styles from "./Team.module.css";
import { ModalTeam } from "../ModalTeam/ModalTeam"; // caminho do seu modal
import fotoNico from "../../assets/Icons/Foto de Nico.jpg";
import { Balls } from "../../Components/Balls/Balls";

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
                <div className={styles.info}>
                    <h2>Olá, sou o Nicolas Duarte Silva!</h2>
                    <div>
                        <p>
                            Muito prazer! Tenho 19 anos e sou apaixonado por programação Front-End. Desde que descobri o mundo do desenvolvimento web, fiquei encantado com a possibilidade de transformar ideias em experiências visuais que impactam e facilitam a vida das pessoas.
                        </p>
                        <p>
                            Meu foco é criar interfaces modernas, funcionais e intuitivas, unindo criatividade e atenção aos detalhes. Acredito que a tecnologia não é apenas código, mas também uma forma de contar histórias e proporcionar conexões.
                        </p>
                        <p>
                            Estou sempre em busca de aprender novas ferramentas e tendências para evoluir como profissional e entregar projetos que unam performance e design de qualidade. 
                        </p>
                    </div>
                    <h2>Habilidades</h2>
                    <div>
                        <Balls/>
                    </div>
                </div>
            </ModalTeam>
        </>
    );
}
