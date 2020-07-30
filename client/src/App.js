import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import LandingMain from "./components/LandingPage/LandingMain/LandingMain";
import Home from "./components/Home/Home";

import { fetchUser } from "./ReduxActions";
import "./App.css";
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <LandingMain />
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { fetchUser })(App);
