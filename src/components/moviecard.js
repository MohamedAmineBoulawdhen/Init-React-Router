import React from "react";
import { Button, Card } from "react-bootstrap";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div style={{ margin: "30px auto" }}>
      <Card className="text-center">
        <Card.Header as="h2">{title}</Card.Header>
        <Card.Body>
          {" "}
          <img
            src={posterURL}
            alt={title}
            style={{ width: "30%", marginRight: "10px", borderRadius: "10px" }}
          />
          {/* <Card.Title>Description: </Card.Title>
          <Card.Text>{description}</Card.Text> */}
          <Button variant="secondary" disabled>
            Rating: {rating}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
