import { useEffect } from "react";

const useThemeColor = () => {
  useEffect(() => {
    const updateThemeColor = () => {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const themeColor = isDarkMode ? "#195173" : "#C4E2F3"

      // Update the <meta name="theme-color">
      let themeMetaTag = document.querySelector('meta[name="theme-color"]');
      if (!themeMetaTag) {
        themeMetaTag = document.createElement("meta");
        themeMetaTag.setAttribute("name", "theme-color");
        document.head.appendChild(themeMetaTag);
      }
      themeMetaTag.setAttribute("content", themeColor);
    };

    // Set initial theme color
    updateThemeColor();

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateThemeColor);

    return () => mediaQuery.removeEventListener("change", updateThemeColor);
  }, []);
};

export default useThemeColor;