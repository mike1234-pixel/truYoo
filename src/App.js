import React from "react";

import Home from "./Home.js";
import AboutTruYoo from "./AboutTruYoo.js";
import ShopTruYoo from "./ShopTruYoo.js";
import YourTruYooBusiness from "./YourTruYooBusiness.js";
import JoinTruYoo from "./JoinTruYoo.js";

import Navtwo from "./Navtwo.js";
import 'bootstrap/dist/css/bootstrap.css';
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
  

      <Navtwo /> 
      <h1>hello world.</h1>
    
      </Switch>
      </BrowserRouter>
    )
  }

}

export default App;

// download a stock video
// save it in my-app
// full screen on website.