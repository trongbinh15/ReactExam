import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "./components/table/Table";
import LoginForm from "./components/form/LoginForm";
import SignUpForm from "./components/form/SignUpForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userAction from "./redux/actions/userAction";
import DashBoard from "./components/admindashboard/Dashboard";
import Logout from "./components/form/Logout";

class App extends React.Component {
  render() {
    const { logging } = this.props;
    return (
      <>
        <Header />
        <Switch>
          {/* <Route
            path="/form"
            render={() => (isAdmin ? <Form /> : <Redirect to="/" />)}
          /> */}
          <Route
            exact
            path="/"
            render={() => (!logging ? <DashBoard /> : <Redirect to="/login" />)}
          />
          <Route
            path="/home"
            render={() => (!logging ? <HomePage /> : <Redirect to="/login" />)}
          />
          <Route
            path="/table"
            render={() => (!logging ? <Table /> : <Redirect to="/login" />)}
          />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/logout" component={Logout} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    logging: state.userReducer.logging
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
)(App);
