import React, { useState } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import {LoginStateContext} from '../Contexts/LoginStateContext';

function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ isLoginPopupOpen, setIsLoginPopupOpen ] = useState(false);

    const onMenuOpenClose = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    const onLoginBtnClick = () => {
      setIsLoginPopupOpen(true);
      setIsMenuOpen(false);
    }

    const closeAllPopups = () => {
      setIsLoginPopupOpen(false);
    }
  return (
      <LoginStateContext.Provider value={isLoggedIn}>
        <Header isLoginPopupOpen={isLoginPopupOpen} onMenuOpenClose={onMenuOpenClose} onLoginBtnClick={onLoginBtnClick} isInSavedNews={false} isMenuOpen={isMenuOpen} />
        <Main setIsLoggedIn={setIsLoggedIn} />
        <Footer/>
        < LoginPopup onClose={closeAllPopups} isOpen={isLoginPopupOpen}/>
      </LoginStateContext.Provider>
  );
}

export default App;
