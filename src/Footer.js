import React from 'react';

class Footer extends React.Component {
    render() {

        let companyName = 'truYoo';
        let thisYear = new Date().getFullYear();

        return (
        <div id="footer">
            <p id="footer-copyr"><footer>&copy; {companyName} {thisYear}. All Rights Reserved</footer></p>
            <ul id="footer-list-one">
                <li>About {companyName}</li>
                <li>Shop {companyName}</li>
                <li>Your {companyName} Business</li>
                <li>Join {companyName}</li>
            </ul>
            <ul id="footer-list-two">
                <li>Terms and Conditions</li>
                <li>Retailer Login</li>
                <li>Consumer Returns Policy</li>
            </ul>
        </div>
        )
    }
}

export default Footer