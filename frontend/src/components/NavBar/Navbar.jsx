import "./Navbar.css"; 
import React from "react";
import logo from "../../components/logo.png";
// import { useSelector } from "react-redux";

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="logo-wrapper">
      <img src={logo} alt="EcoShop Logo" className="nav-logo-image" />

        <div className="header-text-wrapper">
          <h1 className="header-text">GoGREEN</h1>
          <p className="sub-header-text">by carbonsense</p>
        </div>
      </div>
      <div className="nav-links">
        <div className="nav-link">Plan a Trip</div>
        <div className="nav-link">Vehicles</div>
        <div className="nav-link">Book</div>
        <div className="nav-link">Rewards</div>
        <div className="nav-link">How does it Work</div>
        <div className="nav-link">Who We Are</div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search.." className="search-input" />
      </div>
    </div>
  );
};

export default Navbar;
