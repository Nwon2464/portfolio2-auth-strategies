import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import LandingMain from "./components/LandingPage/LandingMain/LandingMain";
import Home from "./components/Home/Home";

import { fetchUser } from "./ReduxActions";
import "./App.css";
import Profile from "./components/Profile/Profile";
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <LandingMain />
        {this.props.auth ?<Profile {...this.props}/> : <Home/>}
        {/* <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} /> */}
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