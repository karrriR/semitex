import "./BannerContentBlock.css";
import BannerAdvantages from "../BannerAdvantages/BannerAdvantages";
import CallbackForm from "../CallbackForm/CallbackForm";

function BannerContentBlock () {
    return (
        <div className="banner-block">
            <div className="banner-block__main-content">
                <h1 className="banner-block__title"><span className="banner-block__title-large">Оптовые поставки</span> <span className="banner-block__title-low">электронных компонентов</span> ИЗ КИТАЯ день в день</h1>
                <p className="banner-block__text">Комплексные поставки электронных компонентов и оборудования. Подберем аналоги популярных брендов из Европы в условиях санкций.</p>
                <BannerAdvantages />
            </div>
            <CallbackForm />
        </div>
    );
}

export default BannerContentBlock;