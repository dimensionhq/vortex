import React, { useEffect } from "react";
import { BlogProps } from "../../types/Blog";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Content: React.FC<BlogProps> = (props) => {
  function convertToSlug(Text: string) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <div className="grid">
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
            h2: ({ children }) => (
              <div className="h1_parent">
                <h2
                  onClick={() => {
                    let slug = convertToSlug(children.toString());
                    let url = window.location.href;
                    if (!url.includes(slug)) {
                      url += "#" + slug;
                    }
                    navigator.clipboard.writeText(url);
                    window.location.replace(url.toString());
                  }}
                  className="h1"
                  id={convertToSlug(children.toString().toLowerCase())}
                >
                  {children}
                </h2>
              </div>
            ),
            li: ({ children }) => (
              <li style={{ marginBottom: "0.25rem" }}>{children}</li>
            ),
            h1: ({ children }) => (
              <div className="h1_parent">
                <h1
                  onClick={() => {
                    let slug = convertToSlug(children.toString());
                    let url = window.location.href;
                    if (!url.includes(slug)) {
                      url += "#" + slug;
                    }
                    navigator.clipboard.writeText(url);
                    window.location.replace(url.toString());
                  }}
                  className="h1"
                  id={convertToSlug(children.toString().toLowerCase())}
                >
                  {children}
                </h1>
              </div>
            ),
          }}
        />
      </div>
      <div className="share">
        <h1 style={{ color: "grey", fontWeight: "300" }}>Share</h1>
        <a
          className="link"
          href={`https://twitter.com/intent/tweet?text=${encodeURI(
            props.banner!.title.toString().trim() + "\n" + window.location.href
          )}`}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.643 4.937C22.808 5.307 21.911 5.557 20.968 5.67C21.941 5.08779 22.6689 4.17147 23.016 3.092C22.1018 3.63499 21.1013 4.0172 20.058 4.222C19.3564 3.47287 18.4271 2.97633 17.4143 2.80947C16.4016 2.64262 15.3621 2.81479 14.4572 3.29925C13.5524 3.78371 12.8328 4.55336 12.4102 5.4887C11.9875 6.42405 11.8855 7.47275 12.12 8.472C10.2677 8.379 8.45563 7.89755 6.80142 7.05891C5.14722 6.22026 3.68784 5.04316 2.518 3.604C2.118 4.294 1.888 5.094 1.888 5.946C1.88755 6.713 2.07643 7.46824 2.43788 8.14473C2.79932 8.82122 3.32216 9.39804 3.96 9.824C3.22028 9.80046 2.49687 9.60058 1.85 9.241V9.301C1.84993 10.3767 2.22203 11.4194 2.90318 12.252C3.58433 13.0846 4.53257 13.6559 5.587 13.869C4.90078 14.0547 4.18134 14.0821 3.483 13.949C3.7805 14.8746 4.36 15.684 5.14037 16.2639C5.92074 16.8438 6.86292 17.1652 7.835 17.183C6.18483 18.4784 4.14689 19.1811 2.049 19.178C1.67738 19.1781 1.30608 19.1564 0.937 19.113C3.06648 20.4822 5.54534 21.2088 8.077 21.206C16.647 21.206 21.332 14.108 21.332 7.952C21.332 7.752 21.327 7.55 21.318 7.35C22.2293 6.69097 23.0159 5.8749 23.641 4.94L23.643 4.937V4.937Z"
                fill="currentColor"
              />
            </svg>
          </span>
          Twitter
        </a>
        <a className="link" href="https://linkedin.com">
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19364 2.35053 0.999999 2.838 0.999999H21.16C21.4016 0.999604 21.6409 1.04686 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4612 1.53733C22.6322 1.70806 22.7677 1.91082 22.8602 2.13401C22.9526 2.35719 23.0001 2.59642 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08667 7.83217 6.35979 7.73124 6.61531C7.63031 6.87084 7.47935 7.10363 7.28723 7.30003C7.09511 7.49643 6.8657 7.65247 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65247 4.52989 7.49643 4.33777 7.30003C4.14565 7.10363 3.99469 6.87084 3.89376 6.61531C3.79283 6.35979 3.74395 6.08667 3.75 5.812C3.76187 5.27285 3.98439 4.75979 4.36989 4.38268C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86961 4.00558 7.25512 4.38268C7.64062 4.75979 7.86313 5.27285 7.875 5.812V5.812Z"
                fill="currentColor"
              />
            </svg>
          </span>
          Linkedin
        </a>
      </div>
    </div>
  );
};
