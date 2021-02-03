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
  const [FacebookIcon, setFacebookIcon] = useState(<Facebook__normal/>);
  const [TwitterIcon, setTwitterIcon] = useState(<Twitter__normal/>);
  const [InstagramIcon, setInstagramIcon] = useState(<Instagram__normal/>);
  const [YoutubeIcon, setYoutubeIcon] = useState(<Youtube__normal/>);
  return (
    <footer className="footer">
      <a
        href="#"
        className="facebook__icon social__icon"
        onClick={() => {
          setFacebookIcon(<Facebook__pressed />);
        }}
        onMouseEnter={() => {
          setFacebookIcon(<Facebook__hover />);
        }}
        onMouseLeave={() => {
          setFacebookIcon(<Facebook__normal/>);
        }}
      >
        {FacebookIcon}
      </a>

      <a
        href="#"
        className="twitter__icon social__icon"
        onClick={() => {
          setTwitterIcon(<Twitter__pressed/>);
        }}
        onMouseEnter={() => {
          setTwitterIcon(<Twitter__hover/>);
        }}
        onMouseLeave={() => {
          setTwitterIcon(<Twitter__normal/>);
        }}
      >
        {TwitterIcon}
      </a>

      <a
        href="#"
        className="instagram__icon social__icon"
        onClick={() => {
          setInstagramIcon(<Instagram__pressed/>);
        }}
        onMouseEnter={() => {
          setInstagramIcon(<Instagram__Hover/>);
        }}
        onMouseLeave={() => {
          setInstagramIcon(<Instagram__normal/>);
        }}
      >
        {InstagramIcon}
      </a>

      <a
        href="#"
        className="Youtube__icon social__icon"
        onClick={() => {
          setYoutubeIcon(<Youtube__pressed/>);
        }}
        onMouseEnter={() => {
          setYoutubeIcon(<Youtube__hover/>);
        }}
        onMouseLeave={() => {
          setYoutubeIcon(<Youtube__normal/>);
        }}
      >
        {YoutubeIcon}
      </a>
    </footer>
  );
};

export default Footer;
