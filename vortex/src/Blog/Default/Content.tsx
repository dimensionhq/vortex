import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { BlogProps } from "../../types/Blog";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";

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
          <h1
            style={{
              marginTop: "2px",
              fontSize: "20px",
              color: props.theme?.text,
            }}
          >
            {props.author?.name}
          </h1>
          <p style={{ marginTop: "0px", fontSize: "13px", color: "grey" }}>
            {props.banner?.date}
          </p>
        </div>
        <div style={{ width: "100%" }} className="md">
          <h1 style={{ fontSize: "3rem" }}>{props.banner?.title}</h1>
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
                    customStyle={{
                      borderRadius: "5px",
                      width: "auto",
                      overflow: "auto",
                    }}
                    // @ts-expect-error
                    style={{ ...themes[theme] }}
                    showLineNumbers={true}
                    language={match[1]}
                    PreTag="div"
                    {...propso2}
                  />
                ) : (
                  <code
                    style={{
                      backgroundColor: "#dbdbdb",
                      padding: "0px 5px",
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
