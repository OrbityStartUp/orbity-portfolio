import styles from './MissionVisionValues.module.css';
import { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";

const items = [
  {
    title: 'Missão',
    content: 'Transformar negócios por meio da tecnologia, oferecendo soluções inovadoras, personalizadas e de alta qualidade que geram impacto real. Nossa missão é simplificar o complexo, conectar pessoas e acelerar o crescimento de empresas com ferramentas digitais que fazem sentido.',
    icon: <GoGoal className={styles.icon}/>,
    color: 'var(--color-orange)', // Orange
  },
  {
    title: 'Visão',
    content: 'Ser uma startup referência em tecnologia no Brasil até 2030, reconhecida pela excelência em nossos produtos, pela confiança que construímos com nossos parceiros e pela capacidade de antecipar o futuro com soluções criativas e relevantes.',
    icon: <FaEye className={styles.icon}/>,
    color: 'var(--color-pink)', 
  },
  {
    title: 'Valores',
    content: 'Nossas decisões são guiadas pela honestidade, transparência e respeito mútuo. Acreditamos que a confiança é construída com ações consistentes e comunicação clara. Cada projeto é pensado com empatia e visão estratégica, sempre considerando as necessidades e expectativas dos nossos clientes.',
    icon: <IoDiamondSharp className={styles.icon}/>,
    color: 'var(--color-purple)', 
  },
];

export function MissionVisionValues() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      ScrollReveal().reveal(card, {
        origin: 'left',
        distance: '50px',
        duration: 800,
        easing: 'ease-out',
        opacity: 0,
        delay: index * 300,
        reset: false,
      });
    });
  }, []);

  return (
    <section id='missons' className={styles.container}>
      <h2>Missão, visão e valores</h2>
      <div className={styles.timeline}>
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div 
              className={styles.content}
              style={{ borderBottomColor: item.color }}
            >
              <h3>
                <span 
                  className={styles.iconWrapper}
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </span>
                {item.title}
              </h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}