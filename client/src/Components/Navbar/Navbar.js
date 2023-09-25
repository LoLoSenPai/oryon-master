import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import cartIcon from "../FloatingCart/shopping-cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import FloatingCart from "../FloatingCart/FloatingCart";
import myNavLogo from "../../images/logo.svg";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navbarClasses = scrolled ? "navbar scrolled" : "navbar";

  const toggleBtnRef = useRef(null);
  const toggleBtnIconRef = useRef(null);
  const dropDownMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleBtnClick = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };  

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(event.target)) {
      if (!toggleBtnRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
  };  

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const imgNavUrl = `${myNavLogo}?${new Date().getTime()}`;

  // Cart Icon
  const shoppingCart = useSelector(state => state)

  let totalItems = 0;
  for (const item of shoppingCart.cart) {
    totalItems += item.quantity;
  }

  return (
    <header>
      <div className={navbarClasses}>
        <div className="logo">
          <Link to="/" className="nav-link">
            <img className='logo-footer' src={imgNavUrl} alt="logo" />
          </Link>
        </div>
        <ul className="links">
          <li><Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/collections" className="nav-link" onClick={handleLinkClick}>Collections</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={handleLinkClick}>About Us</Link></li>
        </ul>
        <div className="floating-cart">
          <FloatingCart />
        </div>
        <div className="toggle_btn" ref={toggleBtnRef} onClick={handleToggleBtnClick}>
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} ref={toggleBtnIconRef}></i>
        </div>
      </div>
      <div className={`dropdown_menu ${menuOpen ? "open" : ""}`} ref={dropDownMenuRef}>
        <ul>
          <li><Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/collections" className="nav-link" onClick={handleLinkClick}>Collections</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="/shoppingCart" className="nav-link nav-link-cart" onClick={handleLinkClick}>
                <div className="img-notif-container img-notif-container-navbar">
                <img className="cart-icon cart-icon-navbar" src={cartIcon} alt="icône cadi" />
                <span className="notif notif-navbar">{totalItems}</span>
              </div>
            </Link>
          </li>
        {/* <li><a href="/login" className="action_btn">Connect Wallet</a></li> */}
        </ul>
      </div>
    </header>
  );
}