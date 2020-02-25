import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import ProductCards from "./ProductCards.js";

class TruYooProducts extends React.Component {
  render() {
    let companyName = "truYoo";

    return (
      <div className="text-body">
        <Navtwo />
        <div className="text-box">
          <h1 className="responsive-h1">{companyName} Products</h1>
          <br></br>
          <ProductCards />
        </div>
        <Footer />
      </div>
    );
  }
}

export default TruYooProducts;
