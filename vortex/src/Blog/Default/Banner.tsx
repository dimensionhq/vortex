import { BlogProps } from "../../types/Blog";

export const Banner: React.FC<BlogProps> = (props) => {
  return (
    <div className="root">
      <div
        style={{
          height: "400px",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: props.theme?.primary,
        }}
      >
        <div
          style={{
            width: "80%",
            marginTop: "100px",
            height: "60vh",
            backgroundImage: `url(${props.banner?.image.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxShadow: props.banner?.image.shadow,
            borderRadius: props.banner?.image.rounded,
          }}
        ></div>
        {/* {props.banner?.image} */}
      </div>
    </div>
  );
};
