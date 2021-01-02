import React, { useContext } from 'react';
import LoginControlBtn from '../LoginControltBtn/LoginControlBtn';
import {LoginStateContext} from '../Contexts/LoginStateContext';

function Navigation () {
  const isLoggedIn = useContext(LoginStateContext);
    return (
        <nav className="navigation">
            <ul className="navigation__menu">
                <li className="navigation__menu-item navigation__menu-item_clicked"><a className={`navigation__link ${isLoggedIn && 'navigation__link_loggedin'}`} href="/">Главная</a></li>
                <li className="navigation__menu-item"><a className={`navigation__link ${isLoggedIn && 'navigation__link_loggedin'}`} href="/saved-articles">Сохранённые статьи</a></li>
                <li className="navigation__menu-item"><LoginControlBtn /></li>
            </ul>
        </nav>
    )
}

export default Navigation;