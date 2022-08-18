import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Norender from "./components/Norender";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Norender />
    </div>
  );
}

export default App;
