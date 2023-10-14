import React, { useState } from "react";
// import logo from "./img/navbar-img.webp";
import logo from './img/navLogO.png';
import "./Navbar.css";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import ContactForm from "./ContactForm";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <div className="Row">
        <div className="Left">
          <p className="Para fw-bold" style={{fontSize: "16px"}}>
            Free marketing packgaes for non-profit orginzations
          </p>
        </div>
        <div className="Right">
          <p className="text"><b style={{fontSize: "16px"}}>Follow us on</b></p>
          <p className="Icon" style={{display: "flex",marginRight:"30px"}}>
          <a className="Icons" href='https://www.facebook.com/websquadsservices'>
            <FaFacebook className="Icons" style={{ height: "15px", marginRight: "7px", marginLeft:"7px" }} />
            </a>
            <a className="Icons" href="">
            <FaGoogle className="Icons" style={{ height: "15", marginRight: "7px" }} />
            </a>

            <a className="Icons" href='https://www.linkedin.com/company/websquads-services/mycompany/'>
            <FaLinkedin className="Icons" style={{ height: "15", marginRight: "7px" }} />
            </a>
            <a className="Icons" href='https://instagram.com/thewebsquads?igshid=MzRlODBiNWFlZA=='>
            <FaInstagram className="Icons" style={{ height: "15", marginRight: "7px" }} />
            </a>
            
          </p>
        </div>
      </div>
      <nav className="main-nav rounded-2">
        <div className="logo">
          <NavLink to="/">
            <img className=" logo-img mt-3" src={logo} alt="img" />
          </NavLink>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul
            className="Navitem"
            style={{ display: "flex"}}
          >
            <li>
              <NavLink to="/website" style={{ textDecoration: "none", color: "gray", marginTop: "-25px" }}>
                Website
              </NavLink>
            </li>
            <li>
              <NavLink to="/seo" style={{ textDecoration: "none", color: "gray", marginTop: "-25px" }}>
                SEO
              </NavLink>
            </li>

            <li>
              <NavLink to="/Branding" style={{ textDecoration: "none", color: "gray",marginTop: "-25px" }}>
                Branding
              </NavLink>
            </li>
            <li>
              <NavLink to="/UI/UX" style={{ textDecoration: "none", color: "gray",marginTop: "-25px" }}>
                UI/UX
              </NavLink>
            </li>
            <li>
              <NavLink to="/About us" style={{ textDecoration: "none", color: "gray",marginTop: "-25px" }}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" style={{ textDecoration: "none", color: "gray",marginTop: "-25px" }}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" style={{ textDecoration: "none", color: "gray",marginTop: "-25px" }}>
                Contact us
              </NavLink>
            </li>
           
          </ul>
        </div>

        <div className="social-media" style={{ gridColumn: "5/6" }}>
          <ul className="social-media-desktop">
            <li>
              <NavLink to="/ContactForm">
              <button
                style={{
                  borderRadius: "50px",
                  backgroundColor:'#F6c133',
                  padding: "10px 20px",
                  marginRight: "30px",
                  border: "orange",
                   whiteSpace: "nowrap",
                   fontSize:'62.5%',
                   fontWeight:"500"
                }}
              >
                Book a free consultation
              </button>
                </NavLink > 
              
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;