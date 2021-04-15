import React, { useState } from 'react';

export default function SearchField({ onSubmit, onChange, input }) {
    const [ isFocused, setIsFocused ] = useState(false);

    const onFocusAndBlur = () => {
        setIsFocused(!isFocused);
    }

    return(
        <form className="search-field" onSubmit={onSubmit} noValidate>
            <div className={`search-field__input-wrapper ${isFocused && 'search-field__input-wrapper_focused'}`}>
                <input placeholder="Введите тему новости" type="text" required onFocus={onFocusAndBlur} onBlur={onFocusAndBlur} value={input} onChange={onChange} className="search-field__input"></input>
            </div>
            <button className="search-field__button">Искать</button>
        </form>
    )
}