import { Link } from "react-router-dom";

import Hamburger from "../Lib/Icons/Hamburger";
import Logo from "../Lib/Icons/Logo";
import Search from "../Lib/Icons/Search";
import Camera from "../Lib/Icons/Camera";
import Apps from "../Lib/Icons/Apps";
import User from "../Lib/Icons/User";
import Bell from "../Lib/Icons/Bell";

import useNav from "../../Hooks/useNav";

import "./Header.scss";

const Header = () => {
  const [state, setState] = useNav();
  
  return (
    <header className="header">
      <div className="container">
        <button className="header__button" name="hamburger" onClick={() => setState(!state)}>
          <Hamburger />
        </button>

        <Link className="header__link" to={"/"}>
          <Logo />
        </Link>

        <form className="header__form">
          <input className="header__form__input" type="text" placeholder="Search" required />

          <button className="header__form__button">
            <Search />
          </button>
        </form>

        <ul className="header__buttons">
          <li className="header__item">
            <button className="header__button">
              <Camera />
            </button>
          </li>
          <li className="header__item">
            <button className="header__button">
              <Apps />
            </button>
          </li>
          <li className="header__item">
            <button className="header__button">
              <Bell />
            </button>
          </li>
        </ul>

        <button className="header__profile">
          <User width={40} height={40} />
        </button>
      </div>
    </header>
  );
};

export default Header;
