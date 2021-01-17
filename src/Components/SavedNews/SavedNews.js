import React from 'react';
import savedCards from '../../utils/cards.json';
import CardsList from '../CardsList/CardsList';
import Card from '../Card/Card';

function SavedNews() {
    return (
        <section className="saved-news">
            <div className="saved-news__text">
                <h2 className="saved-news__header">Сохранённые статьи</h2>
                <p className="saved-news__welcome">Грета, у вас 5 сохранённых статей</p>
                <p className="saved-news__key-words-list">По ключевым словам: <span className="saved-news__key-words">Природа, тайга</span> и <span className="saved-news__key-words">2-м другим</span></p>
            </div>
                <CardsList isInSaved={true}>
                    {savedCards.map( c => <li key={c._id}>
                                                <Card keyword={c.keyword}
                                                    link={c.link}
                                                    owner={c.owner}
                                                    title={c.title}
                                                    text={c.text}
                                                    source={c.source}
                                                    image={c.image}
                                                    date={c.date}
                                                    className="cards-list__card"
                                                    isSaved={true}
                                                />
                                            </li>)}
                </CardsList>
        </section>
    )
}

export default SavedNews;
