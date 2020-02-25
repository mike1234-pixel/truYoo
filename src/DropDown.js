import React from "react";

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
  }

  render() {
    return (
      <div className="dropdown">
        <ul>
          <li>LIST ITEM</li>
          <li>LIST ITEM</li>
          <li>LIST ITEM</li>
          <li>LIST ITEM</li>
        </ul>
      </div>
    );
  }
}

export default DropDown;
