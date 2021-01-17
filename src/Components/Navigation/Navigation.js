import React, { useContext } from 'react';
import LoginControlBtn from '../LoginControltBtn/LoginControlBtn';
import { LoginStateContext } from '../Contexts/LoginStateContext';
import { useLocation } from 'react-router-dom';

function Navigation ({ isMenuOpen, onLoginBtnClick }) {
  const isLoggedIn = useContext(LoginStateContext);
  const location = useLocation();
    return (
        <nav className={`navigation ${isMenuOpen && 'navigation_open'}`} >
            <ul className="navigation__menu">
                <li
                className={
                    `navigation__menu-item ${location.pathname === '/' ? 'navigation__menu-item_clicked' : 'navigation__saved-news-menu-item_clicked'}`
                }
                >
                    <a className={`navigation__link ${isLoggedIn && !isMenuOpen && 'navigation__link_loggedin'}`} href="/">Главная</a>
                </li>
                {
                    isLoggedIn && <li className="navigation__menu-item">
                        <a className={`navigation__link ${!isMenuOpen && 'navigation__link_loggedin'}`} href="/saved-articles">Сохранённые статьи</a>
                    </li>
                }
            </ul>
            <LoginControlBtn onAuthorizeClick = {onLoginBtnClick} />
            <div className={`navigation__shadow ${!isMenuOpen && 'navigation__shadow_invisible'}`}></div>
        </nav>
    )
}

export default Navigation;