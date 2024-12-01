import "./Navigation.css";

function Navigation({ excludeFAQ }) {
  const menuItems = [
    "Каталог",
    "Производители",
    "Для  кого мы работаем",
    "Сертификаты",
    "О нас",
    "FAQ",
    "Контакты",
  ];

  const filteredItems = excludeFAQ
    ? menuItems.filter(item => item !== "FAQ")
    : menuItems;

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {filteredItems.map((item, index) => (
          <li key={index} className="navigation__item">
            <a href="#" className="navigation__link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;