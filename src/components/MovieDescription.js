import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const MovieDescription = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [displayTrailer, setDisplayTrailer] = useState(false);
  const title = query.get("title");
  const description = query.get("description");
  const posterURL = query.get("posterURL");
  const rate = query.get("rate");
  const trailer = query.get("trailer");
//   console.log(
//     title + "\n" + description + "\n" + posterURL + "\n" + rate + "\n" + trailer
//   );

  const handleDisplay = () => {
    if (!displayTrailer) {
      setDisplayTrailer(true);
    } else setDisplayTrailer(false);
  };

  return (
    <div>
      <div
        style={{
          border: "2px solid purple",
          padding: "10px 15px",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <Link to="/">
          <button
            className="btn"
            style={{
              width: "15%",
              padding: "0px",
              margin: "10px",
              border: "2px solid purple",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <i className="fa fa-arrow-alt-circle-left"></i> Go Back Home
          </button>
        </Link>
        <center>
          <img
            src={posterURL}
            alt={title}
            style={{
              width: "20%",
              border: "2px solid black",
              borderRadius: "10px",
            }}
          />
          <h1>{title}</h1>
        </center>
        <p
          style={{
            fontSize: "20px",
            textAlign: "justify",
          }}
        >
          {description}
        </p>

        <button className="btn-trailer" onClick={handleDisplay}>
          <i className="far fa-play-circle"></i>
         {displayTrailer?
          <span> Hide Trailer</span>:
          <span> Watch trailer</span>
        }
        </button>
        <div
          className="movie-trailler"
          style={
            displayTrailer
              ? { display: "block", marginTop: "10px" }
              : { display: "none" }
          }
        >
          <center>
            <video
              src={displayTrailer?trailer:""}
              width="70%"
              height="500px"
              poster={posterURL}
              controls
              loop
            />
          </center>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
