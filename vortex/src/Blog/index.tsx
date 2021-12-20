import { BlogProps } from "../types/Blog";
import Blog from "./Blog";
import "../index.css";

const MBlog: React.FC<BlogProps> = (props) => {
  return (
    <>
      <Blog {...props} />
    </>
  );
};

export default MBlog;
