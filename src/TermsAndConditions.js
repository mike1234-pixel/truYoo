import React from "react";
import Navtwo from "./Navtwo.js";
import Footer from "./Footer.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class TermsAndConditions extends React.Component {
  render() {
    let companyName = "truYoo";

    return (
      <div id="terms-and-cons-body">
        <Navtwo />
        <div id="terms-and-cons">
          <h1>TERMS OF BUSINESS</h1>
          <p>
            PLEASE READ THESE TERMS OF USE AND THE {companyName} INTERNATIONAL
            OF AMERICA INC ("{companyName}") TERMS OF BUSINESS.
          </p>
          <p>
            These Terms of Use are an agreement (the “Agreement”) between{" "}
            {companyName}, a North Dakota corporation (the “Company,” “we” or
            “us”) and you ("you" or "User"). This Agreement sets forth the legal
            terms and conditions governing your use of this website and each
            Independent Distributor’s Platform and each Web Property
            (collectively referred to herein as the "Site") and for your
            purchase and/or use of any {companyName} goods, services
            (collectively referred to hereinafter as, “Offerings”). This
            Agreement also provides information on how to become a {companyName}{" "}
            Independent Distributor.
          </p>
          <p>
            If you do not agree to be bound by this Agreement, do not access or
            otherwise use the Site or participate in any of the Offerings. If
            you are dissatisfied with the Site or other Offerings, your sole and
            exclusive remedy is to stop using the Site or Offerings
          </p>
          <p>
            {companyName} products and services are sold through {companyName}’s
            network of Independent Distributors. To purchase {companyName} goods
            or services, you do not have to become a {companyName} Independent
            Distributor. If, however, you are interested in starting your own
            home-based business as an {companyName} Independent Distributor,
            please read the following.
          </p>
          <p>
            {companyName} guarantees and does not guarantee the quality of any
            product which carries the {companyName} name and do not certify that
            the products manufactured for it meet high standards of freshness
            and purity for customer use. We are confident that our customers
            will (or will not) find our products satisfactory in every way.
          </p>
          <p>
            BY ACCESSING THIS SITE, YOU UNDERSTAND THAT YOU ARE WAIVING RIGHTS
            WITH RESPECT TO CLAIMS THAT ARE AT THIS TIME UNKNOWN OR UNSUSPECTED,
            AND IN ACCORDANCE WITH SUCH WAIVER, YOU ACKNOWLEDGE THAT YOU HAVE
            READ AND UNDERSTAND, AND HEREBY EXPRESSLY WAIVE, THE BENEFITS OF
            SECTION 1542 OF THE CIVIL CODE OF CALIFORNIA, AND ANY SIMILAR LAW OF
            ANY STATE OR TERRITORY, WHICH PROVIDES AS FOLLOWS: "A GENERAL
            RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW
            OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE
            RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED
            HIS OR HER SETTLEMENT WITH THE DEBTOR."
          </p>
          <p>
            YOU, AS THE INDEPENDENT DISTRIBUTOR FOR {companyName} INTERNATIONAL
            OF AMERICA INC ("{companyName}") ACCEPT ALL LEGAL LIABILITY AND
            INDEMNITY FOR ANY CLAIMS MADE BY CONSUMERS AS A RESULT OF USING{" "}
            {companyName} PRODUCTS, INCLUDING ILL HEALTH OR DEATH.
          </p>
          <Link to="/RetailerLogin">
            <Button className="pink-btn">
              Start your journey as a {companyName} independent distributor
              today! xx
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default TermsAndConditions;

// the button should just be a link to the signup path
