import React from "react";

const handleSubmit = e => {
  e.preventDefault();
  console.log("submit");
};

const SignUpForm = () => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="InputName">Name</label>
          <input
            type="text"
            class="form-control"
            id="InputName"
            placeholder="Enter name"
            pattern="[A-Za-z\s\p{L}]{3,}"
            title="Name should only contain characters and at least 3."
            required
          />
        </div>
        <div class="form-group">
          <label for="InputEmail">Email address</label>
          <input
            type="text"
            class="form-control"
            id="InputEmail"
            placeholder="Enter email"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            title="Invalid email"
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

export default SignUpForm;
