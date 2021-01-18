import React, { useContext } from 'react';
import LoginControlBtn from '../LoginControltBtn/LoginControlBtn';
import { LoginStateContext } from '../Contexts/LoginStateContext';
import { useLocation } from 'react-router-dom';

function Navigation ({ isMenuOpen, onLoginBtnClick }) {
  const isLoggedIn = useContext(LoginStateContext);
  const isInSavedNews = useLocation().pathname === '/saved-news';
    return (
        <nav className={`navigation ${isMenuOpen && 'navigation_open'}`} >
            <ul className="navigation__menu">
                <li
                className={
                    `navigation__menu-item ${isInSavedNews ? 'navigation__saved-news-menu-item_clicked' : 'navigation__menu-item_clicked'}`
                }
                >
                    <a className={`navigation__link ${isInSavedNews && !isMenuOpen && 'navigation__link_loggedin'}`} href="/">Главная</a>
                </li>
                {
                    isLoggedIn && <li className="navigation__menu-item">
                        <a className={`navigation__link ${!isMenuOpen && isInSavedNews && 'navigation__link_loggedin'}`} href="/saved-news">Сохранённые статьи</a>
                    </li>
                }
            </ul>
            <LoginControlBtn onAuthorizeClick = {onLoginBtnClick} />
            <div className={`navigation__shadow ${!isMenuOpen && 'navigation__shadow_invisible'}`}></div>
        </nav>
    )
}

export default Navigation;