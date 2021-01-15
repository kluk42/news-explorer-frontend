import React, { useEffect } from 'react';
import SearchSection from '../SearchSection/SearchSection';
import SearchResults from '../SearcResults/SearchResults';
import AboutAuthor from '../AboutAuthor/AboutAuthor';
import { Route, Switch, useHistory } from 'react-router-dom';
import SavedNews from '../SavedNews/SavedNews';
import UserIntro from '../UserIntro/UserIntro';

function Main ({ setIsLoggedIn }) {
    const history = useHistory();

    useEffect(() => {
        // setIsLoggedIn(true);
        // history.push('/saved-news')
    }, [history])
    return (
        <main className="content">
            <Switch>
                <Route exact path="/">
                        <SearchSection />
                        <SearchResults />
                        <AboutAuthor />
                </Route>
                <Route path="/saved-news">
                    <UserIntro />
                    <SavedNews />
                </Route>
            </Switch>
        </main>
    )
}

export default Main