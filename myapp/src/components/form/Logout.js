import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../redux/actions/userAction";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

class LogOut extends React.Component {
  componentDidMount() {
    this.props.actions.logOut();
    toast.success("Logout success!");
  }

  render() {
    return <Redirect to="/" />;
  }
}

LogOut.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logOut: bindActionCreators(userAction.logOut, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
