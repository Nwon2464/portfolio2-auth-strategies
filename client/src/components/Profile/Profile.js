import React, { Component, useState, useEffect } from "react";
import _ from "lodash";
import requireAuth from "../../HOC/requireAuth";
import { connect } from "react-redux";
import { fetchUser } from "../../ReduxActions/index";
import ProfileTag from "./ProfileTag";
import Terminal from "../Home/Terminal";
const Profile = (props) => {
  const [selected, setSelected] = useState("All");

  const renderProfile = () => {
    const userData = props.auth;
    const verifyData = Object.keys(userData).filter((key) => {
      return userData[key] !== null;
    });
    return (
      <div className="needtobeFlexd" style={{ display: "flex" }}>
        <div className="All">
          <ProfileTag
            style={{ display: "flex" }}
            onClick={(e) => setSelected(e)}
            selected={selected}
            verifyData={verifyData}
          />
        </div>

        <Terminal verify={"checked"} userData={userData} selected={selected} />
      </div>
    );
  };
  const renderContent = () => {
      return <React.Fragment>{renderProfile()}</React.Fragment>;
  };

  return <div>{renderContent()}</div>;
};
const mapStatetoProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStatetoProps, { fetchUser })(Profile);
