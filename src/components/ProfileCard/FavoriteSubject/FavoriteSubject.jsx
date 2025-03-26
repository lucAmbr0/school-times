import styles from "./FavoriteSubject.module.css";

function FavoriteSubject({favSubject}) {
  const element = (
    <div className={styles.favSubjContainer}>
      <h4 className={styles.favSubjLabel}>Favorite subject:</h4>
      <h3 className={styles.favSubj}>
        {favSubject ? favSubject : "Unknown"}
      </h3>
    </div>
  );
  return element;
}

export default FavoriteSubject;
