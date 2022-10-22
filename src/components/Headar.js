import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Active() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Active Theme {theme}
      <br></br>
      <button onclick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Active;
