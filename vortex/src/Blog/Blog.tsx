import React from "react";
import { defaultValues, BlogProps } from "../types/Blog";
import { Github } from "./Github";

export const Blog: React.FC<BlogProps> = (props) => {
  const blog_props: BlogProps = { ...defaultValues, ...props };
  if (blog_props.type === "Github") {
    return <Github {...blog_props} />;
  } else {
    return <Github {...blog_props} />;
  }
};
