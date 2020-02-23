import React from 'react';

class CountdownTimer extends React.Component {
    constructor() {
        super() 
        this.state = {
                seconds: 0,   
                minutes: 57  
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
          const { seconds, minutes } = this.state
          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1
            }))
          }
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(this.myInterval)
            } else {
              this.setState(({ minutes }) => ({
                minutes: minutes - 1,
                seconds: 59
              }))
            }
          }
        }, 1000)
      }

    render() {

        return (
            <div id="countdown-timer">
                <p>Our truYoo Independent Distributor Starter Package is <strike>$10,000</strike> $3,000. Offer ends:</p>
                <p className="red-text">
                    { this.state.minutes }:{ this.state.seconds < 10 ? `0${ this.state.seconds  }` : this.state.seconds  }
                </p>
            </div>
        )
    }
}

export default CountdownTimer

