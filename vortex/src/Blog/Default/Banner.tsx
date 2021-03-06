import { Banner as BannerType, BlogProps } from "../../types/Blog";

const Banner: React.FC<BlogProps> = (props) => {
  if (props.header) {
    return (
      <div
        className="w-full h-35 md:h-48 xl:h-auto flex items-center justify-center relative"
        style={{ backgroundColor: props.theme?.primary }}
      >
        <img
          className="w-[95%] 2xl:w-[60%]  relative top-11 md:top-32"
          src={props.header?.image?.src}
          style={{ borderRadius: props.header?.image?.borderRadius ?? "5px" }}
          alt=""
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Banner;
