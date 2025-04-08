import styles from "./Snackbar.module.css";
import Button from "../Button/Button";
import { useEffect } from "react";

function Snackbar({ text, duration = 5000, onClose = () => {} }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={styles.container}>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default Snackbar;