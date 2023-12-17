import { useState, useEffect } from "react";
import "./Coffees.css";

function Coffees() {
  const [coffee, setCoffee] = useState({});

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        )
          .then((res) => res.json())
          .then((data) => setCoffee(data))
          .catch((err) => console.log(err));
      } catch (err) {
        console.log("Error al consumir API" + err);
      }
    };
    fetchCoffee();
  }, []);

  return (
    <>
      <div>
        <img src={coffee[0]?.image}  alt={`Coffe ${coffee[0]?.id}`} title={`Coffe ${coffee[0]?.id}`} />
        <h1>{coffee[0]?.name}</h1>
        <p>{coffee[0]?.price}</p>
        <p>{coffee[0]?.rating}</p>
        <p>{coffee[0]?.votes}</p>
        <p>{coffee[0]?.popular ? "true" : "false"}</p>
        <p>{coffee[0]?.avaible ? "true" : "false"}</p>
      </div>
    </>
  );
}

export default Coffees;

//RECORRIENDO LOS CAFÉS:
// {coffee.map((c) => {
//     return <div key={c.id}>
//         <img src={c.image} alt={`Coffe ${c.id}`} title={`Coffe ${c.id}`}/>
//         <h1>{c.name}</h1>
//     </div>;
//   })}
