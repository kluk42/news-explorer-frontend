import React from 'react';
import Popup from '../Popup/Popup';
import Form from '../Form/Form';

export default function LoginPopup ({ onClose, isOpen }) {
    return(
        <Popup onClose={onClose} isOpen={isOpen}>
            <Form
                header="Вход"
                btnName="Войти"
                formLink="/saved-news"
                otherActionName="Зарегистрироваться"
            >
                <fieldset className="form__fieldset">
                    <label htmlFor="email-input" className="form__label">Email</label>
                    <input required type='email' id="email-input" placeholder="Введите почту" name="email-input" className="form__input"></input>
                    <span className="form__err-text">Тут будут ошибки валидации.</span>
                    <label htmlFor="password-input" className="form__label">Пароль</label>
                    <input required type='password' id="password-input" name="password-input" placeholder="Введите пароль" className="form__input"></input>
                    <span className="form__err-text">Тут будут ошибки валидации.</span>
                </fieldset>
            </Form>
        </Popup>
    )
}