import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    let companyName = "truYoo";
    let thisYear = new Date().getFullYear();

    return (
      <div id="footer">
        <footer>
          <p id="footer-copyr">
            &copy; {companyName} {thisYear}. All Rights Reserved
          </p>
          <ul id="footer-list-one">
            <Link to="/WhoAreTruYoo">
              <li>About {companyName}</li>
            </Link>
            <Link to="/HowToShopTruYoo">
              <li>Shop {companyName}</li>
            </Link>
            <Link to="/BeingYourOwnBoss">
              <li>Your {companyName} Business</li>
            </Link>
            <Link to="/RetailerLogin">
              <li>Join {companyName}</li>
            </Link>
          </ul>
          <ul id="footer-list-two">
            <Link to="/TermsAndConditions">
              <li>Terms and Conditions</li>
            </Link>
            <Link to="/RetailerLogin">
              <li>Retailer Login / Signup</li>
            </Link>
            <Link to="/ConsumerReturnsPolicy">
              <li>Consumer Returns Policy</li>
            </Link>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;

/*<Link to="/AboutTruYoo" className="navLink"><li>About {companyName}</li></Link> */
