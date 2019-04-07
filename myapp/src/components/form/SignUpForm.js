import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userAction from "../../redux/actions/userAction";

class SignUpForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  componentDidMount() {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.actions.createUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
  };
  render() {
    if (this.props.creating) {
      return <h1>Creating...</h1>;
    }
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="InputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="InputName"
              placeholder="Enter name"
              pattern="[A-Za-z\s\p{L}]{3,}"
              title="Name should not contain numbers and at least 3 characters."
              onChange={e => this.setState({ name: e.target.value })}
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
              onChange={e => this.setState({ email: e.target.value })}
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
              onChange={e => this.setState({ password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    creating: state.userReducer.creating
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createUser: bindActionCreators(userAction.createUser, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
