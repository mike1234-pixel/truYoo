import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import { Form, Button, Col } from "react-bootstrap";
import RandomQuoteMachine from "./RandomQuoteMachine.js";
import CountdownTimer from "./CountdownTimer.js";

class RetailerLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      emailValue: "",
      passwordValueOne: "",
      passwordValueTwo: "",
      phoneValue: "",
      cityValue: "",
      stateValue: "",
      zipValue: "",
      textAreaOneValue: "",
      textAreaTwoValue: "",
      textAreaThreeValue: "",
      textAreaFourValue: "",
      checkBoxChecked: false,
      /*Error Messages */
      nameError: "",
      emailError: "",
      phoneError: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type == "checkbox") {
      this.setState({
        [name]: checked
      });
    } else {
      this.setState({
        [name]: value
      });
    }
    console.log(event.target.value);
    console.log(this.state.checkBoxChecked);
  }

  validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    if (!this.state.emailValue.includes("@")) {
      emailError = "Invalid email.";
    }
    if (emailError) {
      this.setState({
        emailError
      });
      return false;
    }
    return true;
  };

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.emailError);
    }
  }
  /*
  handleChange(event) {
    if (event.target.type != "checkbox") {
      this.setState({
        [event.target.name]: event.target.value
      });
    } else {
      this.setState({
        [event.target.name]: !event.target.value
      });
    }
    console.log(event.target.value);
  } */

  render() {
    let companyName = "truYoo";

    return (
      <div id="retailer-login-body">
        <Navtwo />

        <div>
          <h1 id="login-header">
            Become a {companyName} independent distributor today.
          </h1>
        </div>
        <RandomQuoteMachine />
        <CountdownTimer />

        <div className="login-wrapper">
          <Form>
            <h2>Distributor Login</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="emailValue"
                value={this.state.emailValue}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="passwordValue"
                value={this.state.passwordValue}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Log In.
            </Button>
          </Form>
        </div>

        <br></br>

        <div className="login-wrapper">
          <Form>
            <h2>New Distributor Signup</h2>

            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter full name"
                name="nameValue"
                /* for an input to be controlled, its value must correspond to that of a state variable */
                value={this.state.nameValue}
                onChange={this.handleChange}
              />
              <div>{this.state.nameError}</div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="emailValue"
                value={this.state.emailValue}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <div>{this.state.emailError}</div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Phone Number"
                name="phoneValue"
                value={this.state.phoneValue}
                onChange={this.handleChange}
              />
              <div>{this.state.phoneError}</div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="passwordValueOne"
                value={this.state.passwordValueOne}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="passwordValueTwo"
                value={this.state.passwordValueTwo}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="cityValue"
                  value={this.state.cityValue}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="stateValue"
                  value={this.state.stateValue}
                  onChange={this.handleChange}
                >
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  name="zipValue"
                  value={this.state.zipValue}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Describe yourself in a few sentences *</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="textAreaOneValue"
                placeholder="Tell us about yourself..."
                value={this.state.textAreaOneValue}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>How did you hear about {companyName}? *</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="textAreaTwoValue"
                placeholder="Tell us where you heard about us..."
                value={this.state.textAreaTwoValue}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                What makes you want to be part of {companyName}? *
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="textAreaThreeValue"
                placeholder="Why truYoo...?"
                value={this.state.textAreaThreeValue}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Finally, what's the best time and day for you to be contacted? *
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="textAreaFourValue"
                placeholder="When can we give you a call...?"
                value={this.state.textAreaFourValue}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I have read and agree to the truYoo terms and conditions."
                name="checkBoxChecked"
                checked={this.state.checkBoxChecked}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              Sign Up.
            </Button>
          </Form>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <Footer />
      </div>
    );
  }
}

export default RetailerLogin;
