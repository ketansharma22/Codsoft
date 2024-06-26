import React from "react";
import { Link } from "react-scroll";
import "../styling/Header.css";
function Header() {
  return (
    <div id="header">
      <nav>
        <div id="logo">/Ketan</div>
        <div id="items">
          <ul>
            <Link id="profilee" to="profile" style={{cursor:"pointer"}} offset={-20} duration={1000} spy={true} smooth={true}>
              Profile
            </Link>
            <Link id="profil" to="expertise" style={{cursor:"pointer"}} offset={-20} duration={1000} smooth={true} spy={true}>
              My Expertise
            </Link>
            <Link  id="profil" to="projects" style={{cursor:"pointer"}} offset={-30} duration={1000} smooth={true} spy={true}>
              Projects
            </Link>
            <Link id="profil" to="accomplishments" style={{cursor:"pointer"}} offset={-20} duration={1000} smooth={true} spy={true}>
              Accomplishments
            </Link>
            <Link id="profil" to="contactme" style={{cursor:"pointer"}} offset={-20} duration={1000} smooth={true} spy={true}>
              Contact Me
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
