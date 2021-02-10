import React, { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute ({ isLoggedIn, onRedirect, ...routerProps  }) {
    useEffect(() => {
        if (!isLoggedIn) {
            onRedirect();
        }
    }, [isLoggedIn])
    return (
        isLoggedIn ? <Route {...routerProps} /> : <Redirect to="./" />
    )
};

export default ProtectedRoute