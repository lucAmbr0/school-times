import styles from "./ThemeSelectorBox.module.css";
import useThemeColor from "../../scripts/useThemeColor";
import Overlay from "../Overlay/Overlay";
import useVibration from "../../scripts/useVibration";
import { useData } from "../../scripts/useData";
import { useState } from "react";
import { palettes } from "../../scripts/useThemeColor";

function ThemeSelectorBox({ backAction }) {
  const vibrate = useVibration();
  const [data, setData] = useData();
  const [palette, setPalette] = useState(data.settings.palette || "Polo Blue");
  const [darkMode] = useState(data.settings.darkMode || "system");

  const handleThemeChange = (newPalette) => {
    setPalette(newPalette);
    setData({ ...data, settings: { ...data.settings, palette: newPalette } });
    handleCloseThemeSelector();
  };

  const handleCloseThemeSelector = () => {
    vibrate(5);
    document.getElementById("themeSelector").classList.add(styles.exitAnimation);
    setTimeout(() => {
      backAction();
    }, 180);
  };

  useThemeColor(palette);

  const generatePaletteElements = () => {
    const isDarkMode =
      darkMode == "dark" ||
      (darkMode == "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    let i = 0;
    return Object.entries(palettes)
      .map(([themeName, themeValues]) => {
        const theme = isDarkMode ? themeValues.dark : themeValues.light;

        if (!theme) return null;

        const colors = Object.entries(theme)
          .filter(([key]) => !key.includes("-rgb"))
          .slice(0, 10)
          .map(([_, value]) => value);
        i++;
        return (
          <button
            key={i}
            onClick={() => handleThemeChange(themeName)}
            className={styles.paletteBtn}
            style={{ borderColor: colors[2], backgroundColor: colors[1] }}
          >
            <h3 className={styles.themeName} style={{ color: colors[9] }}>
              {themeName}
            </h3>
            <div className={styles.sampleContainer}>
              {colors.slice(2).map((color, index) => (
                <div
                  key={index}
                  className={styles.sample}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </button>
        );
      })
      .filter(Boolean);
  };

  const paletteElements = generatePaletteElements();

  const element = (
    <>
      <Overlay
        event={() => handleCloseThemeSelector()}
        blur={"10px"}
        color="rgba(0,0,0, 0.2)"
        zIndex={110}
      />
      <div id="themeSelector" className={styles.container}>
        <h2 className={styles.boxLabel}>Choose your palette</h2>
        <div className={styles.palettesContainer}>{paletteElements}</div>
      </div>
    </>
  );

  return element;
}

export default ThemeSelectorBox;
