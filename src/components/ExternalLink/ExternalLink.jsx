import styles from "./ExternalLink.module.css";
import { useData } from "../../scripts/useData";

function ExternalLink({
  name = "N/A",
  iconName = "arrow_outward",
  displayUrl = url,
  url = displayUrl,
  onClick = () => {},
}) {
  const [data, setData] = useData();

  const handleLinkClick = () => {
    window.open(url, "_blank");
  };

  const element = (
    <>
      <button className={styles.container} onClick={handleLinkClick}>
        <div className={styles.nameContainer}>
          <span className="material-symbols-outlined">{iconName}</span>
          <h3 className={styles.linkName}>{name}</h3>
        </div>
        <h4 className={styles.displayUrl}>{displayUrl}</h4>
      </button>
    </>
  );

  return element;
}

export default ExternalLink;
