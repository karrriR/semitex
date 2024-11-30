import "./AdvantageCard.css";

function AdvantageCard({ logo, title, description}) {
    return(
        <div className="advantage-card">
            <img src={logo} alt={title} className="advantage-card__logo" />
            <h3 className="advantage-card__title">{title}</h3>
            <p className="advantage-card__description">{description}</p>
        </div>
    );
}

export default AdvantageCard;