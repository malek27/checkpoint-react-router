import React from "react";
import ReactStars from "react-stars";
import "./Filtre.css";

function Filtre({ setTextSearch, setSearchRate }) {
  return (
    <div className="filtre-container">
      <input
        type="text"
        placeholder="       search a movie"
        onChange={(e) => setTextSearch(e.target.value)}
      />
      <ReactStars
        count={5}
        onChange={(e) => setSearchRate(e)}
        size={24}
        activeColor="#ffd700"
        half={false}
      />

      <button>Search</button>
    </div>
  );
}

export default Filtre;
