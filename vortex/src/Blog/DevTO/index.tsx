import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import remarkGfm from "remark-gfm";
import { BlogProps } from "../../types/Blog";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";
import TweetEmbed from "react-tweet-embed";
import ReactEmbedGist from "react-embed-gist";
// @ts-expect-error
import Codepen from "react-codepen-embed";
import { Reaction } from "./Reaction";

const Hashnode: React.FC<BlogProps> = (props) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const components: Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
  > = {
    h1: ({ children }) => (
      <h1
        style={{ color: props.theme?.inlineTextColor }}
        className="text-2xl font-extrabold xl:text-[2.75rem] 2xl:text-[2.75rem] md:text-4xl mt-4 mb-2"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{ color: props.theme?.inlineTextColor }}
        className="text-xl font-bold xl:text-2xl md:text-3xl 2xl:text-3xl mt-2 mb-3"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{ color: props.theme?.inlineTextColor }}
        className="text-lg font-bold xl:text-xl md:text-2xl 2xl:text-2xl mt-2 mb-3"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{ color: props.theme?.inlineTextColor }}
        className="text-base font-bold xl:text-lg md:text-xl 2xl:text-xl"
      >
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        style={{ color: props.theme?.inlineTextColor }}
        className="text-sm font-bold xl:text-base md:text-lg 2xl:text-lg"
      >
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        style={{ color: props.theme?.inlineTextColor }}
        className="text-xs font-bold xl:text-sm md:text-base 2xl:text-lgx"
      >
        {children}
      </h6>
    ),
    p: ({ children, ...rest }) => (
      <p className="mb-3 leading-7" {...rest}>
        {children}
      </p>
    ),
    link: ({ children, ...rest }) => {
      if (rest.href?.startsWith("https://twitter.com")) {
        let id =
          rest.href?.match(/twitter.com\/.*\/([0-9]+).*/) ??
          "1468899596730441730";
        return (
          <TweetEmbed
            id={id[1]}
            options={{ theme: props.theme?.twitter?.theme ?? "dark" }}
          />
        );
      } else if (rest.href?.startsWith("https://gist.github.com")) {
        let id = rest.href?.match(
          /gist.github.com\/(.*\/[(\w)+].*)(#[(\w)+].*)/
        ) ?? ["", "c332ab20f5b721a0828759d70a52b986", "#file-discord-ex"];
        return (
          <ReactEmbedGist
            gist={id[1] as any}
            wrapperClass="gist__bash"
            loadingClass="loading__screen"
            titleClass="gist__title"
            errorClass="gist__error"
            contentClass="gist__content"
            file={id[2]}
          />
        );
      } else if (rest.href?.startsWith("https://codepen.io/")) {
        let id = rest.href?.match(
          /codepen.io\/([(\w)+]*.)\/pen\/([(\w)+]*.)/
        ) ?? ["", "alvaromontoro", "vYexLGV"];
        return <Codepen hash={id[2]} user={id[1]} />;
      } else {
        return (
          <a
            href={rest.href}
            className="no-underline hover:underline mt-4 mb-4 text-blue-500"
            style={{ textDecorationColor: props.theme?.inlineBgColor }}
          >
            {children}
          </a>
        );
      }
    },
    a: ({ children, ...rest }) => {
      if (rest.href?.startsWith("https://twitter.com")) {
        let id =
          rest.href?.match(/twitter.com\/.*\/([0-9]+).*/) ??
          "1468899596730441730";
        return (
          <TweetEmbed
            id={id[1]}
            options={{ theme: props.theme?.twitter?.theme ?? "dark" }}
          />
        );
      } else if (rest.href?.startsWith("https://gist.github.com")) {
        let id = rest.href?.match(
          /gist.github.com\/(.*\/[(\w)+].*)(#[(\w)+].*)/
        ) ?? ["", "c332ab20f5b721a0828759d70a52b986", "#file-discord-ex"];
        return (
          <ReactEmbedGist
            gist={id[1] as any}
            wrapperClass="gist__bash"
            loadingClass="loading__screen"
            titleClass="gist__title"
            errorClass="gist__error"
            contentClass="gist__content"
            file={id[2]}
          />
        );
      } else if (rest.href?.startsWith("https://codepen.io/")) {
        let id = rest.href?.match(
          /codepen.io\/([(\w)+]*.)\/pen\/([(\w)+]*.)/
        ) ?? ["", "alvaromontoro", "vYexLGV"];
        return <Codepen hash={id[2]} user={id[1]} />;
      } else {
        return (
          <a
            href={rest.href}
            className="no-underline hover:underline mt-4 mb-4 text-blue-500"
            style={{ textDecorationColor: props.theme?.inlineBgColor }}
          >
            {children}
          </a>
        );
      }
    },
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
            margin: "0px 5px 0px 5px",
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
            margin: "0px 5px 0px 5px",
            backgroundColor: props.theme?.inlineBgColor,
            padding: "3px 3px",
            color: "black",
            borderRadius: "5px",
          }}
          className={className}
          {...propso2}
        >
          {children}
        </code>
      );
    },
  };
  return (
    <div
      className="w-full h-full max-w-5xl flex flex-col lg:flex-row justify-start"
      style={{
        background: props.theme?.bgColor,
        color: props.theme?.textColor,
      }}
    >
      <div className="w-full h-full lg:w-[75%] ">
        <div className="flex flex-col gap-10">
          <img
            src={props.header?.image?.src}
            alt={props.header?.title}
            className="mb-4"
            style={{
              borderRadius: props.header?.image?.borderRadius ?? "10px",
            }}
          />
          <div className="px-3">
            <div
              style={{ borderColor: props.theme?.inlineBgColor }}
              className="flex items-center justify-start gap-5"
            >
              <img
                className="rounded-full"
                src={props.author.avatar}
                width="40px"
                alt=""
              />
              <div className="flex items-start justify-center flex-col">
                <h1 className="text-xl font-extrabold">{props.author.name}</h1>
                <p className="text-xs">
                  Published on{" "}
                  <span className="font-extrabold">
                    {new Date(props.date ?? "").toLocaleDateString(
                      "en-US",
                      options as any
                    )}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-start flex-col justify-center gap-1 mt-4 mb-8">
              <h1
                style={{ fontSize: props.header?.subtitle ? "2rem" : "3rem" }}
                className="font-extrabold mb-0"
              >
                {props.header?.title}
              </h1>
              <h5 className="mt-0 text-2xl font-normal">
                {props.header?.subtitle}
              </h5>
            </div>

            <ReactMarkdown plugins={[remarkGfm]} components={components}>
              {props.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[150px] right-0 items-center justify-center">
        <div className="w-auto col-span-2 lg:h-[100vh] lg:ml-[50px] lg:fixed lg:w-auto flex lg:flex-col items-center justify-center">
          <Reaction {...props} />
        </div>
      </div>
    </div>
  );
};

export default Hashnode;
