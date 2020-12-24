import React from "react";
import Header from "./Header.js";
import TinderCard from "./Tindercards.js";
import Bottomicons from "./Bottomicons.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <TinderCard />
      <Bottomicons />
    </div>
  );
}
