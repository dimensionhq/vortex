import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { BlogProps } from "../../types/Blog";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../../styles/DevTO.css";

export const DevTO: React.FC<BlogProps> = (props) => {
  function convertToSlug(Text: string) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <main className="main">
      <div className="dev_to">
        <div className="dev_to_sub">
          <div
            style={{
              width: "100%",
              height: "40vh",
              backgroundImage: `url(${props.banner?.image.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: props.banner?.image.rounded,
            }}
          ></div>
          <div className="author">
            <img
              src={props.author?.avatar}
              width="30px"
              style={{ borderRadius: "100%" }}
              alt=""
            />
            <div className="text">
              <h1 style={{ fontSize: "15px", marginBottom: "0px" }}>
                {props.author?.name}
              </h1>
              <p style={{ marginTop: "0px", fontSize: "10px" }}>
                {props.banner?.date}
              </p>
            </div>
          </div>
          <div className="title">{props.banner?.title}</div>
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
                        backgroundColor: "#f7f7f7",
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
    </main>
  );
};
