import axios from "axios";
import React, { useState, useEffect } from "react";
import Tindercard from "react-tinder-card";
import Axios from "./Axios.js";
import "./Tindercard.css";
function TinderCards() {
  const [card, setCard] = useState([]);

  const swiped = (direction, name) => {};

  const outofFrame = (name) => {};

  useEffect(() => {
    async function fetchdata() {
      const req = await Axios.get("/cards");
      setCard(req.data);
    }
    fetchdata();
  }, []);

  return (
    <div className="tindercard">
      <div className="tindercard_container">
        {card.map((element) => {
          return (
            <div>
              <Tindercard
                className="swipe"
                key={element.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, element.name)}
                onCardLeftScreen={() => outofFrame(element.name)}
              >
                <div
                  className="card"
                  style={{ backgroundImage: `url(${element.url})` }}
                >
                  <h3>{element.name}</h3>
                </div>
              </Tindercard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TinderCards;
