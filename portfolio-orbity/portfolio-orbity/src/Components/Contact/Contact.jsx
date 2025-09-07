import styles from './Contact.module.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
          alert("Erro ao enviar. Tente novamente.");
        }
      );
  };

  return (
    <form id="contact" ref={form} onSubmit={sendEmail} className={styles.containerEmail}>
        <div className={styles.textArea}>
            <h3>NÃO SEJA TÍMIDO!</h3>
            <p>Fique a vontade para entrar em contato conosco. Estamos sempre abertos para discutir novos projetos, ideias criativas ou oportunidades de fazer partes de suas visões.</p>
        </div>

        <div className={styles.formGroup}>
            <input type="text" name="name" placeholder="Seu nome" required className="p-2 border rounded-md" />

            <input type="email" name="email" placeholder="Seu email" required className="p-2 border rounded-md" />
            
            <textarea name="message" placeholder="Digite sua mensagem" required className="p-2 border rounded-md h-32" />

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition" >
                Enviar
            </button>
        </div>
    </form>
  );
}

// service_9ptchqa
// template_wtime6k
// YehhX61UNz8SUKQt0