import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";

class ConsumerReturnsPolicy extends React.Component {
  render() {
    let companyName = "truYoo";

    return (
      <div id="consumer-returns-body">
        <Navtwo />
        <div id="consumer-returns">
          <h1>CONSUMER RETURNS POLICY</h1>
          <p>
            PLEASE READ THIS CONSUMER RETURNS POLICY IF YOU ARE UNSATISFIED WITH{" "}
            {companyName} PRODUCTS THAT YOU PURCHASED FROM A {companyName}{" "}
            INDEPENDENT DISTRIBUTOR.
          </p>
          <p>
            If at any time during the first 30 days you are not completely
            satisfied or happy with your purchase, please contact the
            Independent {companyName} Distributor who sold you the product and
            provide your original purchase receipt to receive a full refund,
            credit or *exchange. Refunding faulty or dangerous products is the
            legal responsibility solely of the {companyName} independent
            distributor, and not of {companyName} INTERNATIONAL OF AMERICA INC
            ("{companyName}").
          </p>
          <p>
            If at any time in the first 90 days you are not completely satisfied
            or happy with your purchase, please contact any Independent{" "}
            {companyName} Distributor and provide your original purchase receipt
            to receive a credit or *exchange.
          </p>
          <p>
            Our policy applies to all unaltered {companyName} products sold to
            retail consumers in the United States by an authorized {companyName}{" "}
            Independent Distributor and excludes non-apparel and promotional
            items not sold at retail.
          </p>
          <p>
            If your product has a manufacturing defect in materials or
            workmanship, you may be entitled to a return under our limited
            warranty. Please see our limited warranty for details.
          </p>
          <p>
            First things first: You will need to contact the Independent{" "}
            {companyName} Distributor who sold you the product. The Independent
            Fashion Retailer will be able to best serve you with any return,
            refund, credit or *exchange you may need. Please provide your
            original purchase receipt to your {companyName} Independent
            Distributor for assistance with your return, refund, credit or
            *exchange.
          </p>
          <p>
            If for some reason, you are not able to connect with your
            Independent {companyName} Distributor or your Independent{" "}
            {companyName} Distributor is no longer active, please feel free to
            donate your unwanted / defective / dangerous products to Goodwill of
            America. We accept no legal liability for any injuries, rashes,
            fevers or mortalities that may or may not have come as a result of
            using {companyName} products. Your Independent {companyName}{" "}
            Distributor retains personal indemnity for all sales made by that
            Distributor, regardless of whether the Independent {companyName}{" "}
            Distributor is still in operation. The recommended advice in this
            instance is to start legal proceedings against your {companyName}{" "}
            Independent Distributor, as {companyName} INTERNATIONAL OF AMERICA
            INC ("{companyName}") retains no legal liability.
          </p>
          <p>
            Disparaging comments about {companyName} made in person, on social
            media or via other channels {companyName} will consider to be
            libellious / slanderous, and will pursue necessary legal action
            against those responsible for those comments.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ConsumerReturnsPolicy;
