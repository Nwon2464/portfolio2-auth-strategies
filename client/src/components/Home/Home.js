import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../ReduxActions";
import requireAuth from "../../HOC/requireAuth";
import Terminal from "./Terminal";
import CardList from "./CardList";
import "./Home.css";
class Home extends React.Component {
  renderTerminal = () => {
    return (
      <div>
        <div className="page">
          <p className="page-title">
            Login Authentication Using Passport in Node.js
          </p>
          <p className="passport-title">
            Passport.js contains support for over
            <span> 500+ </span>
            Get started today with just a username and password for apps like
            Facebook, Instagram, and Google.
          </p>
          <Terminal
            userData={`Back end - MongoDB, Front end - React and Redux
        `}
            selected="All"
          />
          <p style={{ fontSize: 35, paddingBottom: "10px" }}>
            Popular Strategies
          </p>
          <div style={{ marginBottom: 20 }} />
        </div>

        <CardList />
      </div>
    );
  };

  renderContent = () => {
    if (this.props.auth === null) {
      return;
    } else if (this.props.auth === false) {
      this.props.history.push("/");
    } else {
      return;
    }
  };
  render() {
    return (
      <div>
        {/* {this.renderContent()} */}
        <div>{this.renderTerminal()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Home);
