import React from 'react';
import CloseBtnSvg from '../CloseBtnSvg/CloseBtnSvg';

export default function Popup ({ children, onClose }) {
    const onClick = (evt) => {
        if (evt.target.classList.contains('overlay')) {
            onClose();
        }
    }
    return (
        <div onClick={onClick} className="overlay">
            <div className="popup" >
                <CloseBtnSvg onClick={onClose} className="popup__close-btn" />
                {children}
            </div>
        </div>
    )
}