import React from 'react';
import Navtwo from "./Navtwo.js";
import HomePageVideo from "./HomePageVideo.js";
import SectionOne from "./SectionOne.js";
import HomeCarousel from "./HomeCarousel.js";
import Footer from "./Footer.js";

class Home extends React.Component {
    render() {
        return (
            <div id="homebody">
                <Navtwo />
                <HomePageVideo />
                <SectionOne />
                <HomeCarousel />
                <Footer />
            </div>
        )
    }
}

export default Home