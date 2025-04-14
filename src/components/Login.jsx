// import{ useState } from 'react';
// export default function Login() {
//   const [enterValues, setEnterValues] = useState({
//     email: '',
//     password: '',
//   });
//   const[didEdit, setDidEdit] = useState({
//     email: false,
//     password: false,
//   });
//   const isEmailInValid = (didEdit.email && !enterValues.email.includes('@'));
//   function handleSubmit(event) {
//     event.preventDefault();
  
//     console.log(enterValues);
//   }
//   function handleEnteredValue(id, value) {
//     setEnterValues((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//     setDidEdit((prevState) => ({ /// for resteing the input for an other try
//       ...prevState,
//       [id]: false,
//     }));

//   }
//   function handleBlur(id) {
//     setDidEdit((prevState) => ({
//       ...prevState,
//       [id]: true,
//     }));
//   }
//   return (
//     <form onSubmit={handleSubmit} >
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//   id="email"
//   type="email"
//   name="email"
//   onBlur={() => handleBlur("email")}
//   onChange={(event) => handleEnteredValue("email", event.target.value)}
// />
// <div className="control-error">
//   {isEmailInValid && (
//     <p className="error">Please enter a valid email address</p>
//   )}
// </div>
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//   id="password"
//   type="password"
//   name="password"
//   onChange={(event) => handleEnteredValue("password", event.target.value)}
// />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button  className="button" >Login</button>
//       </p>
//     </form>
//   );
// }
/************an other way od handling user input by ref ******** */
// components/LoginForm.js
import React, { useRef, useState } from 'react';
import Input from './Input';

export default function LoginForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [emailError, setEmailError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!enteredEmail.includes('@')) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    console.log({
      email: enteredEmail,
      password: enteredPassword,
    });
  }

  function handleEmailChange() {
    if (emailError) setEmailError('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          type="email"
          inputRef={emailInputRef}
          error={emailError}
          onChange={handleEmailChange}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          inputRef={passwordInputRef}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
