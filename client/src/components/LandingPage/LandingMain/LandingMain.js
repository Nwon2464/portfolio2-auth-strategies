import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./LandingMain.css";
import { fetchUser } from "../../../ReduxActions/index";
import ButtonList from "../Header/HeaderAuthIcon/ButtonList";
import { data } from "../IconData";
const LandingMain = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  const checkImage = () => {
    const b = data.filter((datas) => {
      return datas.name === props.auth.provider;
    });
    if (!b[0]) {
      return;
    }
    return b[0].img;
  };
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <li style={{ display: "flex" }}>
            <a style={{ marginTop: "2px" }} href="/auth/logout">
              Log out
            </a>
            <img
              style={{ width: "25px", height: "25px" }}
              src={checkImage()}
              alt=""
            />
          </li>
        );
    }
  };

  const renderHeader = () => {
    return (
      <header>
        <div className="header-image" />
        <nav className="navigation" aria-label="Main navigation">
          <ul className="links">
            <li>
              <button onClick={onClick} className="submenu-button">
                <span>Authentication</span>
              </button>
              <div
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"}`}
              >
                <ul className="links">
                  <ButtonList />
                </ul>
              </div>
            </li>
            {renderContent()}
          </ul>
        </nav>
      </header>
    );
  };
  return <div>{renderHeader()}</div>;
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { fetchUser })(LandingMain);
