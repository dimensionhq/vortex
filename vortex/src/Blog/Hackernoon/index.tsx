import { BlogProps } from "../../types/Blog";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../../styles/Hackernoon.css";

export const Hackernoon: React.FC<BlogProps> = (props) => {
  function convertToSlug(Text: string) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  return (
    <div
      className="main"
      style={{ backgroundColor: props.theme?.bgColor ?? "#212428" }}
    >
      <div style={{ color: props.theme?.text ?? "white" }} className="title">
        {props.banner?.title}
      </div>
      <div
        style={{
          paddingRight: "25px",
          paddingLeft: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        <div
          style={{
            color: props.theme?.text ?? "white",
          }}
          className="sub"
        >
          <p>{props.banner?.date}</p>
          <div></div>
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={props.banner?.image.src} width="100%" alt="" />
        </div>
        <div className="grid">
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <img width="78px" src={props.author?.avatar} alt="" />
            <a style={{ fontSize: "30px" }}>{props.author?.name}</a>
          </div>
          <div>
            <ReactMarkdown
              children={props.content}
              components={{
                code({ node, inline, className, children, ...propso2 }) {
                  const match = /language-(\w+)/.exec(className || "");
                  const theme: string = props.codeblock?.theme as any;
                  return !inline && match ? (
                    // @ts-expect-error
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={{
                        // @ts-expect-error
                        ...themes[theme],
                      }}
                      showLineNumbers={true}
                      language={match[1]}
                      PreTag="div"
                      {...propso2}
                    />
                  ) : (
                    <code
                      style={{
                        backgroundColor: "transparent",
                        padding: "0.4em",
                        borderRadius: "5px",
                        fontFamily: "Source Code Pro",
                      }}
                      className={className}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => (
                  <h1 id={convertToSlug(children.toString().toLowerCase())}>
                    {children}
                  </h1>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
