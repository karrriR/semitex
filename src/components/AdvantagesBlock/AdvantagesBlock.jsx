import AdvantageCard from "../AdvantageCard/AdvantageCard";
import "./AdvantagesBlock.css";

function AdvantagesBlock() {
    const advantages = [
        {
            logo: "/static/media/quality-products-icon.ab1a98363c098a85637f.png",
            title: "Качественная продукция",
            description: "Все наши товары сертифицированы и имеют сопроводительную документацию.",
        },
        {
            logo: "/static/media/individual-approach-icon.90e5a72980b93bddef46.png",
            title: "Индивидуальный подход",
            description: "Возможность изготовления компонентов специально для вас на заводах-изготовителя.",
        },
        {
            logo: "/static/media/free-shipping-icon.5b6e139f0e8edc62b1d0.png",
            title: "Бесплатная доставка",
            description: "При наличии товара на складе и заказе от 10 000 рублей, доставим бесплатно по Москве и СПБ в течение 2х часов.",
        },
        {
            logo: "/static/media/analogues-icon.e6cd2f958099379a93c5.png",
            title: "Подбираем аналоги",
            description: "Поможем подобрать аналоги популярных европейских брендов в условиях санкций.",
        },
        {
            logo: "/static/media/spare-parts-icon.b98d597c92990157fae5.png",
            title: "Резервный запас компонентов",
            description: "Хранение товара на наших складах для постоянных клиентов.",
        },
        {
            logo: "/static/media/flexible-system-icon.ef5730cec9691746cf58.png",
            title: "Гибкая система оплаты",
            description: "Отсрочка платежей для постоянных клиентов.",
        },
    ];

    return (
        <section className="advantages-block">
            <h2 className="advantages-block__title">Почему с нами выгодно</h2>
            <p className="advantages-block__description">С 1996 года мы занимаемся оптовыми поставками электронных компонентов от ведущих производителей из Европы 
            и Азии для Российских потребителей. </p>
            <div className="advantages-block__cards">
                {advantages.map((advantage, index) => (
                    <AdvantageCard 
                    key={index} 
                    logo={advantage.logo} 
                    title={advantage.title} 
                    description={advantage.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default AdvantagesBlock;