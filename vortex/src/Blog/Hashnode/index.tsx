import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import remarkGfm from "remark-gfm";
import { BlogProps, Reaction } from "../../types/Blog";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";
import TweetEmbed from "react-tweet-embed";

const Hashnode: React.FC<BlogProps> = (props) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let [final_reactions, set_final_reactions] = useState<Reaction[][]>([]);
  useEffect(() => {
    let reactions_length = props.reactions?.reactions.length ?? 0;
    let final_reactions_temp: Reaction[][] = [];
    for (let index = 0; index < reactions_length; index++) {
      let fr = [props.reactions?.reactions[index]];
      if (index != reactions_length - 1) {
        fr.push(props.reactions?.reactions[index + 1]);
      }
      index += 1;
      final_reactions_temp.push(fr as any);
    }
    set_final_reactions(final_reactions_temp);
    console.log(final_reactions_temp);
  }, []);
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
    p: ({ children, ...rest }) => (
      <p className="mb-3 leading-7" {...rest}>
        {children}
      </p>
    ),
    link: ({ children, ...rest }) => {
      let id =
        rest.href?.match(/twitter.com\/.*\/([0-9]+).*/) ??
        "1468899596730441730";
      console.log(id);
      if (rest.href?.startsWith("https://twitter.com")) {
        return <TweetEmbed id={id[1]} options={{theme: props.metadata.twitter?.theme}} />;
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
        rest.href?.match(/twitter.com\/.*\/([0-9]+).*/) ??
        "1468899596730441730";
      console.log(id);
      if (rest.href?.startsWith("https://twitter.com")) {
        return <TweetEmbed id={id[1]} options={{theme: props.metadata.twitter?.theme}} />;
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
            src={props.banner?.image?.src}
            alt={props.banner?.title}
            className="mb-4"
            style={{ borderRadius: props.banner?.image?.rounded ?? "10px" }}
          />
          <div className="flex items-start flex-col justify-center gap-1">
            <h1
              style={{ fontSize: props.banner?.subtitle ? "2rem" : "3rem" }}
              className="font-extrabold"
            >
              {props.banner?.title}
            </h1>
            <h5 className="mt-0 text-2xl font-normal">
              {props.banner?.subtitle}
            </h5>
          </div>

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
              <p className="text-sm">
                Published on{" "}
                <span className="font-extrabold">
                  {new Date(props.metadata.date).toLocaleDateString(
                    "en-US",
                    options as any
                  )}
                </span>
              </p>
            </div>
          </div>

          <ReactMarkdown plugins={[remarkGfm]} components={components}>
            {props.content}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-full lg:w-[150px] right-0 items-center justify-center">
        <div className="w-auto col-span-2 lg:h-[100vh] lg:ml-[50px] lg:fixed lg:w-auto flex lg:flex-col items-center justify-center">
          {final_reactions?.map((reactions, i) => (
            <div className="grid grid-cols-2" key={i}>
              {reactions.map((reaction) => (
                <div
                  onClick={() => {
                    props.reactions?.onClick(reaction.name);
                  }}
                  key={reaction.name}
                  className="text-2xl gap-2 flex items-center px-2 py-2 bg-opacity-30 hover:bg-slate-50 transition-all duration-100 rounded-md cursor-pointer col-span-1"
                >
                  {reaction.emote}
                  <span className="text-lg font-semibold">
                    {reaction.upvotes}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hashnode;
