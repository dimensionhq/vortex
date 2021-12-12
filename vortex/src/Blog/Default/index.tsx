import { BlogProps } from "../../types/Blog";
import Banner from "./Banner";
import Content from "./Content";

const Default: React.FC<BlogProps> = (props) => {
  return (
    <div
      className="w-full h-full flex items-center justify-center flex-col"
      style={{
        backgroundColor: props.theme?.bgColor,
        color: props.theme?.textColor,
      }}
    >
      <Banner {...props} />
      <Content {...props} />
    </div>
  );
};
export default Default;
