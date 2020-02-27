import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class GettingSetUp extends React.Component {
  constructor() {
    super();
  }

  render() {
    let companyName = "truYoo";

    return (
      <div className="text-body">
        <Navtwo />
        <div className="text-box">
          <h1 className="responsive-h1">
            Setting Up Your {companyName} Business
          </h1>
          <br></br>
          <h2>Your Inventory</h2>
          <br></br>
          <img
            className="being-your-own-boss-pics"
            src={require("./Images-and-videos/pic44.jpeg")}
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
            25,000 people every year choose to become {companyName}{" "}
            distributors. They are empowered and successful people who are
            writing their own stories. You will grow as a leader and an
            influencer as your business grows. The first step is to acquire
            inventory for sale. Our starter package comes with your 25%
            distributor discount, and you will be connecting with people in life
            and via social media to move your inventory and earn profit. The
            more inventory you sell, the more you earn! As a self-employed
            business owner, you keep the profit.
          </p>
          <br></br>
          <h2>Your Store</h2>
          <br></br>
          <img
            className="being-your-own-boss-pics"
            src={require("./Images-and-videos/pic43.jpeg")}
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
            Our distributors sell their inventory in two ways: Facebook live and
            pop-up shops. Social Selling is at the heart of what {companyName}{" "}
            distributors do. Your friends, family and colleagues will be
            interested to buy our fantastic products, and you can connect with
            the globe online to find new customers and grow the customer base
            for <i>your</i> business.
          </p>
          <br></br>
          <h2>Your Downline</h2>
          <br></br>
          <img
            className="being-your-own-boss-pics"
            src={require("./Images-and-videos/pic45.jpeg")}
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
            But it doesn't stop with selling inventory. The special thing about{" "}
            {companyName} and the best way to boost the profit of your business
            is to recruit a downline. A downline is a team of {companyName}{" "}
            distributors that you recruit to join {companyName}. Your downline
            will sell their own inventory, and you will get a cut of the profits
            they earn, and your downline will recruit their own downline, and
            you will receive bonuses for every person they recruit.
          </p>
          <p>
            <i>
              <b>
                This is the true magic of the unique business model of{" "}
                {companyName}; the opportunity for passive income is
                exponential.
              </b>
            </i>
          </p>

          <Link to="/RecruitingYourDownline">
            <Button>Recruiting Your Downline</Button>
          </Link>

          <br></br>
          <br></br>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GettingSetUp;
