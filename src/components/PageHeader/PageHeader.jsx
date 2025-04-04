import styles from "./PageHeader.module.css";

function PageHeader({handleBack}) {
  const element = (
    <div id={"pageHeader"} className={styles.header}>
      <button onClick={handleBack}>
        <span className="material-symbols-outlined">arrow_back</span>Back
      </button>
    </div>
  );

  return element;
}

export default PageHeader;
