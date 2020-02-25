import React from "react";
import { Button } from "react-bootstrap";

class RandomQuoteMachine extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomNum = Math.floor(Math.random() * 19);

    const randomQuotes = [
      "'The future belongs to those who believe in the beauty of their dreams' - Eleanor Roosevelt",
      "'Make your life a masterpiece, imagine no limitations on what you can be, have or do.' - Brian Tracy",
      "'Act as if you what you do makes a difference, IT DOES.' - William James",
      "'There is only one thing that makes a dream impossible to achieve: the fear of failure' - Paulo Coelro",
      "'Leaders spend 5% of their time on the problem and 95% of their time on the solution. Get over it & crush it!' - Tony Robbins",
      "'The way get started is to quit talking and begin doing.' - Walt Disney",
      "'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.' - Steve Jobs",
      "'Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.' - Mohnish Pabrai",
      "'We generate fears while we sit. We overcome them by action.' - Dr. Henry Link",
      "'Whether you think you can or think you can’t, you’re right.' - Henry Ford",
      "'Security is mostly a superstition. Life is either a daring adventure or nothing.' - Helen Keller",
      "'The Man Who Has Confidence In Himself Gains The Confidence Of Others.' - Hasidic Proverb",
      "'What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.' - Don Zimmer",
      "'You Are Never Too Old To Set Another Goal Or To Dream A New Dream.' - C.S. Lewis",
      "'The Future Belongs To The Competent. Get Good, Get Better, Be The Best!' - Brian Tracy",
      "'Things Work Out Best For Those Who Make The Best Of How Things Work Out.' - John Wooden",
      "'One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals.' - Michelle Obama",
      "'Today’s Accomplishments Were Yesterday’s Impossibilities.' - Robert H. Schuller",
      "'The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.' - Steve Jobs",
      "'Your attitude, not your aptitude, will determine your altitude.' - Zig Ziglar"
    ];

    this.setState(state => ({
      quote: randomQuotes[randomNum]
    }));
  }

  render() {
    return (
      <div className="quote-machine">
        <h2>Inspo Machine</h2>
        <Button onClick={this.handleClick}>Click for inspiration</Button>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default RandomQuoteMachine;

/*
initialise state with property of quote and value of empty string
button - onClick - call this handleClick
handleClick 
1. Generates a random number between 0 and 19
2. Contains 20 quotes
3. Sets this.state.quote to a random index in the randomQuotes array
State is changed to a random quote
h1 displays whatever this.state.quote value currently is.
*/
