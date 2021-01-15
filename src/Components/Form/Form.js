import React from 'react';

export default function Form ({ children, header, btnName, formLink, otherActionName, isSuccesPopup, suggestion }) {
    return(
        <form className="form">
            <h2 className="form__header">{header}</h2>
            {children}
            {!isSuccesPopup && <button type="submit" className="form__submit-btn">{btnName}</button>}
            { isSuccesPopup ? <a href={formLink} className="form__link"> {suggestion}</a> : <span className="form__other-action">или<a href={formLink} className="form__link"> {otherActionName}</a></span> }
        </form>
    )
}