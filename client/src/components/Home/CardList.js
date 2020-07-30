import React from "react";
import Card from "./Card";

import { data } from "../LandingPage/IconData/index";

const CardList = () => {
    return data.map(app => {
        return (
            <Card {...app} key={app.name} />
        );
    });
};

export default CardList;

// import React from "react";
// import "./CardList.css";
// import { data } from "../LandingPage/IconData/index";

// const CardList = ({ img, name, href, color }) => {

//   return (
//     <div class="card-container">
//       <div class="card-container-container">
//         <div class="card-container-container-card">
//           <div class="circle" style={{color:{color}}}>
//             <h2>02</h2>
//           </div>
//           <div class="content-paragraph">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
//               beatae ipsam, excepturi ipsum dolores nostrum aut libero molestias
//               magni sed suscipit voluptatem consectetur repellat, ducimus
//               accusantium. Perspiciatis optio molestias dicta.
//               <a href="#">Read more</a>
//             </p>
//           </div>
//         </div>
//         <div class="card-container-container-card">
//           <div class="circle" style={{color:{color}}}>
//             <h2>03</h2>
//           </div>
//           <div class="content-paragraph">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
//               beatae ipsam, excepturi ipsum dolores nostrum aut libero molestias
//               magni sed suscipit voluptatem consectetur repellat, ducimus
//               accusantium. Perspiciatis optio molestias dicta.
//               <a href="#">Read more</a>
//             </p>
//           </div>
//         </div>
//         <div class="card-container-container-card">
//           <div class="circle">
//             <h2>01</h2>
//           </div>
//           <div class="content-paragraph">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
//               beatae ipsam, excepturi ipsum dolores nostrum aut libero molestias
//               magni sed suscipit voluptatem consectetur repellat, ducimus
//               accusantium. Perspiciatis optio molestias dicta.
//               <a href="#">Read more</a>
//             </p>
//           </div>
//         </div>
//         <div class="card-container-container-card">
//           <div class="circle">
//             <h2>03</h2>
//           </div>
//           <div class="content-paragraph">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
//               beatae ipsam, excepturi ipsum dolores nostrum aut libero molestias
//               magni sed suscipit voluptatem consectetur repellat, ducimus
//               accusantium. Perspiciatis optio molestias dicta.
//               <a href="#">Read more</a>
//             </p>
//           </div>
//         </div>
//         <div class="card-container-container-card">
//           <div class="circle">
//             <h2>03</h2>
//           </div>
//           <div class="content-paragraph">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
//               beatae ipsam, excepturi ipsum dolores nostrum aut libero molestias
//               magni sed suscipit voluptatem consectetur repellat, ducimus
//               accusantium. Perspiciatis optio molestias dicta.
//               <a href="#">Read more</a>
//             </p>
//           </div>
//         </div>
//         <div class="card-container-container-card">
//           <div class="circle">
//             <h2>03</h2>
//           </div>
//           <div class="content-paragraph">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
//               beatae ipsam, excepturi ipsum dolores nostrum aut libero molestias
//               magni sed suscipit voluptatem consectetur repellat, ducimus
//               accusantium. Perspiciatis optio molestias dicta.
//               <a href="#">Read more</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardList;
