import React, { useContext } from 'react';
import { LoginStateContext } from '../Contexts/LoginStateContext';
import LogOutSvg from '../LogOutSvg/LogOutSvg';


function LoginControlBtn({ onAuthorizeClick }) {
    const isLoggedIn = useContext(LoginStateContext);

    const handleClick = () => {
        if (!isLoggedIn) {
            onAuthorizeClick()
        }
    }
    return(
        <button onClick={handleClick} className={`login-control-btn ${isLoggedIn && 'login-control-btn_logged-in'}`}>
            <p className={`${ isLoggedIn ? 'login-control-btn__text_color_black' : 'login-control-btn__text'}`}>{isLoggedIn ? 'Грета' : 'Авторизоваться'}</p>
            {isLoggedIn && <LogOutSvg className="login-control-btn__logout-img"/>}
        </button>
    )
}

export default LoginControlBtn;