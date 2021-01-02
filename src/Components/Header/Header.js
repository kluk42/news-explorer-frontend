import React, { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import {LoginStateContext} from '../Contexts/LoginStateContext';

function Header ({ isInSavedNews }) {
  const isLoggedIn = useContext(LoginStateContext);
    return(
        <header className={`header ${isLoggedIn && 'header_logeddin'} ${isInSavedNews && 'header_saved-news-style'}`}>
            <h1 className="header__project-name">
                NewsExplorer
            </h1>
            <Navigation />
        </header>
    )
}

export default Header;