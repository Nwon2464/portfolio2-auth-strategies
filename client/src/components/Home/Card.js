import React from "react";
import "./CardList.css";
import "./Home.css";

const Card = ({ content, img, name, href, color, txt }) => {
  const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  return (
    <div className="grid-card">
      <div className="grid-circle" style={{ background: `${color}` }}></div>
      <img src={`${img}`} className="grid-img" />
      <div className="grid-content">
        <p>{content}</p>
        <a style={{ background: `${color}` }} href={href}>{`${txt}`}</a>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="card-container">
      <div className="card-container-container">
        <div className="card-container-container-card">
          <div className="circle" style={{ background: `${color}` }}>
            <img src={`${img}`} className="social-icons" alt="" />
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
    </div> */
}
