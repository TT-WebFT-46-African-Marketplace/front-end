import React from "react";
import "./Form.css";

function Form(props) {
  const { values, change, submit, disabled, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    change(name, value); //function in Logins.js
  };

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <h1>Login</h1>
      <div className="textInput">
        {/* ////////// TEXT INPUTS ////////// */}
        <div className="formGroupInputs">
          <fieldset className="username">
            <legend>Username</legend>
            <input
              className="usernameInput"
              value={values.username}
              onChange={onChange}
              name="username"
              type="text"
              placeholder="username"
            />
          </fieldset>
          <fieldset className="password">
            <legend>Password</legend>
            <input
              className="passwordInput"
              value={values.password}
              onChange={onChange}
              name="password"
              type="password"
              placeholder="password"
            />
          </fieldset>
        </div>
        <div>
          <button id="signIn" disabled={disabled}>
            Sign In
          </button>
        </div>
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.password}</div>
        </div>
      </div>
    </form>
  );
}
export default Form;
