import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class HowToShopTruYoo extends React.Component {
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
          <h1 className="responsive-h1">How To Shop {companyName}</h1>
          <h2
            className={textClass.join(" ")}
            id="text-2"
            onScroll={this.handleScroll}
          >
            FIND
          </h2>
          <p>
            {companyName} products are sold exclusively through our independent{" "}
            {companyName} distributors. They are passionate about {companyName}{" "}
            products and are eager to connect with you.
          </p>
          <h2
            className={textClass.join(" ")}
            id="text-2"
            onScroll={this.handleScroll}
          >
            CONNECT
          </h2>
          <p>
            Connecting with our distributors is as easy as connecting with them
            on Facebook and asking, "Hey, I want to shop some {companyName},
            what products have you got in stock?"
          </p>
          <h2
            className={textClass.join(" ")}
            id="text-2"
            onScroll={this.handleScroll}
          >
            SHOP
          </h2>
          <p>
            Our {companyName} distributors sell {companyName} product in two
            ways: Facebook live and home pop-up shops. So say hello and start
            shopping today, it's that simple!
          </p>
          <Link to="/RetailerLogin">
            <Button>Connect</Button>
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

export default HowToShopTruYoo;
