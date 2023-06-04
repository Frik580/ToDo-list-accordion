import "./Header.css";
import img from "../../images/vector.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-pic" />
        <p className="header__logo-title">Проект</p>
      </div>
      <div className="header__user">
        <img src={img} className="header__image" alt="Колокольчик" />
        <div className="header__user-pic" />
        <div className="header__conteiner">
          <p className="header__user-name">Иванов В. А.</p>
          <p className="header__user-job">Должность</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
