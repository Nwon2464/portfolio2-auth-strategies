import React, { useRef } from "react";
import IconButton from "./IconButton";
import { data } from "../../IconData";

const ButtonList = (props) => {
  return data.map((app) => {
    return <IconButton app={app} key={app.name} />;
  });
};

export default ButtonList;
