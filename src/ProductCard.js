import React from "react";
import { Card, Button } from "react-bootstrap";
import pic15 from "./Images-and-videos/pic15.png";
import pic16 from "./Images-and-videos/pic16.png";
import pic21 from "./Images-and-videos/pic21.jpg";
import pic22 from "./Images-and-videos/pic22.jpg";
import pic23 from "./Images-and-videos/pic23.jpg";
import pic24 from "./Images-and-videos/pic24.jpg";

function ProductCard(props) {
  const imageArr = [pic21, pic22, pic23, pic15, pic16, pic24];

  return (
    <div id="product-card">
      <img src={imageArr[props.id]} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <Button variant="primary">Go somewhere</Button>
    </div>
  );
}

export default ProductCard;

/* <img src={require(props.imgUrl)}></img>
    <div>
      <Card style={{ width: "18rem" }} className="card" id="product-card">
        <Card.Img variant="top" src={imageArr[props.id]} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>*/
