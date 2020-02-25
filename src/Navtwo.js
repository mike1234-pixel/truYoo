import React from "react";
import { IoIosMenu } from "react-icons/io"; // imports the window icon used inside the button on the nav
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

class Navtwo extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavBarVisible: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isNavBarVisible: !state.isNavBarVisible
    }));
    console.log(this.state.isNavBarVisible);
  }

  render() {
    let navClass = ["navbar"];
    if (this.state.isNavBarVisible === false) {
      navClass.push("addNavMargin"); // works to this point
    } else {
      navClass = ["navbar", "removeNavMargin"];
    }

    let companyName = "truYoo";

    return (
      <div>
        <nav className={navClass.join(" ")}>
          <Link to="/Home" className="navLinkHome">
            <p>{companyName}</p>
          </Link>

          <Dropdown>
            <ul>
              <Dropdown.Toggle
                variant="new"
                id="dropdown-basic"
                className="navLink"
              >
                About <br></br>
                {companyName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/WhoAreTruYoo" className="navLink">
                    <li>Who Are {companyName}?</li>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/WhyWeAreNotAPyramid" className="navLink">
                    <li>Why {companyName} Is Not A Pyramid</li>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </ul>
          </Dropdown>

          <Dropdown>
            <ul>
              <Dropdown.Toggle
                variant="new"
                id="dropdown-basic"
                className="navLink"
              >
                Shop <br></br>
                {companyName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/TruYooProducts" className="navLink">
                    <li>{companyName} Products</li>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/HowToShopTruYoo" className="navLink">
                    <li>How to Shop {companyName}</li>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/ConsumerReturnsPolicy" className="navLink">
                    <li>Consumer Returns Policy</li>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </ul>
          </Dropdown>

          <Dropdown>
            <ul>
              <Dropdown.Toggle
                variant="new"
                id="dropdown-basic"
                className="navLink"
              >
                Your {companyName}
                <br></br> Business
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/BeingYourOwnBoss" className="navLink">
                    <li>Being Your Own Boss</li>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/GettingSetUp" className="navLink">
                    <li>Getting Set Up</li>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/RecruitingYourDownline" className="navLink">
                    <li>Recruiting Your Downline</li>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </ul>
          </Dropdown>

          <Dropdown>
            <ul>
              <Dropdown.Toggle variant="new" id="new-id" className="navLink">
                Join <br></br>
                {companyName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/RetailerLogin" className="navLink">
                    <li>Sign Up!</li>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </ul>
          </Dropdown>
        </nav>
        <button onClick={this.handleClick}>
          <IoIosMenu />
        </button>
      </div>
    );
  }
}

export default Navtwo;
