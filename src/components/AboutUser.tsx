import "../index.css";
import { DataType } from "./GetApi";
import image from "../assets/Oval.png";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";

interface AboutUserProps {
  data: null | DataType;
  setData: (value: null | DataType) => void;
  theme: string;
}

const AboutUser = ({ data, setData, theme }: AboutUserProps) => {
  console.log(data?.created_at);
  const today = new Date(`${data?.created_at}`)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ")
    .join(" ");
  return (
    <div
      className="container mt-3 rounded-2xl p-8 md:p-10"
      style={{ backgroundColor: theme == "light" ? "white" : "#1E2A47" }}
    >
      <div className="flex ">
        <img
          className="h-20 rounded-full	"
          src={data?.avatar_url ? data?.avatar_url : image}
        />
        <div className="ml-4">
          <h1>{data?.name ? data.name : "The Octocat"}</h1>
          <p className="txt">{`@${data?.login ? data?.login : "octiocat"}`}</p>
          <p>{`Joined ${today ? today : "2011-01-25T18:48:21Z"}`}</p>
        </div>
      </div>

      <p className="mt-8 xl:ml-24">
        {data?.bio
          ? data?.bio
          : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
      </p>

      <div
        className="p-5 flex rounded-xl mt-6 justify-between  xl:ml-24"
        style={{ backgroundColor: theme == "light" ? "#F6F8FF" : "#141D2F" }}
      >
        <div>
          <p>Repos</p>
          <p className="clr text-center mt-2 md:text-left">
            {data?.public_repos ? data?.public_repos : "8"}
          </p>
        </div>
        <div>
          <p>Followers</p>
          <p className="clr text-center mt-2 md:text-left">
            {data?.followers ? data?.followers : "3938"}
          </p>
        </div>
        <div>
          <p>Following</p>
          <p className="clr text-center mt-2 md:text-left">
            {data?.following ? data?.following : "9"}
          </p>
        </div>
      </div>
      <div className="md:flex md:justify-between xl:ml-24">
        <div className="mt-7">
          <div className="flex">
            <img src={location} />
            <p className="ml-3">
              {data?.location ? data?.location : "San Francisco"}
            </p>
          </div>
          <div className="flex mt-4">
            <img src={website} />
            <p className="ml-3">
              {data?.html_url ? data?.html_url : "https://github.blog"}
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-7 md:mr-10">
          <div className="flex">
            <img src={twitter} />
            <p className="ml-3">
              {data?.twitter_username
                ? data?.twitter_username
                : "Not Available"}
            </p>
          </div>
          <div className="flex mt-4">
            <img src={company} />
            <p className="ml-3">{data?.company ? data?.company : "@github"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
