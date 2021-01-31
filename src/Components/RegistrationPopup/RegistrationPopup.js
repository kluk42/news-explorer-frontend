import React from 'react';
import Popup from '../Popup/Popup';
import FormContainer from '../FormContainer/FormContainer';
import Field from '../Field/FIeld';

export default function RegistrationPopup ({isOpen, onClose}) {
    return(
        <Popup isOpen={isOpen} onClose={onClose}>
            <FormContainer
                header="Регистрация"
                btnName="Зарегистрироваться"
                formLink="/saved-news"
                otherActionName="Войти"
            >
                <fieldset className="form__fieldset">
                    <Field
                        id="registraion-email-input"
                        label="Email"
                        placeholder="Введите почту"
                        type="email"
                    />
                    <Field
                        id="registration-password-input"
                        label="Пароль"
                        placeholder="Введите пароль"
                        type="password"
                    />
                    <Field
                        id="registration-name-input"
                        label="Имя"
                        placeholder="Введите своё имя"
                        type="text"
                    />
                </fieldset>
            </FormContainer>
        </Popup>
    )
}