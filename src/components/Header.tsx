import { useState, useEffect } from "react";
import "../index.css";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}

const Header = ({ theme, setTheme }: HeaderProps) => {
  const [name, setName] = useState("DARK");
  const [image, setImage] = useState(moon);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setName("LIGHT");
      setImage(sun);
    } else {
      setTheme("light");
      setName("DARK");
      setImage(moon);
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className="flex justify-between  ">
      <h1
        className="font-bold text-2xl"
        style={{ color: theme == "light" ? "#222731" : "white" }}
      >
        devfinder
      </h1>
      <div className="flex">
        <h1 className="mr-2 font-bold" onClick={toggleTheme}>{name} </h1>
        <img src={image} onClick={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
