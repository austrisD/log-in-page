import React from "react";
import Pineapple from "../assets/pineapple.svg";
import PineappleText from "../assets/pineapple._logo.svg";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <div className="topNavBar">
          <div className="header__logo">
            <Pineapple className="logo" />
            <PineappleText className="logoText" />
          </div>
          <nav className="navbar">
            <a href="#">About</a>
            <a href="#">how it works</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
      <div
        className="desktop__background"
        style={{
          backgroundImage: `url(${props.Background})`,
        }}
      ></div>
    </>
  );
};

export default Header;
