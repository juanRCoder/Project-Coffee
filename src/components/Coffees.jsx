import { useState, useEffect } from "react";
import startFill from "../assets/Star_fill.svg";
import start from "../assets/Star.svg";
import "./Coffees.css";

function Coffees({ disponible }) {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );
        const data = await response.json();
        setCoffee(data);
      } catch (err) {
        console.log("Error al consumir API" + err);
      }
    };
    fetchCoffee();
  }, []);

  return (
    <>
      {Array.isArray(coffee) &&
        coffee.map((c) => (
          <div
            className="cardCoffee"
            key={c.id}
            style={{
              display:
                disponible === 2 && c.available === false ? "none" : "block",
            }}
          >
            <img
              className="imgCoffee"
              src={c.image}
              alt={`Coffee ${c.id}`}
              title={`Coffee ${c.id}`}
            />
            <div className="divTitlePrice">
              <h1 className="titleCoffee">{c.name}</h1>
              <p className="priceCoffee">{c.price}</p>
            </div>
            <div className="divRatingVote">
              <div>
                <img src={c.votes ? startFill : start} alt="starFill" />
                <p className="ratingCoffee">{c.rating}</p>
                <p className="voteCoffee">({c.votes} votes)</p>
              </div>
              <p className="available">{c.available ? "" : "sold out"}</p>
            </div>
            {c.popular && <p className="popular">popular</p>}
          </div>
        ))}
    </>
  );
}

export default Coffees;
