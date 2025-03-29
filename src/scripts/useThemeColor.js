import { useEffect } from "react";
import { useData } from "./useData";

const palettes = {
  Cornflower: {
    light: {
      "--palette-50": "#F2F9FD",
      "--palette-100": "#E4F1FA",
      "--palette-200": "#c4e2f3",
      "--palette-300": "#9DD1EC",
      "--palette-400": "#54AFDC",
      "--palette-500": "#2E96C9",
      "--palette-600": "#1F78AA",
      "--palette-700": "#1A608A",
      "--palette-800": "#195173",
      "--palette-900": "#1A4560",
      "--palette-950": "#122C3F",
      "--palette-50-rgb": "242, 249, 253",
      "--palette-100-rgb": "228, 241, 250",
      "--palette-200-rgb": "196, 226, 243",
      "--palette-300-rgb": "157, 209, 236",
      "--palette-400-rgb": "84, 175, 220",
      "--palette-500-rgb": "46, 150, 201",
      "--palette-600-rgb": "31, 120, 170",
      "--palette-700-rgb": "26, 96, 138",
      "--palette-800-rgb": "25, 81, 115",
      "--palette-900-rgb": "26, 69, 96",
      "--palette-950-rgb": "18, 44, 63"
    },
    dark: {
      "--palette-50": "#122C3F",
      "--palette-100": "#1A4560",
      "--palette-200": "#195173",
      "--palette-300": "#1A608A",
      "--palette-400": "#1F78AA",
      "--palette-500": "#2E96C9",
      "--palette-600": "#54AFDC",
      "--palette-700": "#9DD1EC",
      "--palette-800": "#C4E2F3",
      "--palette-900": "#E4F1FA",
      "--palette-950": "#F2F9FD",
      "--palette-50-rgb": "18, 44, 63",
      "--palette-100-rgb": "26, 69, 96",
      "--palette-200-rgb": "25, 81, 115",
      "--palette-300-rgb": "26, 96, 138",
      "--palette-400-rgb": "31, 120, 170",
      "--palette-500-rgb": "46, 150, 201",
      "--palette-600-rgb": "84, 175, 220",
      "--palette-700-rgb": "157, 209, 236",
      "--palette-800-rgb": "196, 226, 243",
      "--palette-900-rgb": "228, 241, 250",
      "--palette-950-rgb": "242, 249, 253",
    }
  },
  // Add more palettes here...
};

const useThemeColor = (mode = "system") => {
  const [data] = useData();
  useEffect(() => {
    const updateThemeColor = () => {
      mode = data.settings.darkMode
      let themeMode = mode;

      // If the mode is 'system', use the system preference
      if (mode === "system") {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        themeMode = isDarkMode ? "dark" : "light";
      }

      const themeColor = themeMode === "dark" ? "#195173" : "#C4E2F3";

      // Update the <meta name="theme-color">
      let themeMetaTag = document.querySelector('meta[name="theme-color"]');
      if (!themeMetaTag) {
        themeMetaTag = document.createElement("meta");
        themeMetaTag.setAttribute("name", "theme-color");
        document.head.appendChild(themeMetaTag);
      }
      themeMetaTag.setAttribute("content", themeColor);

      // Apply the palette
      const currentPalette = data.settings.palette || "Cornflower";
      const selectedPalette = palettes[currentPalette][themeMode];

      // Apply the selected palette to the document
      Object.entries(selectedPalette).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    };

    // Set initial theme color based on mode
    updateThemeColor();

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateThemeColor);

    return () => mediaQuery.removeEventListener("change", updateThemeColor);
  }, [mode]);  // Re-run the effect if the mode changes
};

export default useThemeColor;
