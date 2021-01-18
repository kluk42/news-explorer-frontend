import React, { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import {LoginStateContext} from '../Contexts/LoginStateContext';
import MenuSvg from '../MenuSvg/MenuSvg';
import CloseMenuBtn from '../CloseMenuBtn/CloseMenuBtn';
import { useLocation } from 'react-router-dom';

function Header ({ onLoginBtnClick, isMenuOpen, onMenuOpenClose, isLoginPopupOpen }) {
    const isLoggedIn = useContext(LoginStateContext);
    const isInSavedNews = useLocation().pathname === '/saved-news';
    return(
        <header className={`header ${isInSavedNews && !isMenuOpen && 'header_logeddin'} ${isMenuOpen && 'header_menu-state_open'}`}>
            <h1 className="header__project-name">
                NewsExplorer
            </h1>
            { isMenuOpen ? <CloseMenuBtn className={`header__menu-btn ${isLoginPopupOpen && 'header__menu-btn_hidden'}`} onClick={onMenuOpenClose}/> : <MenuSvg isFillingBlack={isInSavedNews} className={`header__menu-btn ${isLoginPopupOpen && 'header__menu-btn_hidden'}`} onClick={onMenuOpenClose}/> }
            <Navigation onLoginBtnClick={onLoginBtnClick} isMenuOpen={ isMenuOpen } />
            {!isInSavedNews && <div className="background-img"></div>}
        </header>
    )
}

export default Header;