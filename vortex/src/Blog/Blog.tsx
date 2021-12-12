import { BlogProps, defaultProps } from "../types/Blog";
import Default from "./Default";
import Github from "./Github";
const Blog: React.FC<BlogProps> = (props) => {
  const blog_props: BlogProps = { ...defaultProps, ...props };
  console.log(blog_props);
  if (blog_props.type === "Default") {
    return (
      <div className="w-full h-full">
        <Default {...blog_props} />
      </div>
    );
  } else if (blog_props.type === "Github") {
    return (
      <div className="w-full h-full">
        <Github {...blog_props} />
      </div>
    );
  } else {
    return (
      <div className="w-full h-full">
        <Default {...blog_props} />
      </div>
    );
  }
};
export default Blog;
