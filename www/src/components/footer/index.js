import { Link } from "gatsby";
import React from "react";
import "./style.scss";

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <p>
        Join us on{" "}
        <a href="https://github.com/boisejs/" target="_blank">
          <strong>on GitHub</strong>
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
