import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";

class RecruitingYourDownline extends React.Component {
  constructor() {
    super();
    this.state = {
      removeMargin: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60);

    this.setState(state => ({
      removeMargin: true
    }));
    console.log(this.state.removeMargin);
  }

  render() {
    const textClass = ["who-are-truyoo-text"];

    if (this.state.removeMargin) {
      textClass.push("remove-who-are-truyoo-text-margin-keyframe");
    }

    let companyName = "truYoo";

    return (
      <div className="text-body">
        <Navtwo />
        <div className="text-box">
          <h1 className="responsive-h1">Recruiting Your Downline</h1>
          <p>PARAGRAPH</p>
          <h2
            className={textClass.join(" ")}
            id="text-2"
            onScroll={this.handleScroll}
          >
            SCROLLABLE H2
          </h2>
          <p>PARAGRAPH</p>
          <h2
            className={textClass.join(" ")}
            id="text-2"
            onScroll={this.handleScroll}
          >
            SCROLLABLE H2
          </h2>
          <p>PARAGRAPH</p>
          <h2
            className={textClass.join(" ")}
            id="text-2"
            onScroll={this.handleScroll}
          >
            SCROLLABLE H2
          </h2>
          <Link to="/RetailerLogin">
            <Button>Click Me</Button>
          </Link>
          <br></br>
          <br></br>

          <Container>
            <Row>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic25.png")}
                ></img>
                <p>Distributor</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic26.png")}
                ></img>
                <p>Success Builder</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic27.png")}
                ></img>
                <p>Black Diamond Success Builder</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic28.png")}
                ></img>
                <p>Platinum Diamond Distributor</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic29.png")}
                ></img>
                <p>World Team</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic30.png")}
                ></img>
                <p>Millionaire Team</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic31.png")}
                ></img>
                <p>Executive Team</p>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <img
                  className="levels-img"
                  src={require("./Images-and-videos/pic32.png")}
                ></img>
                <p>Founder's Inner Circle</p>
              </Col>
            </Row>
          </Container>
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
