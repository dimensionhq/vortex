import { BlogProps } from "../../types/Blog";
import ReactMarkdown from "react-markdown";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
// import rehypeRaw from "rehype-raw";
import "github-markdown-css/github-markdown.css";
// import TweetEmbed from "react-tweet-embed";
import remarkGfm from "remark-gfm";
import TweetEmbed from "react-tweet-embed";

const Content: React.FC<BlogProps> = (props) => {
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
        style={{ color: props.theme?.inlineColor }}
        className="text-2xl font-extrabold xl:text-[2.75rem] 2xl:text-[2.75rem] md:text-4xl mt-4 mb-2"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{ color: props.theme?.inlineColor }}
        className="text-xl font-bold xl:text-2xl md:text-3xl 2xl:text-3xl mt-2 mb-3"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{ color: props.theme?.inlineColor }}
        className="text-lg font-bold xl:text-xl md:text-2xl 2xl:text-2xl mt-2 mb-3"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{ color: props.theme?.inlineColor }}
        className="text-base font-bold xl:text-lg md:text-xl 2xl:text-xl"
      >
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        style={{ color: props.theme?.inlineColor }}
        className="text-sm font-bold xl:text-base md:text-lg 2xl:text-lg"
      >
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        style={{ color: props.theme?.inlineColor }}
        className="text-xs font-bold xl:text-sm md:text-base 2xl:text-lgx"
      >
        {children}
      </h6>
    ),
    // p: ({ children }) => <p className="mt-2 mb-2">{children}</p>,
    link: ({ children, ...rest }) => {
      let id =
        rest.href?.match(/twitter.com\/.*\/([0-9]+).*/)?.toString() ??
        "1468899596730441730";
      console.log(id);
      if (rest.href?.startsWith("https://twitter.com")) {
        return <TweetEmbed id={id} />;
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
      let id =
        rest.href?.match(/twitter.com\/.*\/([0-9]+).*/)?.toString() ??
        "1468899596730441730";
      console.log(id);
      if (rest.href?.startsWith("https://twitter.com")) {
        return <TweetEmbed id={id} />;
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
          {...props}
        >
          {children}
        </code>
      );
    },
  };
  return (
    <div className="m-16 sm:m-20 md:m-60 xl:m-40 2xl:m-40 flex items-start justify-center w-[80%] flex-col gap-0">
      <a
        href={props.banner?.category.url}
        style={{ color: props.theme?.linkColor }}
        className="uppercase font-bold text-lg no-underline"
      >
        {props.banner?.category.title}
      </a>
      <h1
        className={`uppercase mt-[10px] text-2xl font-black xl:text-5xl md:text-4xl`}
      >
        {props.banner?.title}
      </h1>
      <div className="w-full h-full">
        <div className="flex justify-start w-full h-full flex-col">
          <ReactMarkdown plugins={[]} components={components}>
            {props.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Content;
