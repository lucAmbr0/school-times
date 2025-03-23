import { useEffect } from "react";

const useThemeColor = () => {
  useEffect(() => {
    const updateThemeColor = () => {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const themeColor = isDarkMode ? "#195173" : "#C4E2F3"; // Change these to your preferred colors

      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", themeColor);
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
