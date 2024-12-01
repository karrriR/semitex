import "./Footer.css";
import logo from "../../images/logo/logo.png";
import Navigation from "../Navigation/Navigation";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__main-box">
                <div className="footer__logo">
                    <img src={logo} alt="Логотип" className="footer__logo" />
                </div>
                <Navigation excludeFAQ={true} />
                <button className="footer__button-contact">ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
        </footer>
    );
}

export default Footer;