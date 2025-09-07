import { useState, useEffect } from 'react';
import styles from './ModalTeam.module.css';
import ReactDOM from 'react-dom';

export function ModalTeam({ isOpen, onClose, children }) {
    const [visible, setVisible] = useState(isOpen);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            setClosing(false);
        } else if (visible) {
            setClosing(true);
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 400); // tempo da animação de saída
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!visible) return null;

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
        onClose(); // dispara o fechamento externo
        }, 400);
    };

    return ReactDOM.createPortal(
        <div className={`${styles.backdrop} ${closing ? styles.closing : ''}`} onClick={handleClose} >
            <div className={`${styles.modalContent} ${closing ? styles.closing : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={handleClose}>
                &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}
