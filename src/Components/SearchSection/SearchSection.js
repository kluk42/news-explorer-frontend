import React, { useState } from 'react';
import SearchField from '../SearchField/SearchField';

function SearchSection () {
    const [ input, setInput ] = useState('Природа');
    const [ isFieldEmpty, setIsFieldEmpty ] = useState(false);

    const onChange = (evt) => {
        setInput(evt.target.value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (!input) {
            setIsFieldEmpty(true)
        } else {
            setIsFieldEmpty(false);
        }
    }

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
            <SearchField onChange={onChange} onSubmit={onSubmit} input={input} />
            <p className="search__error">{isFieldEmpty && 'Нужно ввести ключевое слово'}</p>
        </section>
    )
};

export default SearchSection;