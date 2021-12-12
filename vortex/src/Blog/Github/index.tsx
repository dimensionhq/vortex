import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import { BlogProps } from "../../types/Blog";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";

const Github: React.FC<BlogProps> = (props) => {
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
        style={{ color: props.theme?.grey }}
        className="text-2xl font-extrabold xl:text-5xl md:text-4xl mt-1 mb-2"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{ color: props.theme?.grey }}
        className="text-xl font-bold xl:text-2xl md:text-3xl 2xl:text-3xl mt-2 mb-3"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{ color: props.theme?.grey }}
        className="text-lg font-bold xl:text-xl md:text-2xl 2xl:text-2xl mt-2 mb-3"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{ color: props.theme?.grey }}
        className="text-base font-bold xl:text-lg md:text-xl 2xl:text-xl"
      >
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        style={{ color: props.theme?.grey }}
        className="text-sm font-bold xl:text-base md:text-lg 2xl:text-lg"
      >
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        style={{ color: props.theme?.grey }}
        className="text-xs font-bold xl:text-sm md:text-base 2xl:text-lgx"
      >
        {children}
      </h6>
    ),
    p: ({ children }) => <p className="mt-2 mb-2">{children}</p>,

    a: ({ children, ...rest }) => (
      <a
        href={rest.href}
        className="no-underline hover:underline mt-4 mb-4 text-blue-500"
        style={{ textDecorationColor: props.theme?.lightGrey }}
      >
        {children}
      </a>
    ),
    link: ({ children, ...rest }) => (
      <a
        href={rest.href}
        className="no-underline hover:underline mt-2 mb-2"
        style={{ textDecorationColor: props.theme?.lightGrey }}
      >
        {children}
      </a>
    ),

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
            backgroundColor: props.theme?.lightGrey,
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
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        backgroundColor: props.theme?.bgColor,
        color: props.theme?.textColor,
      }}
    >
      <div className="w-[95%] xl:w-[40%] h-auto">
        <div className="w-full flex items-center justify-center relative">
          <img src={props.banner?.image?.src} alt="" />
        </div>
        <div className="mt-14 xl:mt-28 w-full h-auto">
          <div className="w-full flex items-center gap-5">
            <p className="text-sm " style={{ color: props.theme?.lightGrey }}>
              {new Date(props.metadata.date).toLocaleDateString(
                "en-US",
                options as any
              )}
            </p>
            <a
              className="text-sm hover:text-blue-500"
              href={props.banner?.category.url}
              style={{ color: props.theme?.lightGrey }}
            >
              {props.banner?.category.title}
            </a>
          </div>
          <h1 className="text-3xl font-bold md:text-5xl mt-9">
            {props.banner?.title}
          </h1>
        </div>
        <div className="flex w-full items-center justify-start mt-5 gap-4">
          <img
            src={props.author.avatar}
            width="36px"
            className="rounded-full"
            alt=""
          />
          <p style={{ color: props.theme?.lightGrey }}>{props.author.name}</p>
        </div>
        <div className="w-full h-full pt-10">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            // remarkPlugins={[remarkGfm, remarkHTML]}
            components={components}
          >
            {props.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Github;
