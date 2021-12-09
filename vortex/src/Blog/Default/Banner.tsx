import { BlogProps } from "../../types/Blog";

export const Banner: React.FC<BlogProps> = (props) => {
  return (
    <div className="root">
      <div
        style={{
          height: "600px",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: props.theme?.primary,
        }}
      >
        <img
          src={props.banner?.image.src}
          alt={props.banner?.image.alt}
          width={props.banner?.image.width}
          height={props.banner?.image.height}
          style={{ zIndex: 99999, marginTop: "500px" }}
        />
      </div>
    </div>
  );
};
