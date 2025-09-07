import { useState } from "react";
import styles from "./Team.module.css";
import { ModalTeam } from "../ModalTeam/ModalTeam"; 
import { Balls } from "../../Components/Balls/Balls";

// Foto dos integrantes
import fotoAri from "../../assets/Pictures/Foto de Ari.png";
import fotoJoao from "../../assets/Pictures/Foto de Joao.png";
import fotoJoyce from "../../assets/Pictures/Foto de Joyce.png";
import fotoNico from "../../assets/Pictures/Foto de Nico.png";
import fotoGabi from "../../assets/Pictures/Foto de Gabi.png";

// Icones das tecnologias
import css from "../../assets/tech/css.png";
import js from "../../assets/tech/javascript.png";
import ts from "../../assets/tech/typescript.png";
import react from "../../assets/tech/reactjs.png";
import python from "../../assets/tech/python.png";
import mysql from "../../assets/tech/mysql.png";
import java from "../../assets/tech/java.png";
import flutter from "../../assets/tech/flutter.png";
import c_plus from "../../assets/tech/C++.png";
import groq from "../../assets/tech/groq.png";
import figma from "../../assets/tech/figma.png";
import threejs from "../../assets/tech/threejs.svg";

// Dados dos integrantes
const teamMembers = [
  {
    id: 1,
    name: "Ariane",
    photo: fotoAri,
    description: [
        "Muito prazer! Tenho 19 anos e sou apaixonada por projetos que fazem a diferença na vida das pessoas. Participar de iniciativas que promovem mais tempo, agilidade e qualidade no dia a dia é algo que me realiza profundamente.",

        "Gosto de estar onde posso ajudar, encontrar soluções, conectar ideias e, como costumo dizer, achar a “tampa certa” para cada problema. A tecnologia entrou na minha vida como uma ferramenta poderosa para isso: uma forma prática, rápida e acessível de transformar realidades e facilitar rotinas.",

        "Estou sempre em busca de novos desafios que me permitam crescer, contribuir e impactar positivamente o mundo ao meu redor. Acredito que, com empatia e inovação, podemos construir caminhos mais leves e eficientes para todos."
    ],
    skills: [
        { name: "Java", icon: java },
        { name: "Python", icon: python },
        { name: "MySQL", icon: mysql },
        { name: "React", icon: react },
        { name: "JavaScript", icon: js },
        { name: "TypeScript", icon: ts }
    ]
  },
  {
    id: 2,
    name: "João",
    photo: fotoJoao,
    description: [
      "Muito prazer! Tenho 19 anos e sou um programador apaixonado por desenvolvimento BackEnd e FrontEnd, gosto de conhecer tecnologias novas e me desafiar, afinal isso que faz um bom dev.",

      "Atualmente estou procurando me desenvolver em inteligência artificial. Meu foco é criação de soluções de todos os tipos para auxiliar você e seu negócio, deixando um sistema fluido, bonito e automatizado.",

      "Acredito que a tecnologia deve ser acessível e impactar positivamente a vida das pessoas, por isso busco unir criatividade, boas práticas e inovação em cada projeto. Estou sempre em busca de novos aprendizados e desafios que me permitam crescer como profissional e entregar soluções cada vez mais completas e eficazes."
    ],
    skills: [
        { name: "Python", icon: python },
        { name: "Java", icon: java },
        { name: "Groq", icon: groq },
        { name: "React", icon: react },
        { name: "JavaScript", icon: js },
        { name: "CSS", icon: css }
    ]
  },
  {
    id: 3,
    name: "Joyce",
    photo: fotoJoyce,
    description: [
      "Muito prazer! Tenho 19 anos e sou apaixonada por tecnologia e inovação. Meu foco é desenvolver interfaces intuitivas e criar infraestruturas sólidas, sempre aplicando as melhores práticas de programação e acompanhando as tendências do mercado.",

      "Sou movida pela curiosidade e pelo desejo constante de aprendizado, buscando aprimorar minhas habilidades técnicas e interpessoais para evoluir como profissional. Além do interesse em programação, valorizo muito a colaboração em equipe, a resolução de problemas, a entrega de soluções de qualidade e que gerem impactos positivos.",
      
      "Acredito que a tecnologia vai além do código: é uma ferramenta poderosa para impactar positivamente a vida das pessoas, otimizar processos e abrir novos caminhos para a inovação. Minha meta é evoluir a cada desafio, sempre mantendo o compromisso com a qualidade, a colaboração e o aprendizado contínuo."
    ],
    skills: [
        { name: "Python", icon: python },
        { name: "Java", icon: java },
        { name: "React", icon: react },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: js },
        { name: "Figma", icon: figma }
      ]
  },
  {
    id: 4,
    name: "Nicolas",
    photo: fotoNico,
    description: [
        "Muito prazer! Tenho 19 anos e sou apaixonado por programação Front-End. Desde que descobri o mundo do desenvolvimento web, fiquei encantado com a possibilidade de transformar ideias em experiências visuais que impactam e facilitam a vida das pessoas.",

        "Meu foco é criar interfaces modernas, funcionais e intuitivas, unindo criatividade e atenção aos detalhes. Acredito que a tecnologia não é apenas código, mas também uma forma de contar histórias e proporcionar conexões.",
        
        "Estou sempre em busca de aprender novas ferramentas e tendências para evoluir como profissional e entregar projetos que unam performance e design de qualidade."
    ],
    skills: [
        { name: "React", icon: react },
        { name: "CSS", icon: css },
        { name: "TypeScript", icon: ts },
        { name: "Threejs", icon: threejs },
        { name: "Python", icon: python },
        { name: "Java", icon: java }
    ]
  },
  {
    id: 5,
    name: "Gabriela",
    photo: fotoGabi,
    description: [
        "Muito prazer! Tenho 20 anos e sou apaixonada por tecnologia. Desde criança, sempre fui movida pela curiosidade e pelo desejo de criar soluções que tornassem a vida das pessoas mais fácil e significativa. Quando descobri a programação, encontrei nela uma forma poderosa de transformar ideias em impacto real — e desde então, venho explorando esse universo com entusiasmo e dedicação.",

        "Acredito que a tecnologia é uma ferramenta transformadora, e meu propósito é usá-la para gerar mudanças positivas por onde eu passar. Sou uma pessoa inquieta no melhor sentido: estou sempre buscando aprender, evoluir e contribuir. Mais do que ser reconhecida profissionalmente, quero construir uma trajetória pautada pela ética, empatia e excelência.",

        "Meu sonho é me tornar uma referência na área, não apenas pelo que faço, mas pela forma como faço — com responsabilidade, paixão e respeito pelas pessoas."
    ],
    skills: [
        { name: "Java", icon: java },
        { name: "Python", icon: python },
        { name: "C++", icon: c_plus },
        { name: "Flutter", icon: flutter },
        { name: "React", icon: react },
        { name: "MySQL", icon: mysql }
    ]
  }
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <section id="team" className={styles.containerTeam}>
        <h2>Nossa Equipe</h2>
        <div className={styles.imagesTeam}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.card}>
              <div
                className={styles.imageWrapper}
                onClick={() => setSelectedMember(member)}
              >
                <img src={member.photo} alt={`Foto de ${member.name}`} />
                <div className={styles.overlay}>
                  <span className={styles.name}>{member.name}</span>
                </div>
              </div>
              <p>Clique para saber mais!</p>
            </div>
          ))}
        </div>
      </section>

      {selectedMember && (
        <ModalTeam
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
        >
          <img src={selectedMember.photo} alt={`Foto de ${selectedMember.name}`} />
          <div className={styles.info}>
            <h3>Olá, sou {selectedMember.name}!</h3>
            <div>
              {selectedMember.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
            <h3>Habilidades</h3>
            <div>
              <Balls skills={selectedMember.skills} />
            </div>
          </div>
        </ModalTeam>
      )}
    </>
  );
}
