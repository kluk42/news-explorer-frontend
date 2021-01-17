import React, { useContext, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import {LoginStateContext} from '../Contexts/LoginStateContext';
import MenuSvg from '../MenuSvg/MenuSvg';
import CloseMenuBtn from '../CloseMenuBtn/CloseMenuBtn';

function Header ({ isInSavedNews, onLoginBtnClick, isMenuOpen, onMenuOpenClose, isLoginPopupOpen }) {
    const isLoggedIn = useContext(LoginStateContext);
    return(
        <header className={`header ${isLoggedIn && !isMenuOpen && 'header_logeddin'} ${isInSavedNews && 'header_saved-news-style'} ${isMenuOpen && 'header_menu-state_open'}`}>
            <h1 className="header__project-name">
                NewsExplorer
            </h1>
            { isMenuOpen ? <CloseMenuBtn className={`header__menu-btn ${isLoginPopupOpen && 'header__menu-btn_hidden'}`} onClick={onMenuOpenClose}/> : <MenuSvg isFillingBlack={isLoggedIn} className={`header__menu-btn ${isLoginPopupOpen && 'header__menu-btn_hidden'}`} onClick={onMenuOpenClose}/> }
            <Navigation onLoginBtnClick={onLoginBtnClick} isMenuOpen={ isMenuOpen } />
            {!isLoggedIn && <div className="background-img"></div>}
        </header>
    )
}

export default Header;