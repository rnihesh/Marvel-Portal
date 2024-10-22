import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return <Home />;
}

export default App;
