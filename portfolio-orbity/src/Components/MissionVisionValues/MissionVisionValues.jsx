import styles from './MissionVisionValues.module.css';
import { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const items = [
  {
    title: 'Missão',
    content: 'Transformar negócios por meio da tecnologia, oferecendo soluções inovadoras, personalizadas e de alta qualidade que geram impacto real. Nossa missão é simplificar o complexo, conectar pessoas e acelerar o crescimento de empresas com ferramentas digitais que fazem sentido.',
    icon: '🎯',
  },
  {
    title: 'Visão',
    content: 'Ser uma startup referência em tecnologia no Brasil até 2030, reconhecida pela excelência em nossos produtos, pela confiança que construímos com nossos parceiros e pela capacidade de antecipar o futuro com soluções criativas e relevantes.',
    icon: '👁️',
  },
  {
    title: 'Valores',
    content: 'Nossas decisões são pautadas pela honestidade e transparência. Nossas soluções se baseiam na criatividade, inovação, na visão dos nossos clientes e na qualidade do produto final.',
    icon: '💎',
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
        delay: index * 300, // anima um de cada vez
        reset: false,
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Missão, visão e valores</h2>
      <div className={styles.timeline}>
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className={styles.content}>
              <h3>{item.icon} {item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
