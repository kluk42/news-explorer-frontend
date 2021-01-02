import React from 'react';
import SearchSection from '../SearchSection/SearchSection';
import SearchResults from '../SearcResults/SearchResults';
import AboutAuthor from '../AboutAuthor/AboutAuthor';

function Main () {
    return (
        <main className="content">
            <SearchSection />
            <SearchResults />
            <AboutAuthor />
        </main>
    )
}

export default Main