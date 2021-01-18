import React, { useState } from 'react';

export default function SearchField() {
    const [ input, setInput ] = useState('Природа');
    const [ isFocused, setIsFocused ] = useState(false);

    const onChange = (evt) => {
        setInput(evt.target.value);
    }

    const onFocusAndBlur = () => {
        setIsFocused(!isFocused);
    }
    return(
        <form className="search-field">
            <div className={`search-field__input-wrapper ${isFocused && 'search-field__input-wrapper_focused'}`}>
                <input required formNoValidate onFocus={onFocusAndBlur} onBlur={onFocusAndBlur} value={input} onChange={onChange} className="search-field__input"></input>
            </div>
            <button className="search-field__button">Искать</button>
        </form>
    )
}