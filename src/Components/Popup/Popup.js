import React from 'react';
import CloseBtnSvg from '../CloseBtnSvg/CloseBtnSvg';

export default function Popup ({ children, onClose }) {
    return (
        <div className="overlay">
            <div className="popup" >
                <CloseBtnSvg onClick={onClose} className="popup__close-btn" />
                {children}
            </div>
        </div>
    )
}