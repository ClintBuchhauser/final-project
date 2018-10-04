import React, { Component } from "react";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

class App extends Component {

  // state = {
  //   user: {
  //     loggedIn: false,
  //     username: null,
  //   }
  // }

  // fetchUser = () => {
  //   return true
  // }

  // componentDidMount() {
  //   this.fetchUser()
  //   .then(user => this.setState({ user: { loggedIn: true }}))
  // }

  render() {
    return (

      <Router>
        <div>
          <Nav />
          <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/user/:username" component={UserPage} />
              <Route component={NoMatch} />
            </Switch>
        <Footer />
        </div>
    </Router>
);
}}

export default App;
