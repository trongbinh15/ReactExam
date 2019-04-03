import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/home/HomePage";
import { ToastContainer } from "react-toastify";
import Table from "./components/table/Table";
import LoginForm from "./components/form/LoginForm";

function App() {
  return (
    <div class="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/table" component={Table} />
        <Route path="/form" component={LoginForm} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
