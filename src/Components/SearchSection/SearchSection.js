import React from 'react';
import SearchField from '../SearchField/SearchField';

function SearchSection () {
    return (
        <section className="search">
            <div className="search__text-wrapper">
                <h2 className="search__header">
                    Что творится в мире?
                </h2>
                <p className="search__instruction">
                    Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
                </p>
            </div>
            <SearchField />
        </section>
    )
};

export default SearchSection;