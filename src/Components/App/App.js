import React, { useState, useEffect, useCallback } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import RegistrationSuccessPopup from '../RegistrationSuccessPopup/RegistrationSuccessPopup';
import NewsApi from '../../utils/NewsApiQueries/NewsApiQueries';
import MainApi from '../../utils/MainApi/MainApi';
import { handleLogin } from '../Auth/Auth';
import { handleRegistration } from '../Auth/Auth';
import Preloader from '../Preloader/Preloader';
import { useUser } from '../../utils/useUser/useUser';

function App() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ isLoginPopupOpen, setIsLoginPopupOpen ] = useState(false);
    const [ isRegistrationPopupOpen, setIsRegistrationPopupOpen ] = useState(false);
    const [ searchWords, setSearchWords ] = useState('Природа');
    const [ areArticlePending, setAreArticlesPending ] = useState(false);
    const [ wasQueryDone, setWasQueryDone ] = useState(false);
    const [ currentArticles, setCurrentArticles ] = useState([]);
    const [ isSearchResponseWithError, setIsSearchResponseWithError ] = useState(false);
    const [ errFromServer, setErrFromServer ] = useState('');
    const [ isSuccessPopupOpen, setIsSuccessPopupOpen ] = useState(false);
    const { getUser, userInfo } = useUser();
    const { isLoading } = userInfo;
    const [ api, setApi ] = useState();
    const [ savedCards, setSavedCards ] = useState();
    const [ wasRedirected, setWasRedirected ] = useState(false);

    const getSavedCards = useCallback(
        async () => {
        const cardsFromServer = await api.getSavedNews();
        setSavedCards(cardsFromServer);
    }, [api]
    )

    useEffect(() => {
        const lastKeyword = localStorage.getItem('lastKeyword');
        if (lastKeyword) setSearchWords(lastKeyword);
        if (!api) {
            const token = localStorage.getItem('token');
            if (token) {
                const mainApi =new MainApi(token);
                setApi(mainApi);
            };
        }
    }, [api, userInfo.user])

    useEffect(() => {
        if (api) {
            getSavedCards();
        }
    }, [api, getSavedCards])

    useEffect(() => {
        if (wasRedirected) {
            openLoginPopup();
            setWasRedirected(false);
        };
    }, [wasRedirected]);

    const onMenuOpenClose = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    const onLoginBtnClick = () => {
      setIsLoginPopupOpen(true);
      setIsMenuOpen(false);
      window.addEventListener('keydown', handleEscClose);
    }

    const onRegistrationLinkClick = () => {
        closeAllPopups();
        setIsRegistrationPopupOpen(true);
        window.addEventListener('keydown', handleEscClose);
    }

    const openLoginPopup = () => {
        closeAllPopups();
        setIsLoginPopupOpen(true);
        window.addEventListener('keydown', handleEscClose);
    }

    const onSuccessfulRegistration = () => {
        closeAllPopups();
        setIsSuccessPopupOpen(true);
        window.addEventListener('keydown', handleEscClose);
    }

    const handleEscClose = (evt) => {
        if (evt.key === 'Escape') closeAllPopups();
    }

    const closeAllPopups = () => {
      setIsLoginPopupOpen(false);
      setIsRegistrationPopupOpen(false);
      setIsSuccessPopupOpen(false);
      window.removeEventListener('keydown', handleEscClose);
    }

    const handleSearchInput = (evt) => {
        setSearchWords(evt.target.value);
    }

    const onSubmitSearchInput = async (evt) => {
        evt.preventDefault();
        const newsApi = new NewsApi();
        try {
            setAreArticlesPending(true);
            const response = await newsApi.getNews(searchWords);
            if (!wasQueryDone) setWasQueryDone(true);
            if (isSearchResponseWithError) setIsSearchResponseWithError(false);
            if (response.totalResults !== 0) {
                localStorage.setItem('currentArticles', JSON.stringify(response.articles));
                localStorage.setItem('lastKeyword', searchWords)
                setCurrentArticles(response.articles);
            } else {
                localStorage.setItem('currentArticles', JSON.stringify(null));
                setCurrentArticles(null);
            }
        }
        catch (err) {
            console.log(err);
            setIsSearchResponseWithError(true);
        }
        finally {
            setAreArticlesPending(false);
        }
    }

    const onSubmitLoginForm = async (email, password) => {
        try {
            setErrFromServer('');
            const response = await handleLogin(email, password);
            const { token } = await response.json();
            onLoginSuccess(token);
        }
        catch (err) {
            let errParsed= await err.json();
            if (err.status !== 500) {
                setErrFromServer(errParsed.message)
            } else {
                setErrFromServer('На сервере проблемы. Подождите немного и попробуйте ещё раз')
            }
            console.log(errParsed)
        }
    }

    const onSubmitRegistrationForm = async (email, password, name) => {
        try {
            const response = await handleRegistration(email, password, name);
            const { successMsg } = await response.json();
            console.log(successMsg);
            onSuccessfulRegistration(); // Открыть попап с поздравлением
        }
        catch (err) {
            let errParsed= await err.json();
            if (err.status !== 500) {
                setErrFromServer(errParsed.message)
            } else {
                setErrFromServer('На сервере проблемы. Подождите немного и попробуйте ещё раз')
            }
            console.log(errParsed)
        }
    }

    const onLoginSuccess = (token) => {
        closeAllPopups();
        localStorage.setItem('token', token);
        getUser(token);
    }

    const saveCard = async (cardToSave) => {
            const savedCard = await api.uploadNewsCard(cardToSave);
            setSavedCards(savedCards => [...savedCards, savedCard]);
            return savedCard;
    }

    const deleteCard = async (id) => {
        api.deleteNewsCard(id);
        const oldCardsList = savedCards;
        const newCardsList = oldCardsList.filter((oldCard) => oldCard._id !== id);
        setSavedCards(newCardsList);
    }

    const onRedirect = () => {
        setWasRedirected(true);
    }

    if (isLoading) {
        return <Preloader />
    }
        return (
            <>
                <Header isLoginPopupOpen={isLoginPopupOpen} onMenuOpenClose={onMenuOpenClose} onLoginBtnClick={onLoginBtnClick} isMenuOpen={isMenuOpen} />
                <Main deleteCard={deleteCard} onRedirect={onRedirect} savedCards={savedCards} saveCard={saveCard} isSearchResponseWithError={isSearchResponseWithError} wasQueryDone={wasQueryDone} areArticlesPending={areArticlePending} handleSearchInput={handleSearchInput} onSubmitSearchInput={onSubmitSearchInput} searchWords={searchWords} currentArticles={currentArticles}  />
                <Footer/>
                {isLoginPopupOpen && <LoginPopup onSubmit={onSubmitLoginForm} errFromServer={errFromServer} onLoginSuccess={onLoginSuccess} openRegistration={onRegistrationLinkClick} onClose={closeAllPopups} />}
                {isRegistrationPopupOpen && <RegistrationPopup errFromServer={errFromServer} onSubmit={onSubmitRegistrationForm} onSuccessfulRegistration={onSuccessfulRegistration} openLogin={openLoginPopup} onClose={closeAllPopups} />}
                {isSuccessPopupOpen && <RegistrationSuccessPopup openLoginPopup={openLoginPopup} onClose={closeAllPopups} />}
            </>
  );
}

export default App;
