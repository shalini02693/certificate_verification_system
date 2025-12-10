import React from "react";
import logo from "../Images/chain.png";

function Homepage(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        This is the homepage of Certification webpage.
        <br />
      </p>
    </header>
  );
}

export default Homepage;
