import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class SectionOne extends React.Component {
  render() {
    let companyName = "truYoo";

    return (
      <div>
        <div className="section-one-h1-wrapper">
          <h1 className="section-one-h1">Shop {companyName}.</h1>
        </div>

        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={require("./Images-and-videos/pic14.png")}
                />
                <Card.Body>
                  <Card.Title>Moisturising Products</Card.Title>
                  <Card.Text>
                    Our range of moisturisers renew, invigorate and reconstuct
                    skin with their unique elastinex technology.
                    <br></br>
                    <br></br>
                    Clinical studies <i>may</i> have shown that our moisturisers
                    reverse ageing.
                  </Card.Text>
                  <Link to="/TruYooProducts">
                    <Button variant="primary">Find Out More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={require("./Images-and-videos/pic15.png")}
                />
                <Card.Body>
                  <Card.Title>Natural Conditioner</Card.Title>
                  <Card.Text>
                    Our natural conditioner provides intense nourishment to dull
                    and lifeless hair, leaving hair strong and bouncy without a
                    greasy feel.
                  </Card.Text>
                  <Link to="/TruYooProducts">
                    <Button variant="primary">Find Out More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={require("./Images-and-videos/pic16.png")}
                />
                <Card.Body>
                  <Card.Title>Natural Tea</Card.Title>
                  <Card.Text>
                    Our range of natural teas offer the perfect relaxing
                    beverage.
                    <br></br>
                    <br></br>
                    They are delicious and packed with nutrients, containing MCT
                    oil, which <i>may</i> aid in weight loss.
                  </Card.Text>
                  <Link to="/TruYooProducts">
                    <Button variant="primary">Find Out More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SectionOne;
