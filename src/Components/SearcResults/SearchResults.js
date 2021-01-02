import React from 'react';
import cards from '../../utils/cards.json';
import CardsList from '../CardsList/CardsList';

export default function SearchResults() {
    return (
        <section className="search-results">
            <h2 className="search-result__header">Результаты поиска</h2>
            <CardsList cards={cards} isSaved={false} />
            <button className="search-results__button">Показать ещё</button>
        </section>
    )
}