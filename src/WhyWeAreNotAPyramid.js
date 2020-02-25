import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import { Button } from "react-bootstrap";

class WhyWeAreNotAPyramid extends React.Component {
  constructor() {
    super();
    this.state = {
      turnUpsideDown: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      turnUpsideDown: !state.turnUpsideDown
    }));
    console.log(this.state.turnUpsideDown);
  }

  render() {
    const imgClass = ["pyramid-image"];

    if (this.state.turnUpsideDown) {
      imgClass.push("rotate-me");
    }

    let companyName = "truYoo";

    return (
      <div className="text-body">
        <Navtwo />
        <div className="text-box" id="why-we-are-no-pyramid">
          <h1 className="responsive-h1">Join the Anti-Pyramid</h1>
          <p>
            In the past, people once thought that the world was flat. Back then,
            people didn't know any differently.
          </p>
          <p>The same can be said for multi-level marketing today.</p>
          <p>
            In the future, comparing a direct-selling or MLM organisation to a
            pyramid scheme, will seem as ridiculous as claiming the Earth is
            flat.
          </p>
          <h2>In fact...</h2>
          <p>
            In our business we aim to create the opprtunity <b>for you.</b>
          </p>
          <p>
            With our fantastic distributor discounts and rewards, we can keep
            the profits flowing <b>down</b>, not up.
          </p>
          <p>
            So you could say we're the <b>opposite of a pyramid scheme</b>, you
            could say we are...
          </p>
          <h2>A Dimaryp</h2>
          <img
            src={require("./Images-and-videos/pic18.png")}
            className={imgClass.join(" ")}
          ></img>
          <Button onClick={this.handleClick}>Show Me The Dimaryp!</Button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default WhyWeAreNotAPyramid;

/* use a pyramid pic with a button which rotates 180 degrees on click to demonstrate the dimaryp. */
/* use the same stylings from who is tru yoo section*/
