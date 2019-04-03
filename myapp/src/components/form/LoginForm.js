import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div class="form-group">
        <label for="inputUsername">Username</label>
        <input
          type="email"
          class="form-control"
          id="inputUsername"
          placeholder="Enter username"
        />
      </div>
      <div class="form-group">
        <label for="InputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="InputPassword"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
