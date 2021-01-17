import React from 'react';
import cards from '../../utils/cards.json';
import CardsList from '../CardsList/CardsList';
import Card from '../Card/Card';

export default function SearchResults() {
    return (
        <section className="search-results">
            <div className="search-results__container">
                <h2 className="search-results__header">Результаты поиска</h2>
                <CardsList cards={cards} isInSaved={false}>
                    {cards.map( c => <li key={c._id}>
                                            <Card keyword={c.keyword}
                                                link={c.link}
                                                owner={c.owner}
                                                title={c.title}
                                                text={c.text}
                                                source={c.source}
                                                image={c.image}
                                                date={c.date}
                                                className="cards-list__card"
                                                isSaved = {c.isSaved}
                                            />
                                        </li>)}
                </CardsList>
                <button className="search-results__button">Показать ещё</button>
            </div>
        </section>
    )
}