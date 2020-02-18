import React from 'react';
import { FaRegWindowRestore } from 'react-icons/fa'; // imports the window icon used inside the button on the nav
import { CSSTransition } from 'react-transition-group';

/* import { Container, Row, Col } from './my-app/node_modules/react-bootstrap'; */

class Navbar extends React.Component {

        constructor() {
            super() 
            this.state = {
                isNavBarVisible: true
            }; 
            this.handleClick = this.handleClick.bind(this);
        }
            handleClick() {
                this.setState(state =>({
                    isNavBarVisible: !state.isNavBarVisible
                }))
            } 

     render() {
         let navStyles = {
                  height: "100px",
                  backgroundColor: "#333",
                  color: "whitesmoke",
                  fontSize: "30px",
                  fontFamily: "Arial",
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "0px",
                  transition: "marginTop 2s ease-in"
                };

            let TruYooNavStyles = {
                fontFamily: "arial",
                marginTop: "15px" /*this helps vertically center the company name */
            }

            let NavListItemStyles = {
                listStyle: "none", /* removes bullet points from navbar list items*/
                display: "inline-block", /*horizontally orders the list items, default they are stacked vertically */
                marginRight: "30px", 
                marginLeft: "30px", 
                marginTop: "20px" /* margin vertically centers list items in navbar */
            }


       if (this.state.isNavBarVisible === false) {
            navStyles.marginTop = '-80px'; 
 
                   }

        return (
            <CSSTransition
            >
                        <div>
                            <nav style={navStyles} id="navbar">
                                <p style={TruYooNavStyles}>Troo Yu</p>
                                    <ul> 
                                     <li style={NavListItemStyles}>Text</li>
                                     <li style={NavListItemStyles}>Text</li>
                                     <li style={NavListItemStyles}>Text</li>
                                     <li style={NavListItemStyles}>Your Future, Your Legacy</li>
                                    </ul>
                            </nav>
                         <button onClick={this.handleClick}><FaRegWindowRestore /></button> 
                        </div>
            </CSSTransition>
        )
    }
}

// change the css so that on click margin-top = -50px;

export default Navbar

/* 
STEPS IN CREATING NAV BAR (so far)
0. Import React
1. Create a Navbar class component that extends React.Component
2. add the constructor() and super() to give your component access to the features of React('s component)
3. State is initialised and given a property of isNavbarVisible with a value of true
4. Create a basic navbar
5. Add a button to the navbar with an onClick event listener, which calls the handleClick function when button is clicked
6. Create handleclick() function which uses setState() to set the state to the opposite whatever the current state is. 
7. bind handleClick() function to the constructor so 'this' in handleClick() function refers to the this of the state object
8. Set some inline style objects for the styles of the various navbar elements.
9. Create a vanilla JS conditional (always between the render and return) with condition that if the value of this.state.isNavbarVisible is equivalent to false, change the marginTop css value in the navStyles object.
*/
