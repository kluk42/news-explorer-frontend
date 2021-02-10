import React, { useState } from 'react';
import Popup from '../Popup/Popup';
import FormContainer from '../FormContainer/FormContainer';
import Field from '../Field/FIeld';

export default function LoginPopup ({ onClose, openRegistration, errFromServer, onSubmit }) {
    const [ hasErrors, setHasErrors ] = useState(true);

    const validate = values => {
        const errors = {}
        const email = values['login-email-input'];
        const password = values['login-password-input'];

        if (!email) {
            errors['login-email-input'] = 'Поле обязательно для заполнения';
        }
        if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) && (email)) {
            errors['login-email-input'] = 'Неверный адрес почты';
        };
        if (!values['login-password-input']) {
            errors['login-password-input'] = 'Поле обязательно для заполнения';
        };
        if ((password.length < 6) && (password)) {
            errors['login-password-input'] = 'Пароль должен содержать не менее 6 символов';
        };
        setHasErrors(errors['login-email-input'] || errors['login-password-input']);

        return errors
    }

    const formikProps = {
        initialValues: {
            'login-email-input': '',
            'login-password-input': ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            onSubmit(values['login-email-input'], values['login-password-input']);
            resetForm();
        },
    }

    return(
        <Popup onClose={onClose}>
            <FormContainer
                header="Вход"
                btnName="Войти"
                formLink="/saved-news"
                otherActionName="Зарегистрироваться"
                onOtherActionClick={openRegistration}
                formikProps={formikProps}
                hasErrors={hasErrors}
                errFromServer={errFromServer}
            >
                <fieldset className="form-container__fieldset">
                    <Field
                            id="login-email-input"
                            name="login-email-input"
                            label="Email"
                            placeholder="Введите почту"
                            type="email"
                    />
                    <Field
                            id="login-password-input"
                            name="login-password-input"
                            label="Пароль"
                            placeholder="Введите пароль"
                            type="password"
                    />
                </fieldset>
            </FormContainer>
        </Popup>
    )
}