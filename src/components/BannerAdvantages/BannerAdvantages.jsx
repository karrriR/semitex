import "./BannerAdvantages.css";
import checkIcon from "../../images/icons/check-icon.png";

function BannerAdvantages() {
    const advantages = [
        "Отсрочка платежей для постоянных клиентов",
        "Бесплатная доставка по Москве и СПБ в течение 2х часов",
        "Квалифицированный персональный менеджер",
    ];
    return (
        <div className="advantages">
            <ul className="advantages__list">
                {advantages.map((advantage, index) => (
                    <li key={index} className="advantages__item">
                        <img src={checkIcon} alt="Преимущество" />
                        {advantage}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BannerAdvantages;