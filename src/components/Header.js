import React from 'react';
import Pineapple from "../assets/pineapple.svg";

const Header = () => {
    return (
      <header>
        <div className="logo">
          <img src={Pineapple} alt="company-logo" />
          <p>pineapple.</p>
        </div>
      </header>
    );
}
 
export default Header;