import React, { useContext } from 'react';
import { LoginStateContext } from '../Contexts/LoginStateContext';
import LogOutSvg from '../LogOutSvg/LogOutSvg';


function LoginControlBtn() {
    const isLoggedIn = useContext(LoginStateContext);
    return(
        <button className={`login-control-btn ${isLoggedIn && 'login-control-btn_logged-in'}`}>
            <p className="login-control-btn__text">Грета</p>
            {isLoggedIn ? <LogOutSvg className="login-control-btn__logout-img"/> : <p className="login-control-btn__text">Авторизоваться</p>}
        </button>
    )
}

export default LoginControlBtn;