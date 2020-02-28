import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class BeingYourOwnBoss extends React.Component {
  render() {
    let companyName = "truYoo";

    return (
      <div className="text-body">
        <Navtwo />
        <div className="text-box">
          <h1 className="responsive-h1">Becoming Your Own Boss</h1>
          <br></br>
          <h2>Purpose</h2>
          <br></br>
          <img
            className="being-your-own-boss-pics"
            src={require("./Images-and-videos/pic12.jpeg")}
            alt="doodle of the word 'joy'"
          ></img>
          <br></br>
          <br></br>
          <p
            style={{
              textAlign: "justify",
              marginRight: "10px",
              marginLeft: "10px"
            }}
          >
            We believe that every person is beautiful, unique, and has a special
            purpose. {companyName} is here to enable you to become your own boss
            and follow your dreams, and we will support you every step of the
            way in establishing <i>your</i> {companyName} business.
          </p>
          <br></br>
          <h2>Network</h2>
          <br></br>
          <img
            className="being-your-own-boss-pics"
            src={require("./Images-and-videos/pic40.jpeg")}
            alt="woman basking in a sunset"
          ></img>
          <br></br>
          <br></br>
          <p
            style={{
              textAlign: "justify",
              marginRight: "10px",
              marginLeft: "10px"
            }}
          >
            {companyName} was founded in 2015 to enable you, as an entrepreneur,
            to work within a supportive distributor network where you can
            replicate the success of one another, and build a team of people
            which will work to enable you to earn residual income.
          </p>
          <br></br>
          <h2>Time</h2>
          <br></br>
          <img
            className="being-your-own-boss-pics"
            src={require("./Images-and-videos/pic42.jpeg")}
            alt="woman basking in falling leaves"
          ></img>
          <br></br>
          <br></br>
          <p
            style={{
              textAlign: "justify",
              marginRight: "10px",
              marginLeft: "10px"
            }}
          >
            Being your own boss enables you to have more time to do what really
            matters. No more 9-to-5 or exhausting school runs. You work when you
            want, when you want, and you are in charge of your own destiny. You
            will have more time for your loved ones and to do the things you
            most want to do.
            <i>The world is your office.</i>
          </p>

          <Link to="/GettingSetUp">
            <Button>Getting Set Up</Button>
          </Link>

          <br></br>
          <br></br>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BeingYourOwnBoss;
