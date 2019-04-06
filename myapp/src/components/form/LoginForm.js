import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import database from "../../firebase/firebase";
import { bindActionCreators } from "redux";
import * as apiStatusAction from "../../redux/actions/apiStatusAction";

const handleSubmit = e => {
  e.preventDefault();
  console.log("submit");
};



const LoginForm = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    database
      .ref("accounts")
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        setData(expenses);
      });
  });


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="InputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
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

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      api: bindActionCreators(apiStatusAction.beginApi, dispatch)
    }
  };
}

export default LoginForm;
