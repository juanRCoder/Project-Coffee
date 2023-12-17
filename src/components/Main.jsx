import { useState, useEffect } from "react";
import bgCafe from "../assets/bg-cafe.jpg";
import vector from "../assets/vector.svg";
import Coffees from "./Coffees";
import "./Main.css";

function Main() {
  const [content, setContent] = useState({});
  const [click, setClick] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/simple-coffee-listing.json"
        )
          .then((res) => res.json())
          .then((data) => setContent(data.text))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (num) => {
    setClick(num);
  };

  return (
    <main className="main">
      <img src={bgCafe} alt="bgCafe" title="bgCafe" className="bgCafe" />
      <div className="boxInfo">
        <img src={vector} alt="vector" title="vector" className="vector" />
        <h1 className="title">{content[0]?.content}</h1>
        <p className="paragraph">{content[1]?.content}</p>
        <div className="boxButton">
          <button
            onClick={() => handleClick(1)}
            style={{ background: click === 1 ? "#6F757C" : "transparent" }}
          >
            {content[2]?.content}
          </button>
          <button
            onClick={() => handleClick(2)}
            style={{ background: click === 2 ? "#6F757C" : "transparent" }}
          >
            {content[3]?.content}
          </button>
        </div>
        <Coffees />
      </div>
    </main>
  );
}

export default Main;
