import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoImgSvg from "../../images/logo.svg";
import "./navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="company-logo">
        <img src={logoImgSvg} alt="Code Well Studio" />
      </Link>
      <div className="items">
        <Link to="/" className="item">
          Home
        </Link>
        <HashLink to="/#projects" className="item">
          Projects
        </HashLink>
        <Link to="/about" className="item">
          About us
        </Link>
        <HashLink to="/#contact" className="item">
          Get in touch
        </HashLink>
      </div>
    </nav>
  );
}

export default Navigation;
