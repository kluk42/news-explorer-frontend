import React from 'react';
import { Formik, Form } from 'formik';
import Field from '../Field/FIeld';

export default function FormContainer ({ children, header, btnName, formLink, otherActionName, isSuccesPopup, suggestion, onOtherActionClick, formikProps, hasErrors }) {

    return(
            <Formik
                {...formikProps}
            >
                <Form className="form-container">
                    <h2 className="form-container__header">{header}</h2>
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
                    {!isSuccesPopup && <button type="submit" className={`form-container__submit-btn ${!hasErrors && 'form-container__submit-btn_valid'}`}>{btnName}</button>}
                    { isSuccesPopup ? <a href={formLink} className="form-container__link"> {suggestion}</a> : <span className="form-container__other-action">или<span className="form-container__link" onClick={onOtherActionClick}> {otherActionName}</span></span> }
                </Form>
            </Formik>
    )
}