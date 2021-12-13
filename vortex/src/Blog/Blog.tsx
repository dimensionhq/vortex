import { BlogProps, defaultProps } from "../types/Blog";
import Default from "./Default";
import Github from "./Github";
import DevTO from "./DevTO";
import Hashnode from "./Hashnode";
// import "../styles.css";

const Blog: React.FC<BlogProps> = (props) => {
  const blog_props: BlogProps = { ...defaultProps, ...props };
  console.log(blog_props);
  if (blog_props.type === "Default") {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font }}>
        <Default {...blog_props} />
      </div>
    );
  } else if (blog_props.type === "Github") {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font }}>
        <Github {...blog_props} />
      </div>
    );
  } else if (blog_props.type === "DevTO") {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font }}>
        <DevTO {...blog_props} />
      </div>
    );
  } else if (blog_props.type === "Hashnode") {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font }}>
        <Hashnode {...blog_props} />
      </div>
    );
  } else {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font }}>
        <Default {...blog_props} />
      </div>
    );
  }
};
export default Blog;
