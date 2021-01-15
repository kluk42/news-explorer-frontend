import React from 'react';

export default function CardsList ({ isSaved, children }) {
    return (
        <ul className={`cards-list ${isSaved && 'cards-list_location_saved-cards'}`}>
                {children}
        </ul>
    )
}