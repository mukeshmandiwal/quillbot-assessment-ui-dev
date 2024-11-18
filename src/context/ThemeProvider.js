import React, { useState, useEffect, createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";

const CustomThemeContext = createContext();

// Object containing theme configurations for dark and light modes
const themes = {
  dark: darkTheme,
  light: lightTheme,
};

/**
 * CustomThemeProvider component that manages theme state and provides theme context
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 */
const CustomThemeProvider = (props) => {
  const { children } = props;

  // Initialize theme from localStorage, defaulting to dark theme
  const [themeType, setThemeType] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // Persist theme selection to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", themeType);
  }, [themeType]);

  /**
   * Updates the current theme if a valid value is provided
   * @param {string} val - The theme value to set ('dark' or 'light')
   */
  const updateTheme = (val) => {
    if (val !== null) {
      setThemeType(val);
    }
  };

  // Memoize theme context value to prevent unnecessary re-renders
  const value = React.useMemo(
    () => ({ themeType, updateTheme }),
    [themeType, updateTheme]
  );

  return (
    <CustomThemeContext.Provider value={value}>
      <ThemeProvider theme={themes[themeType]}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

/**
 * Custom hook to access the theme context
 * @returns {Object} Theme context containing themeType and updateTheme function
 * @throws {Error} If used outside of CustomThemeProvider
 */
function useTheme() {
  const context = useContext(CustomThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a CustomThemeProvider");
  }
  return context;
}

export { CustomThemeProvider, useTheme };
