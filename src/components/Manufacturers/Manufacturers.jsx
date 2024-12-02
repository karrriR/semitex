import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Manufacturers.css";
import prevArrow from "../../images/icons/icon-prev-arrow.png"
import nextArrow from "../../images/icons/icon-next-arrow.png"

function Manufacturers() {
    const manufacturers = [
        { src: `${process.env.PUBLIC_URL}/images/manufacturers/manufacturer1.png`, alt: "Производитель 1" },
        { src: `${process.env.PUBLIC_URL}/images/manufacturers/manufacturer2.png`, alt: "Производитель 2" },
        { src: `${process.env.PUBLIC_URL}/images/manufacturers/manufacturer3.png`, alt: "Производитель 3" },
        { src: `${process.env.PUBLIC_URL}/images/manufacturers/manufacturer4.png`, alt: "Производитель 4" },
        { src: `${process.env.PUBLIC_URL}/images/manufacturers/manufacturer5.png`, alt: "Производитель 5" },
    ];

    const PrevArrow = ({ onClick }) => (
        <button className="manufacturers__arrow manufacturers__arrow-left" onClick={onClick}>
            <img src={prevArrow} alt="Перелистнуть назад" />
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button className="manufacturers__arrow manufacturers__arrow-right" onClick={onClick}>
            <img src={nextArrow} alt="Перелистнуть вперед" />
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1910,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <section className="manufacturers">
        <h2 className="manufacturers__title">Наши производители</h2>
        <div className="manufacturers__slider">
            <Slider {...settings}>
                {manufacturers.map((manufacturer, index) => (
                    <div key={index} className="manufacturers__images">
                        <img
                            src={manufacturer.src}
                            alt={manufacturer.alt}
                            className="manufacturers__image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
        <p className="manufacturers__description">
            Lorem ipsum dolor sit amet consectetur. Non eget blandit in euismod
            felis id quisque nunc. Non orci lacus elit mauris velit gravida
            imperdiet id. Ipsum pulvinar ac ut sociis. Sed magna gravida consequat
            et euismod aenean quis mauris. Ut etiam egestas ultrices faucibus
            ultrices nisl enim consequat faucibus. Nibh id leo ullamcorper eleifend.
            Id at commodo interdum et leo.
        </p>
        </section>
    );
}

export default Manufacturers;
