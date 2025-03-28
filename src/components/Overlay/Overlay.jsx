import { useEffect, useRef } from "react";
import styles from "./Overlay.module.css";

function Overlay({ event, blur = 10, color = "rbga(0,0,0,0.7)", zIndex = 0 }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.style.backgroundColor = color;
      overlayRef.current.style.backdropFilter = `blur(${blur})`;
      overlayRef.current.style.zIndex = zIndex;
    }
  }, [color, blur]);

  return (
    <div ref={overlayRef} onClick={event} className={styles.container}></div>
  );
}

export default Overlay;
