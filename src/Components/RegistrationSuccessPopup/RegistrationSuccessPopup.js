import React from 'react';
import Popup from '../Popup/Popup';
import Form from '../Form/Form';

export default function RegistrationSuccessPopup () {
    return(
        <Popup>
            <Form
                header="Пользователь успешно зарегистрирован"
                isSuccesPopup={true}
                formLink="/saved-news"
                suggestion="Войти"
            >
                <></>
            </Form>
        </Popup>
    )
}