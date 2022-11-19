import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import image from "../assets/icon-search.svg";
import AboutUser from "./AboutUser";

export interface DataType {
  avatar_url: string;
  bio: null | string;
  blog: string;
  company: null | string;
  created_at: string;
  email: null | string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null | string;
  html_url: string;
  id: number;
  location: null | string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null | string;
  type: string;
  updated_at: string;
  url: string;
}
interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}

const GetApi = ({ theme, setTheme }: HeaderProps) => {
  const [data, setData] = useState<DataType | null>(null);
  const [user, setUser] = useState("");
  const [result, setResult] = useState<null | string>(null);

  const fechData = async () => {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    const notes = response.data;
    setData(notes);
  };

  const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = e.currentTarget.value;
    setUser(newValue);
  };

  const clickHeandler = () => {
    if (user) {
      fechData();
      setResult(null);
    } else {
      setResult("No results");
    }
  };

  return (
    <>
      <div
        className="inp py-4 px-3 rounded-2xl flex mt-9 justify-between md:px-6"
        style={{ backgroundColor: theme == "light" ? "white" : "#1E2A47" }}
      >
        <img className="md:h-9" src={image} />
        <input
          style={{ backgroundColor: theme == "light" ? "white" : "#1E2A47" }}
          className="inp w-[40%] "
          type="text"
          placeholder="Search GitHub username…"
          onChange={inputChange}
          value={user}
        ></input>
        <p className="error flex items-center text-sm">{result}</p>
        <button
          className="btn text-white p-3 rounded-xl ml-2"
          onClick={clickHeandler}
        >
          Search
        </button>
      </div>
      <AboutUser data={data} setData={setData} theme={theme} />
    </>
  );
};

export default GetApi;
