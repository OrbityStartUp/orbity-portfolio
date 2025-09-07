import styles from './Contact.module.css';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

export function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_9ptchqa",
        "template_wtime6k",
        form.current,
        "YehhX61UNz8SUKQt0"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso! 🚀");
          form.current.reset(); // limpa o formulário
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          alert("Erro ao enviar. Tente novamente.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Entre em Contato</h2>
        <div className={styles.divider}></div>
        <div className={styles.contactContent}>
          {/* Texto contato */}
          <div className={styles.introText}>
            <h3 className={styles.introTitle}>NÃO SEJA TÍMIDO!</h3>
            <p className={styles.introParagraph}>
              Fique à vontade para entrar em contato conosco. Estamos sempre abertos para discutir 
              novos projetos, ideias criativas ou oportunidades de fazer parte de suas visões.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.iconWrapper}>
                <AiOutlineMail className={styles.icon}/>
              </div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Email</p>
                <p className={styles.contactValue}>orbity.startup@gmail.com</p>
              </div>
            </div>
          </div>
          
          {/* Formulário */}
          <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Seu nome:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Como devemos te chamar?" 
                required 
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Seu email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="seu@email.com" 
                required 
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Sua mensagem:</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Conte-nos sobre seu projeto ou ideia..." 
                required 
                rows="5"
                className={styles.textarea}
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`${styles.button} ${isSubmitting ? styles.buttonSubmitting : ""}`}
            >
              {isSubmitting ? (
                <div className={styles.buttonContent}>
                  <div className={styles.loading}></div>
                  <span>Enviando...</span>
                </div>
              ) : (
                <div className={styles.buttonContent}>
                  <span>Enviar Mensagem</span>
                  <FiSend className={styles.icon}/>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
