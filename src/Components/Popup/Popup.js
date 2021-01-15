import React, { useState } from 'react';
import CloseBtnSvg from '../CloseBtnSvg/CloseBtnSvg';

export default function Popup ({ children, onClose, isOpen}) {
    return (
        <div className={`overlay ${isOpen && 'overlay_visible'}`}>
            <div className={`popup ${isOpen && 'popup_open'}`}>
                <CloseBtnSvg onClick={onClose} className="popup__close-btn" />
                {children}
            </div>
        </div>
    )
}