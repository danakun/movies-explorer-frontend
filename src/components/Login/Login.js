import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';
import useForm from '../../utils/useForm';


const Login = () => {
  const { enteredValues, errors, handleChange } = useForm();
  return (
    <main className='main main-login'>
      <div className="login">
        <div className="login__header">
          <Link to="/">
            <img className="login__logo" alt="Логотип дипломного проекта" src={logo} />
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
        </div>
        <form className="login__form">
          <label className="login__label" htmlFor="email">
            E-mail
          </label>
          <input
            className="login__input"
            type="email"
            id="email"
            name="email"
            required
            value={enteredValues.email || ''}
            onChange={handleChange}
            placeholder="pochta@yandex.ru"
          />
          <span className="login__error">{errors.email}</span>
          <label className="login__label" htmlFor="password">
            Пароль
          </label>
          <input
            className="login__input"
            type="password"
            id="password"
            name="password"
            required
            value={enteredValues.password || ''}
            onChange={handleChange}
            placeholder="Пароль"
          />
          <span className="login__error">{errors.password}</span>
          <button type="submit" className="login__button">
            Войти
          </button>
        </form>
        <div className="login__register">
          <span>Ещё не зарегистрированы?</span>
          <Link to="/signup" className="login__signup-link">
            Регистрация
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;