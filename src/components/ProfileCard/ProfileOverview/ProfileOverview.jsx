import styles from "./ProfileOverview.module.css";

function ProfileOverview({user}) {
  let imgSrc = null;
  const isPresent = true;
  const indicatorStyle = `${styles.studentStatusIndicator} ${
    isPresent ? styles.present : styles.absent
  }`;
  const element = (
    <div className={styles.userInfoContainer}>
      <div className={styles.userProfilePicContainer}>
        {imgSrc !== null ? (
          <img src={imgSrc} alt="Profile picture" />
        ) : (
          <span className="material-symbols-outlined">add_photo_alternate</span>
        )}
      </div>
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>
          {user.name ? user.name : "Guest"}
        </h2>
        <div className={styles.presenceIndicator}>
          <div className={indicatorStyle}></div>
          <h3 className={styles.studentStatusLabel}>
            {isPresent ? "At school" : "Absent today"}
          </h3>
        </div>
        <h4 className={styles.schoolName}>
          {user.schoolName ? user.schoolName : "Unknown School"}
        </h4>
      </div>
    </div>
  );

  return element;
}

export default ProfileOverview;
