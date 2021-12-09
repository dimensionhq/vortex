import React from "react";
import { defaultValues, BlogProps } from "../types/Blog";
import { Default } from "./Default";
import { DevTO } from "./DevTO";
import { Github } from "./Github";
import { Hashnode } from "./Hashnode";
export const Blog: React.FC<BlogProps> = (props) => {
  const blog_props: BlogProps = { ...defaultValues, ...props };
  if (blog_props.type === "Github") {
    return <Github {...blog_props} />;
  } else if (blog_props.type === "Dev.to") {
    return <DevTO {...blog_props} />;
  } else if (blog_props.type == "Hashnode") {
    return <Hashnode {...blog_props} />;
  } else {
    return <Default {...blog_props} />;
  }
};
