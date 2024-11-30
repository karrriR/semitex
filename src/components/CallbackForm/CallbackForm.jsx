import "./CallbackForm.css";
import privacyIcon from "../../images/icons/icon-privacy.png";

function CallbackForm() {
    return(
        <div className="callback">
            <div className="callback__container">
                <h2 className="callback__title">ЗАКАЖИТЕ <br/> ОБРАТНЫЙ ЗВОНОК</h2>
                <form className="callback__form">
                    <div className="callback__field">
                        <label htmlFor="name" className="callback__label">Ваше имя*</label>
                        <input type="text" id="name" name="name" className="callback__input" placeholder="Петров Петр" />
                    </div>
                    <div className="callback__field">
                        <label htmlFor="name" className="callback__label">Ваш номер*</label>
                        <input type="tel" id="phone" name="phone" className="callback__input" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <button type="submit" className="callback__button">Заказать звонок</button>
                    <p className="callback__note">
                        <img src={privacyIcon} alt="Иконка замка" className="callback__privacy-icon" />
                            Мы гарантируем конфиденциальность данных
                    </p>
                </form>
            </div>
        </div>
    );
}

export default CallbackForm;