class NewsApi {
    constructor() {
        this._baseUrl = 'http://newsapi.org/v2/everything?';
        this._apiKey = 'c10357eefcf64efba7a1148b3f05c801'
    }

    _resultsProcessing (res) {
        if (res.ok) {
            return res.json()
        } else {return Promise.reject(`Ошибка: ${res.status}`)}
    }

    getNews (keywords) {
        const q = `q=${keywords}&`;
        const currentDate = new Date();
        const weekBeforeDate = new Date(currentDate - 7*24*60*60*1000);
        const monthOfWeekBeforeDate = Number(weekBeforeDate.getMonth())<10 ? `0${Number(weekBeforeDate.getMonth())+1}` : Number(weekBeforeDate.getMonth())+1;
        const currentMonth = Number(currentDate.getMonth())<10 ? `0${Number(currentDate.getMonth())+1}` : Number(currentDate.getMonth())+1;
        const from = `from=${weekBeforeDate.getFullYear()}-${monthOfWeekBeforeDate}-${weekBeforeDate.getDate()}&`;
        const to = `to=${currentDate.getFullYear()}-${currentMonth}-${currentDate.getDate()}&`;
        const pageSize = 'pageSize=100';
        const queryUrl = this._baseUrl+q+from+to+pageSize;
        const response = fetch(queryUrl, {
            headers: {
                'Authorization': this._apiKey,
            }
        }).then(res => this._resultsProcessing(res));
        return response
    }
}

export default NewsApi;