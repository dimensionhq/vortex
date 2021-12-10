import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { BlogProps } from "../../types/Blog";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../../styles/Hashnode.css";

export const Hashnode: React.FC<BlogProps> = (props) => {
  function convertToSlug(Text: string) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  return (
    <main
      style={{ backgroundColor: props.theme?.bgColor ?? "" }}
      className="main"
    >
      <div className="dev_to">
        <div className="dev_to_sub">
          <div
            style={{
              width: "100%",
              height: "50vh",
              backgroundImage: `url(${props.banner?.image.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: props.banner?.image.rounded,
            }}
          ></div>
          <div className="title">{props.banner?.title}</div>
          <hr color="grey" style={{ marginBottom: "20px" }} />
          <div className="author">
            <img
              src={props.author?.avatar}
              width="48px"
              style={{ borderRadius: "100%" }}
              alt=""
            />
            <div className="text">
              <h1 style={{ fontSize: "17px", marginBottom: "0px" }}>
                {props.author?.name}
              </h1>
              <p style={{ marginTop: "0px", fontSize: "13px" }}>
                {props.banner?.date}
              </p>
            </div>
          </div>
          <hr style={{ marginTop: "20px" }} />
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
    </main>
  );
};
