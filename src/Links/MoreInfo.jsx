import React from "react";
import { Link } from "react-router-dom";

const MoreInfo = (props) => {
  return (
    <div className="moreInfo">
      <div>
        {props.title.toString().split("").slice(0, 36)}
        <Link className="infoLink" to={`/news/${props.id}`}>
          <img src={props.img} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default MoreInfo;
