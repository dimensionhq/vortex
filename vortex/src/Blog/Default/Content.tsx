import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { BlogProps } from "../../types/Blog";
import * as themes from "react-syntax-highlighter/dist/esm/styles/prism";

export const Content: React.FC<BlogProps> = (props) => {
  function convertToSlug(Text: string) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  return (
    <div className="content">
      <div className="main">
        <div className="author">
          <img
            style={{ borderRadius: "100%" }}
            width="48px"
            src={props.author?.avatar}
            alt=""
          />
          <h1 style={{ marginTop: "2px", fontSize: "20px" }}>
            {props.author?.name}
          </h1>
          <p style={{ marginTop: "0px" }}>{props.banner?.date}</p>
        </div>
        <div className="md">
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
  );
};
