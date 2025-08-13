import styles from './ModalTeam.module.css';
import ReactDOM from 'react-dom';

export function ModalTeam({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                
                <button className={styles.closeBtn} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}