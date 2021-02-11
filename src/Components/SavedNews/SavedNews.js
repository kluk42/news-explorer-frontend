import React, { useEffect, useState } from 'react';
import CardsList from '../CardsList/CardsList';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';

function SavedNews({ savedCards, deleteCard }) {
    const [ numberOfCards, setNumberOfCards ] = useState(null);
    const [ keywords, setKeywords ] = useState([]);
    const [ numberOfOtherKeywords, setNumberOfOtherKeywords ] = useState(null);

    useEffect(() => {
        if (savedCards) {
            setNumberOfCards(savedCards.length);
            const keywords = savedCards.map(card => card.keyword);
            if (keywords.length > 1) {
                let lastKeyword;
                let unorderedKeywords = [];
                let indexOfLastUnorderedKeyword = -1;
                keywords.forEach((keyword) => {
                    if (lastKeyword !== keyword) {
                        lastKeyword = keyword;
                        indexOfLastUnorderedKeyword = indexOfLastUnorderedKeyword + 1;
                        unorderedKeywords.push({
                            [keyword]: 1
                        })
                    } else {
                        unorderedKeywords[indexOfLastUnorderedKeyword][keyword] = unorderedKeywords[indexOfLastUnorderedKeyword][keyword]+1;
                    }
                })
                const orderedKeywords = unorderedKeywords.sort(function (keyword1, keyword2) {
                    return Object.values(keyword2)[0] - Object.values(keyword1)[0]
                })
                const keywordsToRender = orderedKeywords.map((word) => Object.keys(word)[0]).filter((word, index) => index<=2);
                setKeywords(keywordsToRender.join(', '));
                if (keywords.length > 3) {
                    setNumberOfOtherKeywords(orderedKeywords.length - keywordsToRender.length)
                } else {
                    setNumberOfOtherKeywords(null);
                }
            } else {
                setKeywords(keywords.join(', '));
                setNumberOfOtherKeywords(null);
            }
        }
    }, [savedCards])

    const otherKeywords = numberOfOtherKeywords && <span className="saved-news__key-words">{`${numberOfOtherKeywords}-м другим`}</span>

    return (
        <section className="saved-news">
            <div className="saved-news__text">
                <h2 className="saved-news__header">Сохранённые статьи</h2>
                <p className="saved-news__welcome">Грета, у вас {numberOfCards} сохранённых статей</p>
                {<p className="saved-news__key-words-list">По ключевым словам: <span className="saved-news__key-words">{keywords}</span> {`${otherKeywords ? 'и' : ''}`} {!!otherKeywords}</p>}
            </div>
                {savedCards ? <CardsList isInSaved={true}>
                    {savedCards.map( c => <li key={c._id}>
                                            <Card keyword={c.keyword}
                                                link={c.link}
                                                source={c.source}
                                                title={c.title}
                                                text={c.text}
                                                image={c.image}
                                                date={c.publishedAt}
                                                className="cards-list__card"
                                                savedCards={savedCards}
                                                id={c._id}
                                                deleteCard={deleteCard}
                                            />
                                            </li>)}
                </CardsList> : <Preloader />}
        </section>
    )
}

export default SavedNews;
