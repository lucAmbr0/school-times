import { useEffect } from "react";
import { useData } from "./useData";

export const palettes = {
  "Polo Blue": {
    light: {
      "--palette-50":  "hsl(200, 28%, 97%)",
      "--palette-100": "hsl(211, 44%, 89%)",
      "--palette-200": "hsl(211, 44%, 78%)",
      "--palette-300": "hsl(211, 43%, 64%)",
      "--palette-400": "hsl(214, 39%, 50%)",
      "--palette-500": "hsl(215, 44%, 40%)",
      "--palette-600": "hsl(216, 45%, 32%)",
      "--palette-700": "hsl(216, 43%, 26%)",
      "--palette-800": "hsl(217, 41%, 22%)",
      "--palette-900": "hsl(216, 38%, 19%)",
      "--palette-950": "hsl(200, 45%, 3%)",
      "--palette-50-rgb": "245, 248, 249",
      "--palette-100-rgb":"215, 227, 239",
      "--palette-200-rgb":"174, 198, 224",
      "--palette-300-rgb":"124, 162, 203",
      "--palette-400-rgb":"78, 121, 177",
      "--palette-500-rgb":"57, 95, 147",
      "--palette-600-rgb":"45, 74, 118",
      "--palette-700-rgb":"38, 61, 95",
      "--palette-800-rgb":"33, 51, 79",
      "--palette-900-rgb":"30, 45, 67",
      "--palette-950-rgb": "4, 9, 11"
    },
    dark: {
      "--palette-50":  "hsl(200, 45%, 3%)",
      "--palette-100": "hsl(216, 38%, 9%)",
      "--palette-200": "hsl(217, 41%, 12%)",
      "--palette-300": "hsl(216, 43%, 16%)",
      "--palette-400": "hsl(216, 45%, 22%)",
      "--palette-500": "hsl(215, 44%, 30%)",
      "--palette-600": "hsl(214, 39%, 40%)",
      "--palette-700": "hsl(211, 43%, 54%)",
      "--palette-800": "hsl(211, 44%, 68%)",
      "--palette-900": "hsl(211, 44%, 79%)",
      "--palette-950": "hsl(200, 28%, 87%)",
      "--palette-50-rgb":  "4, 9, 11",
      "--palette-100-rgb": "14, 21, 32",
      "--palette-200-rgb": "18, 28, 43",
      "--palette-300-rgb": "23, 37, 58",
      "--palette-400-rgb": "31, 51, 81",
      "--palette-500-rgb": "43, 71, 110",
      "--palette-600-rgb": "62, 97, 142",
      "--palette-700-rgb": "87, 136, 188",
      "--palette-800-rgb": "137, 172, 209",
      "--palette-900-rgb": "178, 201, 225",
      "--palette-950-rgb": "213, 225, 231"
    },
  },
  Pine: {
    light: {
      "--palette-50":  "hsl(120, 18%, 97%)",
      "--palette-100": "hsl(111, 24%, 89%)",
      "--palette-200": "hsl(111, 24%, 78%)",
      "--palette-300": "hsl(111, 23%, 64%)",
      "--palette-400": "hsl(114, 19%, 50%)",
      "--palette-500": "hsl(115, 24%, 40%)",
      "--palette-600": "hsl(116, 25%, 32%)",
      "--palette-700": "hsl(116, 23%, 26%)",
      "--palette-800": "hsl(117, 21%, 22%)",
      "--palette-900": "hsl(116, 18%, 19%)",
      "--palette-950": "hsl(120, 25%, 3%)",
      "--palette-50-rgb": "245, 248, 245",
      "--palette-100-rgb": "223, 234, 221",
      "--palette-200-rgb": "190, 213, 186",
      "--palette-300-rgb": "149, 185, 143",
      "--palette-400-rgb": "109, 153, 104",
      "--palette-500-rgb": "82, 126, 78",
      "--palette-600-rgb": "63, 101, 60",
      "--palette-700-rgb": "53, 82, 51",
      "--palette-800-rgb": "45, 67, 44",
      "--palette-900-rgb": "41, 57, 40",
      "--palette-950-rgb": "6, 10, 6",
    },
    dark: {
      "--palette-50":  "hsl(120, 25%, 3%)",
      "--palette-100": "hsl(120, 17%, 9%)",
      "--palette-200": "hsl(115, 21%, 12%)",
      "--palette-300": "hsl(114, 23%, 16%)",
      "--palette-400": "hsl(116, 25%, 22%)",
      "--palette-500": "hsl(115, 24%, 30%)",
      "--palette-600": "hsl(115, 19%, 40%)",
      "--palette-700": "hsl(111, 23%, 54%)",
      "--palette-800": "hsl(111, 24%, 68%)",
      "--palette-900": "hsl(113, 23%, 79%)",
      "--palette-950": "hsl(120, 18%, 87%)",
      "--palette-50-rgb": "216, 228, 216",
      "--palette-100-rgb": "192, 214, 189",
      "--palette-200-rgb": "160, 193, 154",
      "--palette-300-rgb": "119, 165, 111",
      "--palette-400-rgb": "86, 121, 83",
      "--palette-500-rgb": "61, 95, 58",
      "--palette-600-rgb": "44, 70, 42",
      "--palette-700-rgb": "33, 50, 31",
      "--palette-800-rgb": "25, 37, 24",
      "--palette-900-rgb": "19, 27, 19",
      "--palette-950-rgb": "6, 10, 6",
    }
  },
  // more palettes soon!
};

const useThemeColor = (mode = "system", palette = "Polo Blue") => {
  const [data] = useData();
  useEffect(() => {
    const updateThemeColor = () => {
      mode = data.settings.darkMode
      palette = data.settings.palette;
      if (!palettes.hasOwnProperty(palette)) {
        palette = "Polo Blue";
        data.settings.palette = "Polo Blue";
      }
      
      let themeMode = mode;

      // If the mode is 'system', use the system preference
      if (mode === "system") {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        themeMode = isDarkMode ? "dark" : "light";
      }

      // Apply the palette
      let currentPalette = data.settings.palette || "Polo Blue";
      if (!palettes.hasOwnProperty(currentPalette)) {
        currentPalette = "Polo Blue";
        data.settings.palette = "Polo Blue";
      }
      const selectedPalette = palettes[currentPalette][themeMode];

      const themeColor = palettes[palette][themeMode]["--palette-200"];

      // Update the <meta name="theme-color">
      let themeMetaTag = document.querySelector('meta[name="theme-color"]');
      if (!themeMetaTag) {
        themeMetaTag = document.createElement("meta");
        themeMetaTag.setAttribute("name", "theme-color");
        document.head.appendChild(themeMetaTag);
      }
      themeMetaTag.setAttribute("content", themeColor);

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
  }, [mode, palette]);
};

export default useThemeColor;
