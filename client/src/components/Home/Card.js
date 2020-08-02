import React from "react";
import "./CardList.css";
const Card = ({ content, img, name, href, color, txt }) => {
  const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  return (
    <div className="card-container">
      <div className="card-container-container">
        <div className="card-container-container-card">
          <div className="circle" style={{ background: `${color}` }}>
            <img src={`${img}`} className="social-icons" alt="" />
            {/* <h2>{NAME}</h2> */}
          </div>
          <div className="content-paragraph">
            <p style={{ textAlign: "center", margin: "0 auto" }}>
              {content}
              <a style={{ background: `${color}` }} href={href}>
                {`${txt}`}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
