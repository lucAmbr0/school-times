import styles from "./VerticalMenu.module.css"

function VerticalMenu() {
    const element = 
    <div className={styles.container}>
        <button onClick={() => window.location.reload()} className={styles.button}><span className="material-symbols-outlined">refresh</span>Reload</button>
        <button className={styles.button}><span className="material-symbols-outlined">settings</span>Settings</button>
        <button className={styles.button}><span className="material-symbols-outlined">info</span>About</button>
    </div>
    ;

    return element;
}

export default VerticalMenu;