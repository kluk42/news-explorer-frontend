import React from 'react';
import Popup from '../Popup/Popup';
import Form from '../Form/Form';

export default function RegistrationPopup () {
    return(
        <Popup>
            <Form
                header="Регистрация"
                btnName="Зарегистрироваться"
                formLink="/saved-news"
                otherActionName="Войти"
            >
                <fieldset className="form__fieldset">
                    <label htmlFor="email-input" className="form__label">Email</label>
                    <input required type='email' id="email-input" placeholder="Введите почту" name="email-input" className="form__input"></input>
                    <span className="form__err-text form__err-text_visible">Тут будут ошибки валидации.</span>
                    <label htmlFor="password-input" className="form__label">Пароль</label>
                    <input required type='password' id="password-input" name="password-input" placeholder="Введите пароль" className="form__input"></input>
                    <span className="form__err-text">Тут будут ошибки валидации.</span>
                    <label htmlFor="name-input" className="form__label">Имя</label>
                    <input required type='text' id="name-input" name="name-input" placeholder="Введите своё имя" className="form__input"></input>
                    <span className="form__err-text">Тут будут ошибки валидации.</span>
                </fieldset>
            </Form>
        </Popup>
    )
}