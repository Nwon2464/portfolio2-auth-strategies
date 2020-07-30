import React from "react";
import { connect } from "react-redux";
const IconButton = ({ app }) => {
  const { img, href, alt, color, txt, name } = app;
  return (
    <li key={txt} className="icon-container">
      <a
        className="icon-anchor"
        style={{ backgroundColor: color }}
        href={href}
        title={txt}
      >
        <img className="icon-image" src={img} alt={alt} />
        <span className="icon-image-span">{name.toUpperCase()} Login</span>
      </a>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(IconButton);

