import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();
export default ThemeContext;
// eslint-disable-next-line react-hooks/rules-of-hooks
const [theme, setTheme] = useState(localStorage.setItem("theme") || "light");
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
const values = {
  theme,
  setTheme,
};

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
