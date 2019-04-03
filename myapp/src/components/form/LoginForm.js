import React from "react";

/*const validateInput = (type, checkingText) => {
  if (type === "email") {
  }

  if (type === "password") {
  }
};

const handleInput = event => {};

const handleInputValidation = event => {};

const FormError = props => {
  if (props.isHidden) {
    return null;
  }
  return <div>{props.errorMessage}</div>;
};
*/

const handleSubmit = e => {
  e.preventDefault();
  console.log("submit");
};

const LoginForm = () => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="InputEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group">
          <label for="InputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="InputPassword"
            placeholder="Password"
            pattern=".{6,}"
            title="Require six or more characters"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
