import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import remarkGfm from "remark-gfm";
import { BlogProps } from "../../types/Blog";
import TweetEmbed from "react-tweet-embed";
// @ts-expect-error
import SuperReactGist from "super-react-gist";

// @ts-expect-error
import Codepen from "react-codepen-embed";
import { Reaction } from "./Reaction";
import { CodeBlock } from "../components/CodeBlock";
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
        style={{
          color: props.theme?.inlineTextColor,
          fontFamily: props.font?.header,
        }}
        className="text-2xl font-extrabold xl:text-[2.75rem] 2xl:text-[2.75rem] md:text-4xl mt-4 mb-2"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          color: props.theme?.inlineTextColor,
          fontFamily: props.font?.header,
        }}
        className="text-xl font-bold xl:text-2xl md:text-3xl 2xl:text-3xl mt-7 mb-2"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          color: props.theme?.inlineTextColor,
          fontFamily: props.font?.header,
        }}
        className="text-lg font-bold xl:text-xl md:text-2xl 2xl:text-2xl mt-2 mb-3"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{
          color: props.theme?.inlineTextColor,
          fontFamily: props.font?.header,
        }}
        className="text-base font-bold xl:text-lg md:text-xl 2xl:text-xl"
      >
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        style={{
          color: props.theme?.inlineTextColor,
          fontFamily: props.font?.header,
        }}
        className="text-sm font-bold xl:text-base md:text-lg 2xl:text-lg"
      >
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        style={{
          color: props.theme?.inlineTextColor,
          fontFamily: props.font?.header,
        }}
        className="text-xs font-bold xl:text-sm md:text-base 2xl:text-lgx"
      >
        {children}
      </h6>
    ),
    p: ({ children, ...rest }) => (
      <p
        className="mb-2 mt-2 leading-7"
        style={{ fontFamily: props.font?.body }}
        {...rest}
      >
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
        return <SuperReactGist url={rest.href} />;
      } else if (rest.href?.startsWith("https://codepen.io/")) {
        let id = rest.href?.match(
          /codepen.io\/([(\w)+]*.)\/pen\/([(\w)+]*.)/
        ) ?? ["", "alvaromontoro", "vYexLGV"];
        return <Codepen hash={id[2]} user={id[1]} />;
      } else {
        return (
          <a
            className="border-b-2 border-blue-500 hover:border-blue-700"
            href={rest.href}
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
        return <SuperReactGist url={rest.href} />;
      } else if (rest.href?.startsWith("https://codepen.io/")) {
        let id = rest.href?.match(
          /codepen.io\/([(\w)+]*.)\/pen\/([(\w)+]*.)/
        ) ?? ["", "alvaromontoro", "vYexLGV"];
        return <Codepen hash={id[2]} user={id[1]} />;
      } else {
        return (
          <a
            className="border-b-2 border-blue-500 hover:border-blue-700"
            href={rest.href}
          >
            {children}
          </a>
        );
      }
    },
    code({ node, inline, className, children, ...propso2 }) {
      const match = /language-(\w+)/.exec(className || "");
      const theme: string = props.theme?.codeBlockTheme as any;
      return !inline && match ? (
        <CodeBlock
          children={children}
          props={props}
          theme={theme}
          match={match}
          propso2={propso2}
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
      <div
        className={`w-full h-full ${
          props.reactions ? "lg:w-[75%]" : "lg:w-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          <img
            src={props.header?.image?.src}
            alt={props.header?.title}
            className="mb-4"
            style={{
              borderRadius: props.header?.image?.borderRadius ?? "10px",
            }}
          />
          <div
            className="flex items-start flex-col justify-center gap-1"
            style={{ fontFamily: props.font?.title }}
          >
            <h1
              style={{ fontSize: props.header?.subtitle ? "2rem" : "3rem" }}
              className="font-extrabold"
            >
              {props.header?.title}
            </h1>
            <h5 className="mt-0 text-2xl font-normal">
              {props.header?.subtitle}
            </h5>
          </div>
          {props.header?.category ? (
            <div className="flex">
              <a href={props.header.category.url}>
                {props.header.category.title}
              </a>
            </div>
          ) : (
            <></>
          )}
          {props.author ? (
            <div
              style={{ borderColor: props.theme?.inlineBgColor }}
              className="px-1 py-3 border-b border-t flex items-center justify-start gap-5"
            >
              <img
                className="rounded-full"
                src={props.author.avatar}
                width="64px"
                alt=""
              />
              <div className="flex items-start justify-center flex-col">
                <h1 className="text-xl font-extrabold">{props.author.name}</h1>
                {props.date ? (
                  <p className="text-sm">
                    Published on{" "}
                    <span className="font-extrabold">
                      {new Date(props.date).toLocaleDateString(
                        "en-US",
                        options as any
                      )}
                    </span>
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
          <div>
            <ReactMarkdown plugins={[remarkGfm]} components={components}>
              {props.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      {props.reactions ? (
        <div className="w-full lg:w-[150px] right-0 items-center justify-center">
          <div className="w-auto col-span-2 lg:h-[100vh] lg:ml-[50px] lg:fixed lg:w-auto flex lg:flex-col items-center justify-center">
            <Reaction {...props} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Hashnode;
