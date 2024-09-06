import React from "react";
import "./NavBar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar-container">
      <nav className="navBar">
        <ul className="rez">
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <FaInstagramSquare />
          </li>
          <li>
            <FaTwitterSquare />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>

          <li>
            <Link to="/realisation">Realisation</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
