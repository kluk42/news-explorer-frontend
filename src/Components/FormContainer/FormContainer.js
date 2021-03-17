import React from 'react';
import { Formik, Form } from 'formik';

export default function FormContainer ({ render, header, btnName, otherActionName, isSuccesPopup, suggestion, onOtherActionClick, formikProps, hasErrors, openLoginPopup, errFromServer, fieldNames }) {

    return(
            <Formik
                {...formikProps}
            >
                { ({ isSubmitting, isValidating }) =>  <Form className="form-container">
                    <h2 className="form-container__header">{header}</h2>
                    {render(isSubmitting)}
                    {errFromServer && <p className="form-container__error-from-server">{errFromServer}</p>}
                    {!isSuccesPopup && <button type="submit" className={`form-container__submit-btn ${!hasErrors && !isSubmitting && 'form-container__submit-btn_valid'}`}>{isSubmitting ? 'Отправка...': btnName}</button>}
                    { isSuccesPopup ? <span onClick={openLoginPopup} className="form-container__link">{suggestion}</span> : <span className="form-container__other-action">или<span className="form-container__link" onClick={onOtherActionClick}> {otherActionName}</span></span> }
                </Form> }
            </Formik>
    )
}