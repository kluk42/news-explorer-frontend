const baseUrl = 'http://api.kluk-news.students.nomoredomains.rocks';

const handleLogin = async (email, password) => {
        const response = await fetch(`${baseUrl}/signin`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
        })
        if (response.ok) {
            return response
        } else {
            console.log(`Ошибка: ${response.status}`)
            return Promise.reject(response)
        }
}

const handleRegistration = async (email, password, name) => {
        const response = await fetch(`${baseUrl}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
                name
            })
        })
        if (response.ok) {
            return response;
        } else {
            return Promise.reject(response)
        }
}

export { handleLogin, handleRegistration };