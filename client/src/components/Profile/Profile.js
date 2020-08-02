import React, { Component, useState, useEffect } from "react";
import _ from "lodash";
import requireAuth from "../../HOC/requireAuth";
import { connect } from "react-redux";
import { fetchUser } from "../../ReduxActions/index";
import ProfileTag from "./ProfileTag";
import Terminal from "../Home/Terminal";
const Profile = (props) => {
  const [selected, setSelected] = useState("All");
  useEffect(() => {
    props.fetchUser();
  }, []);
  const renderProfile = () => {
    const userData = props.auth;
    // console.log(userData);
    const verifyData = Object.keys(userData).filter((key) => {
      return userData[key] !== null;
    });

    // console.log(verifyData);
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
    switch (props.auth) {
      case null:
        return;
      case false:
        props.history.push("/");
      default:
        return <>{renderProfile()}</>;
    }
  };

  return <div>{renderContent()}</div>;
};
const mapStatetoProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStatetoProps, { fetchUser })(Profile);
