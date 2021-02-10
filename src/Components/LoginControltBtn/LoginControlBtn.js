import React from 'react';
import LogOutSvg from '../LogOutSvg/LogOutSvg';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../utils/useUser/useUser';


function LoginControlBtn({ onAuthorizeClick }) {
    const { userInfo, deleteUser } = useUser();
    const { user } = userInfo;
    const isLoggedIn = !!user;
    const isInSavedNews = useLocation().pathname === '/saved-news';

    const handleClick = () => {
        if (!isLoggedIn) {
            onAuthorizeClick()
        } else {
            deleteUser();
        }
    }
    return(
        <button onClick={handleClick} className={`login-control-btn ${isLoggedIn && isInSavedNews && 'login-control-btn_location_saved-news'}`}>
            <span className={`${ isLoggedIn && isInSavedNews ? 'login-control-btn__text_color_black' : 'login-control-btn__text'}`}>{isLoggedIn ? user.name : 'Авторизоваться'}</span>
            {isLoggedIn && <LogOutSvg isBlack={isInSavedNews} className="login-control-btn__logout-img"/>}
        </button>
    )
}

export default LoginControlBtn;