import React from 'react';
import { useField } from 'formik';

export default function Field ({label, ...props}) {
    const [field, meta] = useField(props);
    return(
        <>
            <label htmlFor={props.id} className="form-container__label">{props.label}</label>
            <input {...field} {...props} className="form-container__input" ></input>
            <span className="form-container__err-text">{meta.touched && meta.error && meta.error}</span>
        </>
    )
}