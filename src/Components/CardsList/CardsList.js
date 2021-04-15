import React from 'react';
import { useLocation } from 'react-router-dom';

export default function CardsList ({ children }) {
    const location = useLocation();
    return (
        <ul className={`cards-list ${location.pathname !== '/' && 'cards-list_location_saved-cards'}`}>
                {children}
        </ul>
    )
}