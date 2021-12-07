import React from "react";
import { BlogProps } from "../../types/Blog";
import { Banner } from "./Banner";
import "../../styles/Blog.css";
import { Author } from "./Author";
import { Content } from "./Content";

export const Github: React.FC<BlogProps> = (props) => {
  return (
    <div className="main">
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
