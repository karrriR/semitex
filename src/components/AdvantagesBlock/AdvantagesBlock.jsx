import AdvantageCard from "../AdvantageCard/AdvantageCard";
import "./AdvantagesBlock.css";

function AdvantagesBlock() {
    const advantages = [
        {
            logo: "/images/icons/advantages-icon/quality-products-icon.png",
            title: "Качественная продукция",
            description: "Все наши товары сертифицированы и имеют сопроводительную документацию.",
        },
        {
            logo: "/images/icons/advantages-icon/individual-approach-icon.png",
            title: "Индивидуальный подход",
            description: "Возможность изготовления компонентов специально для вас на заводах-изготовителя.",
        },
        {
            logo: "/images/icons/advantages-icon/free-shipping-icon.png",
            title: "Бесплатная доставка",
            description: "При наличии товара на складе и заказе от 10 000 рублей, доставим бесплатно по Москве и СПБ в течение 2х часов.",
        },
        {
            logo: "/images/icons/advantages-icon/analogues-icon.png",
            title: "Подбираем аналоги",
            description: "Поможем подобрать аналоги популярных европейских брендов в условиях санкций.",
        },
        {
            logo: "/images/icons/advantages-icon/spare-parts-icon.png",
            title: "Резервный запас компонентов",
            description: "Хранение товара на наших складах для постоянных клиентов.",
        },
        {
            logo: "/images/icons/advantages-icon/flexible-system-icon.png",
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