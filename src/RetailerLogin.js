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
      phoneValue: "",
      passwordValueOne: "",
      passwordValueTwo: "",
      cityValue: "",
      stateValue: "",
      zipValue: "",
      textAreaOneValue: "",
      textAreaTwoValue: "",
      textAreaThreeValue: "",
      textAreaFourValue: "",
      checkBoxChecked: false,
      /* Validation Errors */
      nameError: " ",
      emailError: " ",
      phoneError: " ",
      passwordOneError: " ",
      passwordTwoError: " ",
      cityError: " ",
      stateError: " ",
      zipError: " ",
      textAreaOneError: " ",
      textAreaTwoError: " ",
      textAreaThreeError: " ",
      textAreaFourError: " ",
      checkBoxError: " "
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

  /* handleSubmit RUNS ALL VALIDATION FUNCTIONS IN REVERSE ORDER*/

  handleSubmit(event) {
    event.preventDefault();

    this.validateCheckBox();
    this.validateTextAreaFour();
    this.validateTextAreaThree();
    this.validateTextAreaTwo();
    this.validateTextAreaOne();
    this.validateZip();
    this.validateState();
    this.validateCity();
    this.validatePasswordTwo();
    this.validatePasswordOne();
    this.validatePhone();
    this.validateEmail();
    this.validateName();

    this.submitForm();
  }

  /* VALIDATION FUNCTIONS - UPDATE ERROR STATES */

  validateName() {
    let name = this.state.nameValue;
    if (name == "") {
      this.setState({
        nameError: "Please enter a valid name."
      });
    } else if (name != "") {
      this.setState({
        nameError: ""
      });
    }
  }

  /* If name is blank, show error message. Else if name is not blank, remove error message. */
  /* works */

  validateEmail() {
    let email = this.state.emailValue;
    if (!email.includes("@") || email == "") {
      this.setState({
        emailError: "Please enter a valid email."
      });
    } else if (email != "" && email.includes("@")) {
      this.setState({
        emailError: ""
      });
    }
  }

  /* if email does not include '@' or email is blank, show error message. Else if email is not blank and email includes '@', remove error message */
  /* works */

  validatePhone() {
    let phoneNumber = this.state.phoneValue;
    let regex = /^([0-9]{11})$/;
    if (
      phoneNumber == null ||
      phoneNumber == "" ||
      regex.test(phoneNumber) == false
    ) {
      this.setState({
        phoneError: "Please enter a valid phone number."
      });
    } else if (regex.test(phoneNumber) == true) {
      this.setState({
        phoneError: ""
      });
    }
  }

  /* Checks phone number is 11 chars and all chars are numeric, if not true display error message, else if true remove error message */
  /* works */

  validatePasswordOne() {
    let passwordOne = this.state.passwordValueOne;
    let regex = /(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9])/; /* CHANGE THIS REGEX TO MAKE IT TEST WHAT YOU WANT TO TEST FOR*/
    if (regex.test(passwordOne) == false) {
      this.setState({
        passwordOneError:
          "Password must be minimum 8 characters and include one uppercase letter, one number and one special character."
      });
    } else if (regex.test(passwordOne) == true) {
      this.setState({
        passwordOneError: ""
      });
    }
  }

  /* Password must include one special character, one uppercase character and one numeric character */
  /* if input does not include the above, show error message. Else if input does include the above, remove error message*/
  /* works */

  validatePasswordTwo() {
    let passwordOne = this.state.passwordValueOne;
    let passwordTwo = this.state.passwordValueTwo;
    if (passwordTwo !== passwordOne) {
      this.setState({
        passwordTwoError: "Your passwords don't match."
      });
    } else if (passwordTwo == null || passwordTwo == "") {
      this.setState({
        passwordTwoError: "Field is empty."
      });
    } else if (
      passwordTwo != null ||
      (passwordTwo != "" && passwordTwo == passwordOne)
    ) {
      this.setState({
        passwordTwoError: ""
      });
    }
  }

  /* If passwords in input fields one and two are not the same, display error message passwords don't match */
  /* else if password field is empty, display error message field is empty */
  /* else if field is not blank and password one and password two are the same, remove error message */
  /* works */

  validateCity() {
    let city = this.state.cityValue;
    if (city == "") {
      this.setState({
        cityError: "Please enter a city."
      });
    } else if (city != "") {
      this.setState({
        cityError: ""
      });
    }
  }

  /* if city field is empty, display error message. If field is not empty, remove error message */
  /* works */

  validateState() {
    let state = this.state.stateValue;
    if (state == "" || state == "SL") {
      this.setState({
        stateError: "Please select a state."
      });
    } else if (state != "SL") {
      this.setState({
        stateError: ""
      });
    }
  }

  /* if state field is blank or select state, display error message, else if state is not select state, remove error message */
  /* works */

  validateZip() {
    let zip = this.state.zipValue;
    let regex = /^([0-9]{5}|[0-9]{5}-[0-9]{4})$/;
    if (zip == null || zip == "" || regex.test(zip) == false) {
      this.setState({
        zipError: "Please enter a valid zip code."
      });
    } else if (regex.test(zip) == true) {
      this.setState({
        zipError: ""
      });
    }
  }

  /* if zip is not 5 numbers or 5 numbers-4 numbers, display error message, if zip input is 5 numbers or 5 numbers-4 numbers, remove error message */
  /* works */

  validateTextAreaOne() {
    let textAreaOne = this.state.textAreaOneValue;
    if (textAreaOne == "" || textAreaOne.length < 30) {
      this.setState({
        textAreaOneError: "Field must contain over 30 characters."
      });
    } else if (textAreaOne.length > 30) {
      this.setState({
        textAreaOneError: ""
      });
    }
  }

  /* works */

  validateTextAreaTwo() {
    let textAreaTwo = this.state.textAreaTwoValue;
    if (textAreaTwo == "" || textAreaTwo.length < 30) {
      this.setState({
        textAreaTwoError: "Field must contain over 30 characters."
      });
    } else if (textAreaTwo.length > 30) {
      this.setState({
        textAreaTwoError: ""
      });
    }
  }

  /* works */

  validateTextAreaThree() {
    let textAreaThree = this.state.textAreaThreeValue;
    if (textAreaThree == "" || textAreaThree.length < 30) {
      this.setState({
        textAreaThreeError: "Field must contain over 30 characters."
      });
    } else if (textAreaThree.length > 30) {
      this.setState({
        textAreaThreeError: ""
      });
    }
  }

  /* works */

  validateTextAreaFour() {
    let textAreaFour = this.state.textAreaFourValue;
    if (textAreaFour == "" || textAreaFour.length < 30) {
      this.setState({
        textAreaFourError: "Field must contain over 30 characters."
      });
    } else if (textAreaFour.length > 30) {
      this.setState({
        textAreaFourError: ""
      });
    }
  }

  /* works */

  /* if input in text areas one through four is less than 30 characters, display error message. If over 30 characters, remove error message  */

  validateCheckBox() {
    let checked = this.state.checkBoxChecked;
    if (checked == false) {
      this.setState({
        checkBoxError: "Please agree to the terms and conditions."
      });
    } else if (checked == true) {
      this.setState({
        checkBoxError: ""
      });
    }
  }

  /* if box is not checked, display error message, else if box is checked, remove error message */
  /* works */

  submitForm() {
    if (
      this.state.nameError == "" &&
      this.state.emailError == "" &&
      this.state.phoneError == "" &&
      this.state.passwordOneError == "" &&
      this.state.passwordTwoError == "" &&
      this.state.cityError == "" &&
      this.state.stateError == "" &&
      this.state.zipError == "" &&
      this.state.textAreaOneError == "" &&
      this.state.textAreaTwoError == "" &&
      this.state.textAreaThreeError == "" &&
      this.state.textAreaFourError == "" &&
      this.state.checkBoxError == ""
    ) {
      window.location.reload(true);
    }
  }

  /* if there are no error messages, reload window. */

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
                name="nameValue"
                placeholder="Enter full name"
                /* for an input to be controlled, its value must correspond to that of a state variable */
                value={this.state.nameValue}
                onChange={this.handleChange}
              />
              <Form.Text style={{ color: "red", fontSize: "20px" }}>
                {this.state.nameError}
              </Form.Text>
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
              <Form.Text style={{ color: "red", fontSize: "20px" }}>
                {this.state.emailError}
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                placeholder="Enter Phone Number"
                name="phoneValue"
                value={this.state.phoneValue}
                onChange={this.handleChange}
              />
              <Form.Text style={{ color: "red", fontSize: "20px" }}>
                {this.state.phoneError}
              </Form.Text>
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
              <Form.Text style={{ color: "red", fontSize: "20px" }}>
                {this.state.passwordOneError}
              </Form.Text>
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
              <Form.Text style={{ color: "red", fontSize: "20px" }}>
                {this.state.passwordTwoError}
              </Form.Text>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="cityValue"
                  value={this.state.cityValue}
                  onChange={this.handleChange}
                />
                <Form.Text style={{ color: "red", fontSize: "20px" }}>
                  {this.state.cityError}
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="stateValue"
                  value={this.state.stateValue}
                  onChange={this.handleChange}
                >
                  <option value="SL">Select State</option>
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
                <Form.Text style={{ color: "red", fontSize: "20px" }}>
                  {this.state.stateError}
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  name="zipValue"
                  value={this.state.zipValue}
                  onChange={this.handleChange}
                />
                <Form.Text style={{ color: "red", fontSize: "20px" }}>
                  {this.state.zipError}
                </Form.Text>
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
              <Form.Text style={{ color: "red", fontSize: "20px" }}>
                {this.state.textAreaOneError}
              </Form.Text>
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
              <Form.Text style={{ color: "red", fontSize: "20px" }}>
                {this.state.textAreaTwoError}
              </Form.Text>
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
              <Form.Text style={{ color: "red", fontSize: "20px" }}>
                {this.state.textAreaThreeError}
              </Form.Text>
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
              <Form.Text style={{ color: "red", fontSize: "20px" }}>
                {this.state.textAreaFourError}
              </Form.Text>
            </Form.Group>

            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I have read and agree to the truYoo terms and conditions."
                name="checkBoxChecked"
                checked={this.state.checkBoxChecked}
                onChange={this.handleChange}
              />
              <Form.Text style={{ color: "red", fontSize: "20px" }}>
                {this.state.checkBoxError}
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="button" onClick={this.handleSubmit}>
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

/* now it needs to submit (refresh page in this case) when:
submit button is clicked for the second time. 
need to ensure password not displayed in the URL?co
*/

/* 
NEXT FORM FOLLOW THIS:
https://www.telerik.com/blogs/up-and-running-with-react-form-validation
*/
