import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/js/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/js/About";
import Yournotes from "./components/js/Yournotes";
import Addnotes from "./components/js/Addnotes";
import Login from "./components/js/Login";
import Signup from "./components/js/Signup";
import DataState from "./context/DataState";
import Alert from "./components/js/Alert";
import AlertState from "./context/Alert/AlertState";

function App() {

  return (
    <>
      <DataState>
        <AlertState>
          <Router>
            <Navbar />
            
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/yournotes">
                <Yournotes />
              </Route>
              <Route exact path="/addnotes">
                <Addnotes />
              </Route>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signUp">
                <Signup />
              </Route>
            </Switch>
          </Router>
        </AlertState>
      </DataState>
    </>
  );
}

export default App;
