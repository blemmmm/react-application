import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ButtonAppBar from "./components/AppBar";
import ChartComponent from "./components/ChartComponent";
import { getJsDateFromExcel } from "./utils/excelToDate";
import { SERIES } from "./constants/SERIES";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "95vw" }}>
      <ButtonAppBar />
      <div>
        <ChartComponent />
      </div>
    </div>
  );
}

export default App;
