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
        <div className="form-group">
          <label htmlFor="InputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            placeholder="Enter name"
            pattern="[A-Za-z\s\p{L}]{3,}"
            title="Name should not contain numbers and at least 3 characters."
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputEmail">Email address</label>
          <input
            type="text"
            className="form-control"
            id="InputEmail"
            placeholder="Enter email"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            title="Invalid email"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            placeholder="Password"
            pattern=".{6,}"
            title="Require six or more characters"
            onChange={e => setPwd(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
