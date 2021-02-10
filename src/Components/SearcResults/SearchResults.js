import React, { useEffect, useState, useCallback } from 'react';
import CardsList from '../CardsList/CardsList';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';

export default function SearchResults({ areArticlesPending, wasQueryDone, currentArticles, isSearchResponseWithError, searchWords, savedCards, saveCard }) {
    const [ allArticles, setAllArticles ] = useState([]);
    const [ cardsToRender, setCardsToRender ] = useState([]);
    const [ lastRenderedArticleIndex, setLastRenderedArticleIndex ] = useState(null);

    const processArticles = useCallback(
        (article) => {
        const card = {};

        card.keyword= searchWords;
        card.link = article.url;
        card.title = article.title;
        card.text= article.description;
        card.image= article.urlToImage;

        const fullDate = new Date(article.publishedAt);
        const monthName = fullDate.toLocaleString('default', { month: 'long' });
        const monthNameToRender = (monthName === 'март' || monthName === 'август') ? monthName + 'a' : monthName.substring(0, monthName.length-1)+'я';
        const date = `${fullDate.getDay()} ${monthNameToRender}, ${fullDate.getFullYear()}`;

        card.date = date;
        card.text = article.description;
        card.image = article.urlToImage;
        card.source = article.source.name;

        return card
    }, [searchWords]
    )

    useEffect(() => {
        const initialArticlesJSON = localStorage.getItem('currentArticles');
        const initialArticles = JSON.parse(initialArticlesJSON);
        if (initialArticles) {
            setAllArticles(initialArticles);
            const articlesToRender = initialArticles.slice(0, 3);
            setCardsToRender(
                articlesToRender.map(article => processArticles(article))
            )
            setLastRenderedArticleIndex(2);
        } else {
            setAllArticles(null);
            setCardsToRender(null);
        }
    }, [processArticles])

    useEffect(() => {
        if (currentArticles) {
                if (currentArticles.length !== 0) {
                setAllArticles(currentArticles);
                const articlesToProcess = currentArticles.slice(0, 3);
                setCardsToRender(articlesToProcess.map(article => processArticles(article)));
                setLastRenderedArticleIndex(2);
            }
        } else {
            setAllArticles(null);
            setCardsToRender(null);
        }
    }, [currentArticles, processArticles])

    function onBtnClick () {
        if ((lastRenderedArticleIndex !== allArticles.length-1) && (allArticles)) {
            const articlesToProcess = allArticles.slice(lastRenderedArticleIndex+1, lastRenderedArticleIndex+4);
            const cardsToAdd = articlesToProcess.map(article => processArticles(article));
            setCardsToRender([...cardsToRender, ...cardsToAdd]);
            if (articlesToProcess.length === 3) {
                setLastRenderedArticleIndex(lastRenderedArticleIndex+3);
            } else {
                setLastRenderedArticleIndex(lastRenderedArticleIndex+articlesToProcess.length)
            }
        }
    }

    return (
        <section className="search-results">
            <div className="search-results__container">
                <h2 className="search-results__header">Результаты поиска</h2>
                {cardsToRender && <CardsList>
                    {cardsToRender.map( c => <li key={c.date+c.link+c.source}>
                                            <Card
                                                keyword={c.keyword}
                                                link={c.link}
                                                source={c.source}
                                                title={c.title}
                                                text={c.text}
                                                image={c.image}
                                                date={c.date}
                                                className="cards-list__card"
                                                card={c}
                                                savedCards={savedCards}
                                                saveCard={saveCard}
                                            />
                                        </li>)}
                </CardsList>}
                { areArticlesPending && <Preloader /> }
                { wasQueryDone && (!currentArticles) && <p className="search-results__error">По вашему запросу ничего не найдено</p> }
                { isSearchResponseWithError && <p className="search-results__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> }
                { allArticles && lastRenderedArticleIndex !== allArticles.length-1 && <button onClick={onBtnClick} className="search-results__button">Показать ещё</button> }
            </div>
        </section>
    )
}