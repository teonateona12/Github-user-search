import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import GetApi from "./components/GetApi";



function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="p-7 md:py-36 md:px-24 xl:px-80	">
      <Header theme = {theme} setTheme={setTheme} />
      <GetApi theme = {theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
