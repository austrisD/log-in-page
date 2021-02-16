import React, { useState } from "react";

import Facebook__hover from "../assets/facebook__hover.svg";
import Facebook__normal from "../assets/facebook__normal.svg";
import Facebook__pressed from "../assets/facebook__pressed.svg";

import Instagram__normal from "../assets/instagram__normal.svg";
import Instagram__Hover from "../assets/instagram__hover.svg";
import Instagram__pressed from "../assets/instagram__pressed.svg";

import Twitter__hover from "../assets/twitter__hover.svg";
import Twitter__normal from "../assets/twitter__normal.svg";
import Twitter__pressed from "../assets/twitter__pressed.svg";

import Youtube__normal from "../assets/youtube__normal.svg";
import Youtube__hover from "../assets/youtube__hover.svg";
import Youtube__pressed from "../assets/youtube__presed.svg";

const Footer = () => {
  const [FacebookIconClicked, setFacebookIconClicked] = useState(false);
  const [TwitterIcon, setTwitterIcon] = useState(false);
  const [InstagramIcon, setInstagramIcon] = useState(false);
  const [YoutubeIcon, setYoutubeIcon] = useState(false);
  return (
    <footer className="footer">
      <a
        href="#"
        className="facebook__icon social__icon"
        onClick={() => {
          setFacebookIconClicked(true);
        }}
        onMouseOut={() => {
          setFacebookIconClicked(false);
        }}
      >
        {FacebookIconClicked === true ? (
          <Facebook__pressed />
        ) : (
          <>
            <Facebook__normal className="Facebook__normal" />
            <Facebook__hover className="Facebook__hover" />
          </>
        )}
      </a>
      <a
        href="#"
        className="twitter__icon social__icon"
        onClick={() => {
          setTwitterIcon(true);
        }}
        onMouseOut={() => {
          setTwitterIcon(false);
        }}
      >
        {TwitterIcon === true ? (
          <Twitter__pressed />
        ) : (
          <>
            <Twitter__normal className="Twitter__normal" />
            <Twitter__hover className="Twitter__hover" />
          </>
        )}
      </a>
      <a
        href="#"
        className="instagram__icon social__icon"
        onClick={() => {
          setInstagramIcon(true);
        }}
        onMouseOut={() => {
          setInstagramIcon(false);
        }}
      >
        {InstagramIcon === true ? (
          <Instagram__pressed />
        ) : (
          <>
            <Instagram__normal className="Instagram__normal" />
            <Instagram__Hover className="Instagram__Hover" />
          </>
        )}
      </a>

      <a
        href="#"
        className="Youtube__icon social__icon"
        onClick={() => {
          setYoutubeIcon(true);
        }}
        onMouseOut={() => {
          setYoutubeIcon(false);
        }}
      >
        {YoutubeIcon === true ? (
          <Youtube__pressed />
        ) : (
          <>
            <Youtube__normal className="Youtube__normal" />
            <Youtube__hover className="Youtube__hover" />
          </>
        )}
      </a>
    </footer>
  );
};

export default Footer;

//fix element hover 
