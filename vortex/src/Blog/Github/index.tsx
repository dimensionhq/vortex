import React from "react";
import { BlogProps } from "../../types/Blog";
import { Banner } from "./Banner";
import "../../styles/Github.css";
import { Author } from "./Author";
import { Content } from "./Content";

export const Github: React.FC<BlogProps> = (props) => {
  return (
    <div className="main" style={{ backgroundColor: props.theme?.bgColor }}>
      <div className="blog">
        <div className="github">
          <Banner {...props} />
          <Author {...props} />
          <Content {...props} />
        </div>
      </div>
    </div>
  );
};
