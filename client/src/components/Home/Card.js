// import React from "react";

// const Card = ({ img, name, href, color }) => {
//     const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);

//     return (
//         <div
//             className="card"
//             style={{ border: `1px solid ${color}`, borderRadius: 2 }}
//             onClick={() => window.location = href}
//         >
//             <div>
//                 <p className="cardList" >
//                     {NAME}
//                 </p>
//             </div>
//             <div
//                 style={{
//                     minHeight: 100,
//                     minWidth: 100,
//                     background: `url("${img}") no-repeat center center / 50% ${color}`
//                 }}
//             />
//         </div>
//     );
//  };

// export default Card;

import React from "react";
import "./CardList.css";
const Card = ({ content,img, name, href, color, txt }) => {
  const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  return (
    <div class="card-container">
      <div class="card-container-container">
        <div
          class="card-container-container-card"
          style={{ border: `1px solid ${color}` }}
        >
          <div class="circle" style={{ background: `${color}` }}>
            <img src={`${img}`} className="social-icons" alt="" />
            {/* <h2>{NAME}</h2> */}
          </div>
          <div class="content-paragraph">
            <p style={{textAlign:"center",margin:"0 auto"}}>
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
