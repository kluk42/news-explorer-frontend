import React, { useState, useEffect, createRef } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from '../../utils/useWindowSize/useWindowSize';
import BookmarkSvg from '../BookmarkSvg/BookmarkSvg';
import TrashSvg from '../TrashSvg/TrashSvg';
import { useUser } from '../../utils/useUser/useUser';

export default function Card ({ keyword, title, text, source, image, date, saveCard, card, id, deleteCard, savedCards }) {
    const [ isControlsHovered, setIsControlsHovered ] = useState(false);
    const [ numberOfLinesForText, setNumberOfLinesForText ] = useState();
    const [ windowWidth ] = useWindowSize();
    const { userInfo } = useUser();
    const headerRef = createRef();
    const [ cardToSave, setCardToSave ] = useState();
    const [ isSaved, setIsSaved ] = useState(false);
    const isInSavedNews = useLocation().pathname === '/saved-news';

    const isLoggedIn = !!userInfo.user;

    useEffect(() => {
        const checkIfSaved = () => {
            return !!savedCards.find((cardFromServer) => {
                return cardFromServer.image === image;
            })
        }
        if (savedCards) {
            setIsSaved(checkIfSaved())
        }
    }, [savedCards, image])

    useEffect(() => {
        setCardToSave(card);
    }, [card])

    useEffect(() => {
        const cardHeader = headerRef.current;
        const headerHeight = cardHeader.offsetHeight;
        if ((windowWidth > 768) && (headerHeight > 60)) {
            setNumberOfLinesForText(4);
        }
        if ((windowWidth > 768) && (headerHeight <= 60)) {
            setNumberOfLinesForText(5)
        }

        if ((windowWidth < 768) && (headerHeight > 52)) {
            setNumberOfLinesForText(2);
        }

        if ((windowWidth < 768) && (headerHeight <= 52)) {
            setNumberOfLinesForText(4);
        }
    }, [windowWidth, headerRef])

    const handleBookmarkColor = (evt) => {
        if ((evt.type === 'mouseenter') && (!isControlsHovered) && (window.innerWidth > 1440) ) {
            setIsControlsHovered(true);
        }
        if ((evt.type === 'click') && (!isControlsHovered)) {
            setIsControlsHovered(true);
        }
        if ((evt.type === 'click') && (isControlsHovered) && (window.innerWidth < 1440)) {
            setIsControlsHovered(false);
        }
        if (evt.type === 'mouseleave') {
            setIsControlsHovered(false);
        }
    }

    const onBookmarkClick = async () => {
        if (!isSaved) {
            try {
                await saveCard(cardToSave);
                setIsSaved(true);
            }
            catch (err) {
                const errParsed = await err.json();
                console.log(errParsed)
            }
        }
    }

    const onDeleteBtnClick = () => {
        deleteCard(id);
    }

    return(
        <article className="card">
            {isSaved && isInSavedNews && <div className="card__keyword">
                <p className="card__keyword-text">{keyword}</p>
            </div>}
            {!isSaved && isControlsHovered && !isLoggedIn && <div className="card__advice">
                <p className="card__text-advice">Войдите, чтобы сохранять статьи</p>
            </div>}
            <div className="card__controls" onClick={handleBookmarkColor} onMouseEnter={handleBookmarkColor} onMouseLeave={handleBookmarkColor}>
                { (!isInSavedNews) ? <BookmarkSvg onClick={onBookmarkClick} isFillingBlue={isSaved && isLoggedIn} isOutlineBlack={isControlsHovered} className="card__bookmark-img" /> : '' }
                {isSaved && isInSavedNews && <TrashSvg onClick={onDeleteBtnClick} isHovered={isControlsHovered} className="card__trash-img" />}
            </div>
            <img alt={title} src={image} className="card__image"></img>
            <div className="card__bottom">
                <p className="card__date">{date}</p>
                <h3 className="card__title" ref={headerRef}>{title}</h3>
                <p style={ { 'WebkitLineClamp': numberOfLinesForText } } className="card__text">{text}</p>
                <p className="card__source">{source}</p>
            </div>
        </article>
    )
}