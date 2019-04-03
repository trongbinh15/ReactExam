import React, { useState } from "react";
import { Upload } from "../../firebase/firebase";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    Upload(email, pwd, name);
  };

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
            title="Name should not contain numbers and at least 3 characters."
            onChange={e => setName(e.target.value)}
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
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPwd(e.target.value)}
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
