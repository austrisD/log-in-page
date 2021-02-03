import React from "react";
import Pineapple from "../assets/pineapple.svg";
import PineappleText from "../assets/pineapple._logo.svg";

const Header = () => {
  return (
    <>
      <header className="header">
          <div className="header__logo">
            <Pineapple className="logo" />
            <PineappleText className="logoText" />
          </div>
          <nav className="navbar">
            <a href="#">About</a>
            <a href="#">How it works</a>
            <a href="#">Contact</a>
          </nav>
      </header>
    </>
  );
};

export default Header;
