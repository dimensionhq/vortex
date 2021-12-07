import { BlogProps } from "../../types/Blog";
import { Banner } from "./Banner";
import { Content } from "./Content";
import "../../styles/Default.css";
export const Default: React.FC<BlogProps> = (props) => {
  return (
    <div className="main">
      <div className="blog_default">
        <div className="default">
          <Banner {...props} />
          <Content {...props} />
        </div>
      </div>
    </div>
  );
};
