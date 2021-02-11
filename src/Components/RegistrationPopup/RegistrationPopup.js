import React, { useState } from 'react';
import Popup from '../Popup/Popup';
import FormContainer from '../FormContainer/FormContainer';
import Field from '../Field/FIeld';

export default function RegistrationPopup ({ onClose, openLogin, onSubmit, errFromServer }) {
    const [ hasErrors, setHasErrors ] = useState(true);

    const validate = values => {
        const errors = {}
        const email = values['registration-email-input'];
        const password = values['registration-password-input'];
        const name = values['registration-name-input']

        if (!email) {
            errors['registration-email-input'] = 'Поле обязательно для заполнения';
        }
        if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) && (email)) {
            errors['registration-email-input'] = 'Неверный адрес почты';
        };
        if (!password) {
            errors['registration-password-input'] = 'Поле обязательно для заполнения';
        };
        if ((password.length < 8) && (password)) {
            errors['registration-password-input'] = 'Пароль должен содержать не менее 8 символов';
        };
        if (!name) {
            errors['registration-name-input'] = 'Поле обязательно для заполнения';
        };
        if ((name.length < 2) && (name)) {
            errors['registration-name-input'] = 'Имя должно быть не короче 2 символов';
        };
        setHasErrors(errors['registration-email-input'] || errors['registration-password-input'] || errors['registration-name-input']);

        return errors
    }

    const formikProps = {
        initialValues: {
            'registration-email-input': '',
            'registration-password-input': '',
            'registration-name-input': ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            onSubmit(values['registration-email-input'], values['registration-password-input'], values['registration-name-input']);
            resetForm();
        },
    }

    return(
        <Popup onClose={onClose}>
            <FormContainer
                header="Регистрация"
                btnName="Зарегистрироваться"
                formLink="/saved-news"
                otherActionName="Войти"
                onOtherActionClick={openLogin}
                formikProps={formikProps}
                hasErrors={hasErrors}
                errFromServer={errFromServer}
                fieldNames={['registration-email-input', 'registration-password-input', 'registration-name-input']}
            >
                <fieldset className="form-container__fieldset">
                    <Field
                            id="registration-email-input"
                            name="registration-email-input"
                            label="Email"
                            placeholder="Введите почту"
                            type="email"
                    />
                    <Field
                            id="registration-password-input"
                            name="registration-password-input"
                            label="Пароль"
                            placeholder="Введите пароль"
                            type="password"
                    />
                    <Field
                            id="registration-name-input"
                            name="registration-name-input"
                            label="Имя"
                            placeholder="Введите ваше имя"
                            type="name"
                    />
                </fieldset>
            </FormContainer>
        </Popup>
    )
}