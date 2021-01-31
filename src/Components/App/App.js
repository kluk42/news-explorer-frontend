import React, { useState } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import {LoginStateContext} from '../Contexts/LoginStateContext';

function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ isLoginPopupOpen, setIsLoginPopupOpen ] = useState(false);
    const [ isRegistrationPopupOpen, setIsRegistrationPopupOpen ] = useState(false);

    const onMenuOpenClose = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    const onLoginBtnClick = () => {
      setIsLoginPopupOpen(true);
      setIsMenuOpen(false);
    }

    const onRegistrationLinkClick = () => {
        closeAllPopups();
        setIsRegistrationPopupOpen(true);
        console.log('bang')
    }

    const closeAllPopups = () => {
      setIsLoginPopupOpen(false);
      setIsRegistrationPopupOpen(false);
    }
  return (
      <LoginStateContext.Provider value={isLoggedIn}>
        <Header isLoginPopupOpen={isLoginPopupOpen} onMenuOpenClose={onMenuOpenClose} onLoginBtnClick={onLoginBtnClick} isMenuOpen={isMenuOpen} />
        <Main setIsLoggedIn={setIsLoggedIn} />
        <Footer/>
        {isLoginPopupOpen && <LoginPopup openRegistration={onRegistrationLinkClick} onClose={closeAllPopups} />}
      </LoginStateContext.Provider>
  );
}

export default App;
