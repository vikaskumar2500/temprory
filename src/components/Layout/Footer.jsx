import React from "react";
import image from "../../assets/images/Facebook.png";
import image2 from "../../assets/images/Spotify.png";
import image3 from "../../assets/images/youtube.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-title">The Generics</div>
      <div className="footer-icons">
        <ul>
          <li>
            <a
              className="footer-icon youtube"
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image3} alt="YouTube" />
            </a>
          </li>
          <li>
            <a
              className="footer-icon spotify"
              href="https://spotify.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image2} alt="Spotify" />
            </a>
          </li>
          <li>
            <a
              className="footer-icon facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image} alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
