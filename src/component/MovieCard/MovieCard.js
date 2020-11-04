import React from "react";
import StarRatingComponent from "react-star-rating-component";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
function MovieCard({
  Title,
  Description,
  PostUrl,
  rate,
  style,
  date,
  id,
}) {
  return (
    <div className="movie_card">
      <div className="info_section">
        <div className="movie_header">
          <img
            className="locandina"
            variant="top"
            src={PostUrl}
            alt="movie"
            width="200px"
            height="300px"
          />
          <h1>{Title}</h1>
          <h5>{date}</h5>
          <p className="type">{style}</p>
        </div>
        <div className="movie_desc">
          
          <Link to={`/DescTrailer/${id}`}>
            <Button variant="primary">More details..</Button>
          </Link>
        </div>
        <StarRatingComponent
          className="rating"
          name={"rate" + rate}
          starCount={5}
          editing={false}
          value={rate}
        />
      </div>
    </div>
  );
}

export default MovieCard;
