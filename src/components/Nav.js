import React, { Component } from 'react';
import { Link } from "react-router-dom";
import StyledNav from "../styles/Nav";

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <div class="logo">Share</div>
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </StyledNav>
    )
  }
}

export default Nav;