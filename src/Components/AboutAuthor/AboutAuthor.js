import React from 'react';
import authorImg from '../../images/Author.jpg';

export default function AboutAuthor () {
    return (
        <section className="about-author">
            <h2 className="about-author__header">Об авторе</h2>
            <p className="about-author__text">
                Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.<br />
                Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.
            </p>
            <img src={authorImg} alt="Автор" className="about-author__img"></img>
        </section>
    )
}

