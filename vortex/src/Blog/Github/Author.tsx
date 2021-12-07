import React from "react";
import { BlogProps } from "../../types/Blog";

export const Author: React.FC<BlogProps> = (props) => {
  return (
    <div className="author">
      <img src={props.author?.avatar} alt="" />
      <h2 style={{ fontSize: "14px", color: "#586069" }}>
        {props.author?.name}
      </h2>
    </div>
  );
};
