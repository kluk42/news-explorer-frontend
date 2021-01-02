import React from 'react';
import savedCards from '../../utils/cards.json';
import CardsList from '../CardsList/CardsList';

function SavedNews() {
    return (
        <section className="saved-news">
            <h2 className="saved-news__header">Сохранённые статьи</h2>
            <p className="saved-news__welcome">Грета, у вас 5 сохранённых статей</p>
            <p className="saved-news__key-words-list">По ключевым словам: <span className="saved-news__key-words">Природа, тайга</span> и <span className="saved-news__key-words">2-м другим</span></p>
            <CardsList cards={savedCards} isSaved={false} />
        </section>
    )
}

export default SavedNews;
