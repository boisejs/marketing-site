import React from "react";
import "./style.scss";

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <p>
        Join us on{" "}
        <a
          href="https://github.com/boisejs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>GitHub</strong>
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
