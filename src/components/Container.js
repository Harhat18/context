import { useContext } from "react";

import Button from "./Button";
import Header from "./Headar";

import ThemeContext from "../context/ThemeContext";

function Container() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="app">
      <Button />
      <hr />
      <Header />
    </div>
  );
}

export default Container;
