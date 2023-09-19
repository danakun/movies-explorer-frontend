import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import iconError from '../../images/iconError.svg';
import iconSuccess from '../../images/iconSuccess.svg';
import './InfoToolTip.css';

function InfoToolTip({ isOpen, onClose, isSuccessful, onOverlayClick }) {
  const message = `${
    isSuccessful
      ? 'Вы успешно зарегистрировались!'
      : 'Что-то пошло не так! Попробуйте ещё раз.'
  }`;

  const icon = isSuccessful ? iconSuccess : iconError;

  return (
    <section
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      id="popup-info-tooltip"
      onClick={onOverlayClick}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        />
        <img
          className="popup__icon popup__icon_type_tooltip"
          src={icon}
          alt={message}
        />
        <p className="popup__info">{message}</p>
      </div>
    </section>
  );
}

// Add PropTypes validations
InfoToolTip.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isSuccessful: PropTypes.bool.isRequired,
  onOverlayClick: PropTypes.func.isRequired,
};

export default InfoToolTip;