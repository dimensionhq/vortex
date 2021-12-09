import React from "react";
import { BlogProps } from "../../types/Blog";

export const Banner: React.FC<BlogProps> = (props) => {
  if (props.banner) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "500px",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={props.banner.image.src}
          alt={props.banner.image.alt}
          width={props.banner.image.width}
          height={props.banner.image.height}
          // style={{ width: "50vw" }}
        />
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
          }}
        >
          <time className="date">{props.banner.date}</time>
          <p className="date">{props.banner.category}</p>
        </div>
        <h1 className="title">{props.banner.title}</h1>
      </div>
    );
  } else {
    return <div></div>;
  }
};
