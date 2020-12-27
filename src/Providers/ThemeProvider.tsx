import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProviderProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
}

type useThemeDataProps = () => ProviderProps | never;

export const ThemeContext = createContext<ProviderProps | null>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => { 
    const newTheme = (theme === "dark" ? "light" : "dark") || "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeData: useThemeDataProps = () => {
  const context: ProviderProps = useContext(ThemeContext)!;

  if(context === undefined)
    throw new Error("ThemeProvider: `context` is undefined");

  return context;
};