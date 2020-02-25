import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class BeingYourOwnBoss extends React.Component {
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
          <h1 className="responsive-h1">RESPONSIVE H1 - BEING YOUR OWN BOSS</h1>
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
          <img
            id="image-who-are-tru-you-1"
            src={require("./Images-and-videos/pic11.jpeg")}
          ></img>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BeingYourOwnBoss;
