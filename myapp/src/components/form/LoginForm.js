import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../redux/actions/userAction";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    const { users, actions } = this.props;

    if (users.length === 0) {
      actions.loadUsers();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { users, actions } = this.props;
    const result = users.filter(
      u => u.email === email && u.password === password
    );
    if (result.length > 0) {
      console.log("Đăng nhập thành công!");
      actions.setCurrentUser({ email: email, password: password });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="InputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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

LoginForm.propTypes = {
  users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.userReducer.users,
    currentUser: state.userReducer.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUsers: bindActionCreators(userAction.loadUsers, dispatch),
      setCurrentUser: bindActionCreators(userAction.setCurrentUser, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
