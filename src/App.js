import React from "react";

import Home from "./Home.js";
import AboutTruYoo from "./AboutTruYoo.js";
import ShopTruYoo from "./ShopTruYoo.js";
import YourTruYooBusiness from "./YourTruYooBusiness.js";
import JoinTruYoo from "./JoinTruYoo.js";
import RetailerLogin from "./RetailerLogin.js";
import TermsAndConditions from "./TermsAndConditions.js";
import ConsumerReturnsPolicy from "./ConsumerReturnsPolicy.js";
import WhoAreTruYoo from "./WhoAreTruYoo.js";
import WhyWeAreNotAPyramid from "./WhyWeAreNotAPyramid.js";
import HowToShopTruYoo from "./HowToShopTruYoo";
import BeingYourOwnBoss from "./BeingYourOwnBoss.js";
import GettingSetUp from "./GettingSetUp.js";
import RecruitingYourDownline from "./RecruitingYourDownline.js";
import TruYooProducts from "./TruYooProducts";

import Navtwo from "./Navtwo.js";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/AboutTruYoo" component={AboutTruYoo} />
          <Route path="/ShopTruYoo" component={ShopTruYoo} />
          <Route path="/YourTruYooBusiness" component={YourTruYooBusiness} />
          <Route path="/JoinTruYoo" component={JoinTruYoo} />
          <Route path="/RetailerLogin" component={RetailerLogin} />
          <Route path="/TermsAndConditions" component={TermsAndConditions} />
          <Route
            path="/ConsumerReturnsPolicy"
            component={ConsumerReturnsPolicy}
          />
          <Route path="/WhoAreTruYoo" component={WhoAreTruYoo} />
          <Route path="/WhyWeAreNotAPyramid" component={WhyWeAreNotAPyramid} />
          <Route path="/HowToShopTruYoo" component={HowToShopTruYoo} />
          <Route path="/BeingYourOwnBoss" component={BeingYourOwnBoss} />
          <Route path="/GettingSetUp" component={GettingSetUp} />
          <Route
            path="/RecruitingYourDownline"
            component={RecruitingYourDownline}
          />
          <Route path="/TruYooProducts" component={TruYooProducts} />

          <Navtwo />
          <h1>hello world.</h1>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// download a stock video
// save it in my-app
// full screen on website.
