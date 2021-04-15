class MainApi {
    constructor(token) {
        this._baseUrl = 'http://api.kluk-news.students.nomoredomains.rocks';
        this._token = token;
    }

    _resultsProcessing (res) {
        if (res.ok) {
            return res.json()
        } else {return Promise.reject(res)}
    }

    getSavedNews () {
        return fetch(`${this._baseUrl}/articles`, {
            headers: {
                authorization: `Bearer ${this._token}`,
                'content-type': 'application/json'
            }
        })
            .then(res => {
                return this._resultsProcessing(res)
            })
    }

    getUserInfo () {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: `Bearer ${this._token}`,
                'content-type': 'application/json'
            }
        })
            .then(res => {
                return this._resultsProcessing(res)
            })
    }

    sendUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${this._token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.newName,
                about: data.about
            })
        })
            .then(res => {
                return this._resultsProcessing(res)
            })
    }

    deleteNewsCard (id) {
        return fetch(`${this._baseUrl}/articles/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`,
                'content-type': 'application/json'
            },
        })
            .then(res => {
                return this._resultsProcessing(res)
            })
    }

    uploadNewsCard (card) {
        return fetch(`${this._baseUrl}/articles`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${this._token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(card)
        })
            .then(res => {
                return this._resultsProcessing(res)
            })
    }
}

export default MainApi;