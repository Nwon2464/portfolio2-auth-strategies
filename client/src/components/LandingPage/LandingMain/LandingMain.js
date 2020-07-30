// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import "./LandingMain.css";
// import ButtonList from "../Header/HeaderAuthIcon/ButtonList";
// import {fetchUser} from "../../../ReduxActions/index";
// const LandingMain = (props) => {
//   const dropdownRef = useRef(null);
//   const [isActive, setIsActive] = useState(false);
//   const onClick = () => setIsActive(!isActive);
//   useEffect(() => {
//     const pageClickEvent = (e) => {
//       if (
//         dropdownRef.current !== null &&
//         !dropdownRef.current.contains(e.target)
//       ) {
//         setIsActive(!isActive);
//       }
//     };
//     if (isActive) {
//       window.addEventListener("click", pageClickEvent);
//     }
//     return () => {
//       window.removeEventListener("click", pageClickEvent);
//     };
//   }, [isActive]);

//   useEffect(()=>{
//     props.fetchUser();
//   },[])

//   const renderContent = () => {
//     if (props.auth) {
//       return (
//         <li>
//           <a href="/auth/logout">Log out</a>
//         </li>
//       );
//     } else {
//       return (
//         <li>
//           <button onClick={onClick} className="submenu-button">
//             <span>Simple Auth</span>
//           </button>
//           <div
//             ref={dropdownRef}
//             className={`menu ${isActive ? "active" : "inactive"}`}
//           >
//             <ul className="links">
//               <ButtonList />
//             </ul>
//           </div>
//         </li>
//       );
//     }
//   };

//   const renderHeader = () => {
//     return (
//       <header>
//         <div className="header-image" />
//         <nav className="navigation" aria-label="Main navigation">
//           <ul className="links">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/posts">Posts a comment!</Link>
//             </li>
//             {renderContent()}
//           </ul>
//         </nav>
//       </header>
//     );
//   };
//   console.log(props);
//   return <div>{renderHeader()}</div>;
// };
// const mapStateToProps = (state) => {
//   return { auth: state.auth };
// };

// export default connect(mapStateToProps,{fetchUser})(LandingMain);

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./LandingMain.css";
import ButtonList from "../Header/HeaderAuthIcon/ButtonList";
import { fetchUser } from "../../../ReduxActions/index";

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

  const renderContent = () => {
    switch (props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <li>
            <a href="/auth/logout">Log out</a>
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
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
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
