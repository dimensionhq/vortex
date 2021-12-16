import { BlogProps, Reaction } from "../../types/Blog";
import ReactMarkdown from "react-markdown";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
// import rehypeRaw from "rehype-raw";
import "github-markdown-css/github-markdown.css";
import TweetEmbed from "react-tweet-embed";
import rehypeRaw from "rehype-raw";
import { useState, useEffect } from "react";
import React from "react";

const Content: React.FC<BlogProps> = (props) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let rootRef = React.createRef<HTMLDivElement>();
  let [final_reactions, set_final_reactions] = useState<Reaction[][]>([]);
  let [reaction_visible, set_reaction_visible] = useState(false);

  const setIsVisible = () => {
    if (window.scrollY <= 300) {
      set_reaction_visible(false);
    } else {
      set_reaction_visible(true);
    }
  };
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
    window.addEventListener("scroll", setIsVisible);
    // set reaction_visible = true after scrolling 2000px
  }, []);
  const components: Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
  > = {
    h1: ({ children }) => (
      <h1
        style={{ color: props.theme?.inlineColor }}
        className="text-3xl font-extrabold xl:text-[2.75rem] 2xl:text-[2.75rem] md:text-4xl mt-4 mb-7"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{ color: props.theme?.inlineColor }}
        className="text-xl font-bold xl:text-3xl md:text-3xl 2xl:text-3xl mt-5 mb-3"
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
    p: ({ children }) => (
      <p
        style={{ color: props.theme?.inlineColor, whiteSpace: "initial" }}
        className="mt-2 mb-2 text-xl leading-relaxed"
      >
        {children}
      </p>
    ),
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
    <div
      ref={rootRef}
      className="mt-16 sm:mt-20 md:mt-72 lg:mt-96  xl:mt-40 2xl:mt-40 flex items-start justify-center w-[98%] sm:w-[90%] 2xl:w-[50%] flex-col"
    >
      <a
        href={props.banner?.category.url}
        style={{ color: props.theme?.linkColor }}
        className="uppercase font-bold text-lg no-underline"
      >
        {props.banner?.category.title}
      </a>
      <h1
        className={`uppercase mt-0text-2xl font-black xl:text-5xl md:text-4xl`}
      >
        {props.banner?.title}
      </h1>
      <div className="mt-8 sm:mt-10 md:mt-20 xl:mt-20 2xl:mt-20">
        <div className="flex grid-cols-12  md:grid justify-start flex-col">
          <div className="col-span-2 flex items-start justify-start flex-col">
            <img
              width="72px"
              className="rounded-full"
              src={props.author.avatar}
              alt=""
            />
            <h1
              className="font-medium text-xl mt-3"
              style={{ color: props.theme?.inlineColor }}
            >
              {props.author.name}
            </h1>
            <h6
              className="text-sm"
              style={{ color: props.theme?.inlineBgColor }}
            >
              {new Date(props.metadata.date).toLocaleDateString(
                "en-US",
                options as any
              )}
            </h6>
          </div>
          <div className="col-span-7 w-[40%] sm:w-[50%] md:w-[95%] lg:w-[100%]">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
              {props.content}
            </ReactMarkdown>
          </div>
          <div className="w-full h-full col-span-2  flex items-center justify-start md:justify-center transition-all duration-150">
            <div className="md:fixed md:bottom-[50%] flex md:flex-col">
              {reaction_visible ? (
                <>
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
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
