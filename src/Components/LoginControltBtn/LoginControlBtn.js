import React, { useContext } from 'react';
import { LoginStateContext } from '../Contexts/LoginStateContext';
import LogOutSvg from '../LogOutSvg/LogOutSvg';
import { useLocation } from 'react-router-dom';


function LoginControlBtn({ onAuthorizeClick }) {
    const isLoggedIn = useContext(LoginStateContext);
    const isInSavedNews = useLocation().pathname === '/saved-news';

    const handleClick = () => {
        if (!isLoggedIn) {
            onAuthorizeClick()
        }
    }
    return(
        <button onClick={handleClick} className={`login-control-btn ${isLoggedIn && isInSavedNews && 'login-control-btn_location_saved-news'}`}>
            <span className={`${ isLoggedIn && isInSavedNews ? 'login-control-btn__text_color_black' : 'login-control-btn__text'}`}>{isLoggedIn ? 'Грета' : 'Авторизоваться'}</span>
            {isLoggedIn && <LogOutSvg isBlack={isInSavedNews} className="login-control-btn__logout-img"/>}
        </button>
    )
}

export default LoginControlBtn;