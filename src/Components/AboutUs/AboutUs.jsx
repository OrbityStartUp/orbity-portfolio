import { useEffect, useRef } from "react";

import ScrollReveal from "scrollreveal";

import styles from "./AboutUs.module.css";

import iconeLampada from "../../assets/Icons/icone-lampada.png";
import iconeTrofeu from "../../assets/Icons/icone-trofeu.png";
import iconeMaos from "../../assets/Icons/icone-maos.png";
import iconeFoguete from "../../assets/Icons/icone-foguete.png";

export function AboutUs() {
  const cardsRef = useRef([]);

  useEffect(() => {
    ScrollReveal().reveal(cardsRef.current, {
      origin: "left",       // vem da esquerda
      distance: "50px",     // deslocamento
      duration: 1000,        // tempo da animação
      easing: "ease-out",
      opacity: 0,
      interval: 400,        // atraso entre cada card
      reset: false,         // false = anima só uma vez
    });
  }, []);

  return (
    <section id="about" className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2>Sobre nós</h2>
          <div className={styles.textAboutUs}>
            <p>
              Somos uma startup de jovens apaixonados por tecnologia e
              acreditamos que, por meio dela, podemos transformar o dia a dia
              das pessoas. Temos o sonho de nos tornar uma empresa referência
              não apenas em tecnologia, mas também em qualidade e excelência.
            </p>
            <p>
              Assim como zelamos pela nossa empresa, também cuidamos com
              dedicação das empresas que confiam em nosso trabalho. Buscamos
              sempre entregar o melhor, cumprindo nosso propósito: fazer a
              diferença por onde passarmos através do desenvolvimento.
            </p>
          </div>
        </div>

        <div className={styles.cards}>
          {[
            { img: iconeLampada, text: "Inovação e tecnologia" },
            { img: iconeTrofeu, text: "Qualidade e excelência" },
            { img: iconeMaos, text: "Compromisso com o cliente" },
            { img: iconeFoguete, text: "Propósito transformador" },
          ].map((item, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img src={item.img} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
