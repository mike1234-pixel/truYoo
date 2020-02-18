import React from 'react';

class HomePageVideo extends React.Component {

    render() {

        let companyName = 'truYoo';

        return (
            <div>
            <div id="container1"></div>
            <div id="videoText">  
            <h1 className="videoText">Welcome to {companyName}</h1>
            <p className="videoText">We are {companyName}. {companyName} is truly about <em>yoo</em>. Our brand is about empowering women to become the masters of their own destiny, and to ditch the 9-5. {companyName} gives you the opportunity to become an independent distributor of {companyName} products. Click to find out more. </p>
            </div>  
            
            <video id="HomePageVideo" poster={require('./Images-and-videos/coverpic.jpg')} autoPlay muted loop>
                <source src={require('./Images-and-videos/covervid.mp4')} type="video/mp4"></source>
            </video>
            </div>
        )
    }
};

export default HomePageVideo 

/*                 <video id="HomePageVideo" poster="./Images-and-videos/Pexels-Videos-1672800_Moment.jpg" autoPlay muted loop>
                    <source src={this.state.videoURL} type="video/mp4"></source>
                </video>
                {require('./coverpic.png')}
                */