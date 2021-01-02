import React, {useState} from 'react';
import BookmarkSvg from '../BookmarkSvg/BookmarkSvg';
import TrashSvg from '../TrashSvg/TrashSvg';

export default function Card ({ keyword, link, owner, title, text, source, image, date, isSaved }) {
    const [ isControlsHovered, setIsControlsHovered ] = useState(false);
    const handleBookmarkColor = () => {
        setIsControlsHovered(!isControlsHovered);
    }
    return(
        <article className="card">
            {isSaved && <div className="card__keyword">
                <p className="card__keyword-text">{keyword[0]}</p>
            </div>}
            {!isSaved && <div className="card__advice">
                <p className="card__text-advice">Войдите, чтобы сохранять статьи</p>
            </div>}
            <div className="card__controls" onMouseEnter={handleBookmarkColor} onMouseLeave={handleBookmarkColor}>
                {!isSaved && <BookmarkSvg isHovered={isControlsHovered} className="card__bookmark-img" />}
                {isSaved && <TrashSvg isHovered={isControlsHovered} className="card__trash-img" />}
            </div>
            <img alt={title} src={image} className="card__image"></img>
            <div className="card__bottom">
                <p className="card__date">{date}</p>
                <h3 className="card__title">{title}</h3>
                <p className="card__text">{text}</p>
                <p className="card__source">{source}</p>
            </div>
        </article>
    )
}