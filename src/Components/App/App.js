import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UserIntro from '../UserIntro/UserIntro';
import {LoginStateContext} from '../Contexts/LoginStateContext';

function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(true);
    const history = useHistory();

    useEffect(() => {
        // history.push('/saved-news')
    }, [history])

  return (
     <LoginStateContext.Provider value={isLoggedIn}>
            <Switch>
                <Route exact path="/">
                    <div className="background-img">
                        <Header isInSavedNews={false} />
                        <Main />
                        <Footer/>
                    </div>
                </Route>
                <Route path="/saved-news">
                    <Header isInSavedNews={true} />
                    <UserIntro />
                    <SavedNews />
                    <Footer/>
                </Route>
            </Switch>

    </LoginStateContext.Provider>
  );
}

export default App;
