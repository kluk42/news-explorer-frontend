import React from 'react';
import Card from '../Card/Card';

export default function CardsList ({ cards, isSaved }) {
    return (
        <ul className="cards-list">
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
                                            isSaved = {isSaved}
                                        />
                                    </li>)}
            </ul>
    )
}