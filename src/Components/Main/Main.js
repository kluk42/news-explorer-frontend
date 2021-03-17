import React from 'react';
import { useUser } from '../../utils/useUser/useUser';
import SearchSection from '../SearchSection/SearchSection';
import SearchResults from '../SearcResults/SearchResults';
import AboutAuthor from '../AboutAuthor/AboutAuthor';
import { Route, Switch } from 'react-router-dom';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function Main ({ openLoginPopup, searchWords, handleSearchInput, onSubmitSearchInput, areArticlesPending, currentArticles, wasQueryDone, isSearchResponseWithError, saveCard, deleteCard, savedCards, onRedirect }) {
    const { userInfo } = useUser();
    const isLoggedIn = !!userInfo.user && !userInfo.isLoading;
    return (
        <main className="content">
            <Switch>
                <ProtectedRoute onRedirect={onRedirect} isLoggedIn={isLoggedIn} path="/saved-news">
                    <SavedNews deleteCard={deleteCard} savedCards={savedCards} />
                </ProtectedRoute>
                <Route exact path="/">
                        <SearchSection
                            handleSearchInput={handleSearchInput}
                            onSubmitSearchInput={onSubmitSearchInput}
                            searchWords={searchWords}
                        />
                        <SearchResults
                            saveCard={saveCard}
                            savedCards={savedCards}
                            isSearchResponseWithError={isSearchResponseWithError}
                            currentArticles={currentArticles}
                            searchWords={searchWords}
                            wasQueryDone={wasQueryDone}
                            areArticlesPending={areArticlesPending}
                            openLoginPopup={openLoginPopup}
                            deleteCard={deleteCard}
                        />
                        <AboutAuthor />
                </Route>
            </Switch>
        </main>
    )
}

export default Main