import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class WhoAreTruYoo extends React.Component {
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
          <h1 className="responsive-h1">
            Welcome to your exciting new life and {companyName} business
            opportunity. Let us tell you a little about us...
          </h1>
          <p>
            {companyName} is a company built on the values of{" "}
            <b>entrepreneurship, freedom, and service</b>. We believe that life
            is sweetest when you are helping others to achieve their dreams, and
            that is what we do every day.
          </p>
          <h2
            className={textClass.join(" ")}
            id="text-2"
            onScroll={this.handleScroll}
          >
            {companyName} has enabled 330,000 Independent Distributors to
            achieve financial independence through residual income.
          </h2>
          <p>
            You may think that the way you earn <b>exponential income</b> with
            us is direct sales, well... that's only part of the {companyName}{" "}
            story.
          </p>
          <h2
            className={textClass.join(" ")}
            id="text-2"
            onScroll={this.handleScroll}
          >
            {companyName} Independent Distributors have the opportunity to earn
            residual income by welcoming their friends, family and colleagues
            into the {companyName} community.
          </h2>
          <p>
            Our products are loved by thousands. As an Independent Distributor
            you have exclusive access to our{" "}
            <b>Distributor Wholesale Discount</b>, which gives you 30% off
            retail (your margin) and mystery pallets of {companyName} product,
            which contain at least 10% unicorn product guaranteed.
          </p>
          <h2
            className={textClass.join(" ")}
            id="text-2"
            onScroll={this.handleScroll}
          >
            What are you waiting for...?
          </h2>
          <Link to="/RetailerLogin">
            <Button>
              Start your journey as a {companyName} independent distributor
              today! xx
            </Button>
          </Link>
          <br></br>
          <br></br>
          <img
            id="image-who-are-tru-you-1"
            src={require("./Images-and-videos/pic11.jpeg")}
            alt="woman smiling and holding a balloon"
          ></img>
        </div>
        <Footer />
      </div>
    );
  }
}

export default WhoAreTruYoo;

/* keyframes animation that triggers on scroll */
