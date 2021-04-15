import React from 'react';
import gitIconPath from '../../images/github.jpg';
import facebookIconPath from '../../images/facebook.jpg'

export default function Footer() {
    return(
        <footer className="footer">
            <p className="footer__about">&#169; 2020 Supersite, Powered by News API</p>
            <nav className="footer__navigation">
                <ul className="footer__links-list">
                    <li className="footer__links-list-item">
                        <a href="../" className="footer__link">Главная</a>
                    </li>
                    <li className="footer__links-list-item">
                        <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
                    </li>
                </ul>
                <ul className="footer__social-networks-list">
                    <li className="footer__social-networks-list-item">
                        <img src={gitIconPath} alt="git" className="footer__social-network-img"></img>
                    </li>
                    <li className="footer__social-networks-list-item">
                        <img src={facebookIconPath} alt="facebook" className="footer__social-network-img"></img>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
