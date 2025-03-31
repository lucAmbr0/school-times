import styles from "./TextInput.module.css";

function TextInput({ type = "text", defValue = "" }) {
  const value = defValue;

  const element = (
    <input type={type} value={value} className={styles.inputElement} />
  );
  return element;
}

export default TextInput;
