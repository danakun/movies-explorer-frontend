import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ signOut }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isFormModified, setIsFormModified] = useState(false);
  const [newName, setNewName] = useState(''); // Added new state

  const initialName = 'Dana'; // Replace with your initial name
  const initialEmail = 'pochta@gmail.com'; // Replace with your initial email

  useEffect(() => {
    setName(initialName);
    setEmail(initialEmail);
  }, [initialName, initialEmail]);

  const handleEditClick = () => {
    setIsEdit(true);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    //  submission logic here (e.g., API request)
    // After successful submission, update user data
    setNewName(name);

    setIsEdit(false);
    setIsFormModified(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }

    if (value !== (name === 'name' ? initialName : initialEmail)) {
      setIsFormModified(true);
    } else {
      setIsFormModified(false);
    }
  };

  return (
    <main className='main'>
      <section className='profile'>
        <div className="profile__container">
          <h1 className="profile__title">Привет, {newName || 'Дана'}!</h1> {/* Updated title */}
          <form className="profile__form" onSubmit={handleSubmit}>
            <div className="profile__value">
              <label className="profile__label">Имя</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
                className="profile__input"
                required
                placeholder="Дана"
                readOnly={!isEdit}
              />
            </div>
            <div className="profile__line"></div>
            <div className="profile__value">
              <label className="profile__label">E-mail</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="profile__input"
                required
                placeholder="pochta@gmail.com"
                readOnly={!isEdit}
              />
            </div>
            <div className="profile__actions">
              {isEdit ? (
                <button
                  type="submit"
                  className={`profile__submit ${
                    !isFormModified ? 'profile__submit_disabled' : ''
                  }`}
                  disabled={!isFormModified}
                >
                  Сохранить
                </button>
              ) : (
                <button
                  type="button"
                  className="profile__edit"
                  onClick={handleEditClick}
                >
                  Редактировать
                </button>
              )}
              <button
              type="button"
              className="profile__logout"
              onClick={signOut}>
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

Profile.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Profile;





// import React from 'react';
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Profile.css';
// import Header from '../Header/Header';
// //import Preloader from '../Preloader/Preloader';


// const Profile = ({ isAuthorized }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   // const [isEdit, setIsEdit] = useState(false);
//   // const [isLoading, setIsLoading] = useState(false);

//   return (
//     <section>
//       <Header isAuthorized={isAuthorized} />
//       <div className="profile__container">
//         <h1 className="profile__title">Привет, Дана!</h1>
//         <form className="profile__form">
//           <div className="profile__value">
//             <label className="profile__label">Имя</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//               }}
//               className="profile__input"
//               required
//               placeholder="Дана"
//             />
//           </div>
//           <div className="profile__line"></div>
//           <div className="profile__value">
//             <label className="profile__label">E-mail</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               className="profile__input"
//               required
//               placeholder="pochta@gmail.com"
//             />
//           </div>
//         </form>
//         <div className="profile__actions">
//           <button type='button' className="profile__edit">Редактировать</button>
//           <button type='submit' className='profile__submit'>Сохранить</button>
//           <button type='button' className="profile__logout">Выйти из аккаунта</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Define PropTypes
// Profile.propTypes = {
//   isAuthorized: PropTypes.bool.isRequired,
// };

// export default Profile;


// {isLoading ? <Preloader /> : ''}
//         <p className='profile__error'>{errors.username || errors.email}</p>
//         {isEdit
//           ?
//           <button type='submit' className='profile__submit-btn' disabled={!isButtonActive}>Сохранить</button>
//           :
//           <button type='button' className='profile__edit-button' onClick={handleEdit}>Редактировать</button>
//         }
//         {!isEdit
//           ?
//           <button type='button' className='profile__exit-button' onClick={signOut}>Выйти из аккаунта</button>
//           :
//           ''
//         }

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './Profile.css';
// import Header from '../Header/Header';

// const Profile = ({ isAuthorized }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [isEdit, setIsEdit] = useState(false);
//   const [isFormModified, setIsFormModified] = useState(false);

//   // Assuming you have initial user data in props
//   useEffect(() => {
//     // Populate name and email with user data from props when component mounts
//     // Example: setName(initialName);
//     //          setEmail(initialEmail);
//   }, []);

//   const handleEditClick = () => {
//     setIsEdit(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform your submission logic here (e.g., API request)
//     // After successful submission, you can update user data if needed
//     // Example: setName(newName);
//     //          setEmail(newEmail);

//     setIsEdit(false);
//     setIsFormModified(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Update name and email fields when input changes
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'email') {
//       setEmail(value);
//     }

//     // Set the form as modified
//     setIsFormModified(true);
//   };

//   return (
//     <section>
//       <Header isAuthorized={isAuthorized} />
//       <div className="profile__container">
//         <h1 className="profile__title">Привет, Дана!</h1>
//         <form className="profile__form" onSubmit={handleSubmit}>
//           <div className="profile__value">
//             <label className="profile__label">Имя</label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={handleInputChange}
//               className="profile__input"
//               required
//               placeholder="Дана"
//               readOnly={!isEdit}
//             />
//           </div>
//           <div className="profile__line"></div>
//           <div className="profile__value">
//             <label className="profile__label">E-mail</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleInputChange}
//               className="profile__input"
//               required
//               placeholder="pochta@gmail.com"
//               readOnly={!isEdit}
//             />
//           </div>
//           <div className="profile__actions">
//             {isEdit ? (
//               <button
//                 type="submit"
//                 className="profile__submit"
//                 disabled={!isFormModified}
//               >
//                 Сохранить
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 className="profile__edit"
//                 onClick={handleEditClick}
//               >
//                 Редактировать
//               </button>
//             )}
//             <button type="button" className="profile__logout">
//               Выйти из аккаунта
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// Profile.propTypes = {
//   isAuthorized: PropTypes.bool.isRequired,
// };

// export default Profile;