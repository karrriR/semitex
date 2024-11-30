import "./Navigation.css";

function Navigation() {
  const menuItems = [
    "Каталог",
    "Производители",
    "Для  кого мы работаем",
    "Сертификаты",
    "О нас",
    "FAQ",
    "Контакты",
  ];
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {menuItems.map((item, index) => (
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