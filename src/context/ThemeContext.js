import { createContext, useState } from "react";

const ThemeContext = createContext();
export default ThemeContext;
// eslint-disable-next-line react-hooks/rules-of-hooks
const [theme, setTheme] = useState("dark");
const values = {
  theme,
  setTheme,
};

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
