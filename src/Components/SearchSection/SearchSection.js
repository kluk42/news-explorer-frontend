import React from 'react';
import SearchField from '../SearchField/SearchField';

function SearchSection ({ searchWords, handleSearchInput, onSubmitSearchInput }) {
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
            <SearchField onChange={handleSearchInput} onSubmit={onSubmitSearchInput} input={searchWords} />
            <p className="search__error">{!searchWords && 'Нужно ввести ключевое слово'}</p>
        </section>
    )
};

export default SearchSection;