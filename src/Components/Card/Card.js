import React, { useState, useEffect, createRef } from 'react';
import BookmarkSvg from '../BookmarkSvg/BookmarkSvg';
import TrashSvg from '../TrashSvg/TrashSvg';
import { useLocation } from 'react-router-dom';

export default function Card ({ keyword, link, owner, title, text, source, image, date, isSaved }) {
    const [ isControlsHovered, setIsControlsHovered ] = useState(false);
    const [ numberOfLinesForText, setNumberOfLinesForText ] = useState();
    const headerRef = createRef();
    const location = useLocation().pathname;

    useEffect(() => {
        const cardHeader = headerRef.current;
        const headerHeight = cardHeader.offsetHeight;
        console.log(window.innerWidth)
        if ((window.innerHeight > 768) && (headerHeight > 60)) {
            setNumberOfLinesForText(4);
        } 
        if ((window.innerWidth > 768) && (headerHeight <= 60)) {
            setNumberOfLinesForText(5)
        }

        if ((window.innerWidth < 768) && (headerHeight > 52)) {
            setNumberOfLinesForText(2);
        }

        if ((window.innerWidth < 768) && (headerHeight <= 52)) {
            setNumberOfLinesForText(4);
        }
    }, [headerRef])

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
    return(
        <article className="card">
            {isSaved && <div className="card__keyword">
                <p className="card__keyword-text">{keyword[0]}</p>
            </div>}
            {!isSaved && isControlsHovered && location !== '/saved-news' && <div className="card__advice">
                <p className="card__text-advice">Войдите, чтобы сохранять статьи</p>
            </div>}
            <div className="card__controls" onClick={handleBookmarkColor} onMouseEnter={handleBookmarkColor} onMouseLeave={handleBookmarkColor}>
                { ((!isSaved) || (location !== '/saved-news')) ? <BookmarkSvg isHovered={isControlsHovered} className="card__bookmark-img" /> : '' }
                {isSaved && <TrashSvg isHovered={isControlsHovered} className="card__trash-img" />}
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