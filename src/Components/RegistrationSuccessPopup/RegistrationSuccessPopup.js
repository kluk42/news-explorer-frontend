import React from 'react';
import Popup from '../Popup/Popup';
import FormContainer from '../FormContainer/FormContainer';

export default function RegistrationSuccessPopup ({ onClose, openLoginPopup }) {
    return(
        <Popup onClose={onClose}>
            <FormContainer
                header="Пользователь успешно зарегистрирован"
                isSuccesPopup={true}
                formLink="/saved-news"
                suggestion="Войти"
                openLoginPopup={openLoginPopup}
            >
                <></>
            </FormContainer>
        </Popup>
    )
}