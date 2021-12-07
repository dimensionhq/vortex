import { BlogProps } from "../../types/Blog";

export const Banner: React.FC<BlogProps> = (props) => {
  return (
    <div
      className="root"
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          height: "45vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: props.theme?.primary,
        }}
      >
        <img
          src={props.banner?.image}
          style={{
            top: "2vh",
            borderRadius: "10px",
            position: "absolute",
          }}
          width="80%"
          alt={props.banner?.title}
        />
      </div>
      <div className="title_section">
        <div className="main">
          <h3>{props.banner?.category}</h3>
          <h1>{props.banner?.title}</h1>
        </div>
      </div>
    </div>
  );
};
