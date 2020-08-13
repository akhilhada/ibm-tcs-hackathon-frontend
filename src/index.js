import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login2 from "./components/Login2";
import SignUp from "./components/Signup";
import HospitalHome from "./components/HospitalHome";
import EmergencyHome from "./components/EmergencyHome";
import TestcenterHome from "./components/TestcenterHome";
import Feedback from "./components/Feedback";

const createBrowserHistory = require("history").createBrowserHistory;

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" render={() => <Login2 />}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
      <Route
        path="/home"
        render={() => (
          <Layout>
            <App />
          </Layout>
        )}
      ></Route>
      <Route
        path="/hospitals"
        render={() => (
          <Layout>
            <HospitalHome />
          </Layout>
        )}
      ></Route>
      <Route
        path="/emergency-services"
        render={() => (
          <Layout>
            <EmergencyHome />
          </Layout>
        )}
      />
      <Route
        path="/testcenter-results"
        render={() => (
          <Layout>
            <TestcenterHome />
          </Layout>
        )}
      />
      <Route
        path="/feedback"
        render={() => (
          <Layout>
            <Feedback />
          </Layout>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
