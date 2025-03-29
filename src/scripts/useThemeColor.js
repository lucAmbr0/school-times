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
      "--palette-50": "#071118",
      "--palette-100": "#0f2838",
      "--palette-200": "#103247",
      "--palette-300": "#12415e",
      "--palette-400": "#17587d",
      "--palette-500": "#24759e",
      "--palette-600": "#2b9cd4",
      "--palette-700": "#72bce4",
      "--palette-800": "#99cdea",
      "--palette-900": "#badbf2",
      "--palette-950": "#c9e6f3",
      "--palette-50-rgb": "7, 17, 24",
      "--palette-100-rgb": "15, 40, 56",
      "--palette-200-rgb": "16, 50, 71",
      "--palette-300-rgb": "18, 65, 94",
      "--palette-400-rgb": "23, 88, 125",
      "--palette-500-rgb": "36, 117, 158",
      "--palette-600-rgb": "43, 156, 212",
      "--palette-700-rgb": "114, 188, 228",
      "--palette-800-rgb": "153, 205, 234",
      "--palette-900-rgb": "186, 219, 242",
      "--palette-950-rgb":  "201, 230, 243",
    }
  },
  Pine: {
    light: {
      "--palette-50": "#f5f8f5",
      "--palette-100": "#dfeadd",
      "--palette-200": "#bed5ba",
      "--palette-300": "#95b98f",
      "--palette-400": "#6d9968",
      "--palette-500": "#527e4e",
      "--palette-600": "#3f653c",
      "--palette-700": "#355233",
      "--palette-800": "#2d432c",
      "--palette-900": "#293928",
      "--palette-950": "#060a06",
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
      "--palette-50": "#060a06",
      "--palette-100": "#131b13",
      "--palette-200": "#192518",
      "--palette-300": "#21321f",
      "--palette-400": "#2c462a",
      "--palette-500": "#3d5f3a",
      "--palette-600": "#567953",
      "--palette-700": "#77a56f",
      "--palette-800": "#a0c19a",
      "--palette-900": "#c0d6bd",
      "--palette-950": "#d8e4d8",
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
  }
  // more palettes soon!
};

const useThemeColor = (mode = "system", palette = "Cornflower") => {
  const [data] = useData();
  useEffect(() => {
    const updateThemeColor = () => {
      mode = data.settings.darkMode
      palette = data.settings.palette
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
  }, [mode, palette]);
};

export default useThemeColor;
