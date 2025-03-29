import styles from "./Settings.module.css";

function Settings({onBack}) {
  const element = (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <button onClick={onBack}>
            <span className="material-symbols-outlined">arrow_back</span>Back
          </button>
        </div>
      </div>
    </>
  );

  return element;
}

export default Settings;
