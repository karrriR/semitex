import "./Header.css";
import logo from "../../images/logo/logo.png";
import Navigation from "../Navigation/Navigation"
import contactLogo from "../../images/icons/contact-icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Логотип" className="header__logo" />
      </div>
      <Navigation />
      <div className="header__contact">
        <img src={contactLogo} alt="Иконка телефона" className="header__contact-logo" />
        <span className="header__contact-number">+7 (812) <b>313--58--45</b></span>
      </div>
    </header>
  );
}

export default Header;