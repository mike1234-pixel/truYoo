import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";

class SectionOne extends React.Component {
    render() {

        let companyName = 'truYoo';

        return (
            <div>
                <div className="section-one-h1-wrapper">
                <h1 className="section-one-h1">Shop {companyName}.</h1>
                </div>

            <Container>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }} className="card">
                <Card.Img variant="top" src={require('./Images-and-videos/pic5.png')} />
                    <Card.Body>
                     <Card.Title>Card Title</Card.Title>
                         <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                         <Button variant="primary">Go somewhere</Button>
                     </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }} className="card">
                <Card.Img variant="top" src={require('./Images-and-videos/pic5.png')} />
                    <Card.Body>
                     <Card.Title>Card Title</Card.Title>
                         <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                         <Button variant="primary">Go somewhere</Button>
                     </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }} className="card">
                <Card.Img variant="top" src={require('./Images-and-videos/pic5.png')} />
                    <Card.Body>
                     <Card.Title>Card Title</Card.Title>
                         <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                         <Button variant="primary">Go somewhere</Button>
                     </Card.Body>
                    </Card>
                </Col>

            </Row>
            </Container>
            </div>
        )
    }

}

export default SectionOne