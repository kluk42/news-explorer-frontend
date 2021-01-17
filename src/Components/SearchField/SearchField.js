import React, { useState } from 'react';

export default function SearchField() {
    const [ input, setInput ] = useState('Природа');
    const onChange = (evt) => {
        setInput(evt.target.value);
    }
    return(
        <form className="search-field">
            <div className="search-field__input-wrapper">
                <input value={input} onChange={onChange} className="search-field__input"></input>
            </div>
            <button className="search-field__button">Искать</button>
        </form>
    )
}