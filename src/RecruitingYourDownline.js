import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";

class RecruitingYourDownline extends React.Component {
  render() {
    let companyName = "truYoo";

    return (
      <div className="text-body">
        <Navtwo />
        <div className="text-box">
          <h1 className="responsive-h1">Recruiting Your Downline</h1>
          <br></br>
          <p
            style={{
              textAlign: "justify",
              marginLeft: "20px",
              marginRight: "20px"
            }}
          >
            {companyName} distributors level up depending on volume points and
            your downline. Volume points are awarded based on quantities of
            stock purchased by the distributor, and your downline is the team of
            active people you have working under you. The more product you sell,
            the more points awarded and the higher you go. And the more product
            your team sells, the more points you are awarded, and the sky is the
            limit.
          </p>
          <p
            style={{
              textAlign: "justify",
              marginLeft: "20px",
              marginRight: "20px"
            }}
          >
            As a member of the {companyName} family, you work your way from
            Distributor, through the pyramid of levels, and towards the
            Founder's Inner Circle.
          </p>

          <Container>
            <Row>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic25.png")}
                  alt="rose icon"
                ></img>
                <p>Distributor</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic26.png")}
                  alt="tree icon"
                ></img>
                <p>Success Builder</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic27.png")}
                  alt="black diamond icon"
                ></img>
                <p>Black Diamond Success Builder</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic28.png")}
                  alt="diamond ring icon"
                ></img>
                <p>Platinum Diamond Distributor</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic29.png")}
                  alt="globe icon"
                ></img>
                <p>World Team</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic30.png")}
                  alt="money icon"
                ></img>
                <p>Millionaire Team</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic31.png")}
                  alt="office and notebook icon"
                ></img>
                <p>Executive Team</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic32.png")}
                  alt="candle icon"
                ></img>
                <p>Founder's Inner Circle</p>
              </Col>
            </Row>
          </Container>

          <br></br>
          <p>
            To find out more about our unique pyramid business structure and how
            it can financially benefit you, please{" "}
            <Link to="/RetailerLogin">
              <Button>Get In Touch</Button>
            </Link>
          </p>

          <br></br>
          <br></br>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RecruitingYourDownline;

/* 
col - lg -3
col md - 6
col sm - 12
*/
