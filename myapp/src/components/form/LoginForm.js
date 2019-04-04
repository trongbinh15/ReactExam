import React from "react";
import { connect } from "react-redux";

import { GetData } from "../../firebase/firebase";
import { bindActionCreators } from "C:/Users/binh.nguyen/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux";
import * as apiStatusAction from "../../redux/actions/apiStatusAction";

const handleSubmit = e => {
  e.preventDefault();
  console.log("submit");
};

const LoginForm = () => {
  const data = GetData();

  console.log(data);

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
