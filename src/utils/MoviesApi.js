import { MOVIES_BASEURL } from '../utils/constants';

class MoviesApi {
  constructor ({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIES_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default moviesApi;



// export const MOVIES_API_URL = 'https://api.nomoreparties.co/beatfilm-movies';

// class MoviesApi {
//   constructor(movieUrl) {
//     this._movieUrl = movieUrl;
//   }

//   _parseResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }
//   getMovies() {
//     return fetch(this._movieUrl).then((res) => this._parseResponse(res));
//   }
// }

// const moviesApi = new MoviesApi(MOVIES_API_URL);

// export default moviesApi;