import styles from "./TextInput.module.css";
import {useState} from "react";

function TextInput({ type = "text", content = "N/A" }) {
    const [value, setValue] = useState(content);

    const handleTextChange = (event) => {
        setValue(event.target.value);
    }

  const element = (
    <input type={type} className={styles.inputElement} onChange={handleTextChange} />
  );
  return element;
}

export default TextInput;
