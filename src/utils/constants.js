export const MAIN_BASEURL = 'https://api.danamovies.nomoredomainsicu.ru';
export const MOVIES_BASEURL = 'https://api.nomoreparties.co/beatfilm-movies';
export const IMAGES_URL = 'https://api.nomoreparties.co';

export const SHORT_FILM_DURATION = 40;
export const HTTP_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=/]*)$/;
export const ROUTE = Object.freeze({
  MAIN: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  PROFILE: '/profile',
  MOVIES: '/movies',
  MOVIES_SAVED: '/saved-movies',
  NOT_FOUND: '/404',
});

export const SearchMessage = {
  EMPTY: 'Нужно ввести ключевое слово',
  NOT_FOUND: 'Ничего не найдено',
  NOT_SAVED: 'У вас нет сохранённых фильмов',
  SEARCH_ERROR: 'Во время загрузки сохранённых фильмов произошла ошибка. Подождите немного и попробуйте обновить страницу.',
}

export const AppMessage = {
  SUCCESS: 'Всё прошло успешно!',
  REGISTER_SUCCESS: 'Вы успешно зарегистрировались!',
  UPDATE_SUCCESS: 'Ваши данные успешно изменены',
  ERROR: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
  BAD_REQUEST: 'Что-то пошло не так.',
}

export const CodeError = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  ALREADY_EXISTS: 409,
  SERVER_ERROR: 500,
};

export const VALIDATION = {
  username: {
    pattern: '^[\\sa-zA-Zа-яА-ЯёЁ-]+$',
    message: 'Имя может содержать только латиницу, кириллицу, пробел или дефис',
  },
  email: {
    pattern: '^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$',
    message: 'Некорректный Email-адрес',
  },
};

export const movies = [
  {
    id: 1,
    name: '33 слова о дизайне',
    image: 'https://beatfilmfestival.ru/media/pages/movies/33/702326800-1606827747/33-1-2000x869.jpg',
    duration: '1ч 17м',
    saved: false,
  },
  {
    id: 2,
    name: 'Киноальманах «100 лет дизайна»',
    image: 'https://beatfilmfestival.ru/media/pages/movies/32-sounds/237627196-1693654105/032-sounds-stills-2000x869.jpg',
    duration: '1ч 17м',
    saved: true,
  },
  {
    id: 3,
    name: 'В погоне за Бенкси',
    image: 'https://beatfilmfestival.ru/media/pages/movies/lynch-oz/1740816247-1680681220/lynch-oz-2000x869.jpg',
    duration: '1ч 17м',
    saved: false,
  },
  {
    id: 4,
    name: 'Баския: Взрыв реальности',
    image: 'https://beatfilmfestival.ru/media/pages/movies/lynch-oz/1740816247-1680681220/lynch-oz-2000x869.jpg',
    duration: '1ч 17м',
    saved: false,
  },
  {
    id: 5,
    name: 'Бег это свобода',
    image: 'https://beatfilmfestival.ru/media/pages/movies/free-to-run/2666705225-1606666283/run-2-2000x869.jpg',
    duration: '1ч 17м',
    saved: false,
  },
  {
    id: 3,
    name: 'В погоне за Бенкси',
    image: 'https://beatfilmfestival.ru/media/pages/movies/lynch-oz/1740816247-1680681220/lynch-oz-2000x869.jpg',
    duration: '1ч 17м',
    saved: false,
  }
];



export const savedMovies = [
  {
    id: 1,
    name: '33 слова о дизайне',
    image: 'https://beatfilmfestival.ru/media/pages/movies/33/702326800-1606827747/33-1-2000x869.jpg',
    duration: '1ч 17м',
    saved: false,
  },
  {
    id: 2,
    name: 'Киноальманах «100 лет дизайна»',
    image: 'https://beatfilmfestival.ru/media/pages/movies/32-sounds/237627196-1693654105/032-sounds-stills-2000x869.jpg',
    duration: '1ч 17м',
    saved: true,
  },
  {
    id: 3,
    name: 'В погоне за Бенкси',
    image: 'https://beatfilmfestival.ru/media/pages/movies/lynch-oz/1740816247-1680681220/lynch-oz-2000x869.jpg',
    duration: '1ч 17м',
    saved: false,
  }
];