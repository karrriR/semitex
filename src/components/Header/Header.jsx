import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../images/logo/logo.png";
import Navigation from "../Navigation/Navigation";
import contactLogo from "../../images/icons/contact-icon.svg";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header__main-box">
        <div className="header__logo">
          <img src={logo} alt="Логотип" className="header__logo" />
        </div>
        <Navigation />
        <div className="header__contact">
          <img src={contactLogo} alt="Иконка телефона" className="header__contact-logo" />
          <span className="header__contact-number">+7 (812) <b>313--58--45</b></span>
        </div>
      </div>
    </header>
  );
}

export default Header;