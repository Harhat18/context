import "./App.css";
import Button from "./components/Button";
import Header from "./components/Headar";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Button />
      <Header />
    </ThemeProvider>
  );
}

export default App;
