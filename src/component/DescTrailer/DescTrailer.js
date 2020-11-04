import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DescTrailer.css";

function Description({ Movielist, match }) {
  const film = Movielist.find((el) => match.params.id == el.id);
console.log(film.Title)
  return (
    <div className="Trailer-container">
      <h1>Movie trailer and description</h1>
      <h2>{film.Title}</h2>
      <br />
      <iframe
        title={film.id}
        width="560"
        height="315"
        src={film.Trailer}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br />
      <p>{film.Description}</p>
      <Link to="/Movielist">
        <Button variant="primary">Go Home</Button>
      </Link>
    </div>
  );
}

export default Description;
