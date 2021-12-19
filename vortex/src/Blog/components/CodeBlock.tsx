import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import { PropsWithChildren, ReactNode, useState } from "react";
import { BlogProps } from "../../types/Blog";
interface Props {
  children: ReactNode & ReactNode[];
  props: PropsWithChildren<BlogProps>;
  theme: any;
  match: RegExpExecArray;
  propso2: any;
}
export const CodeBlock: React.FC<Props> = ({
  children,
  props,
  theme,
  match,
  propso2,
}) => {
  const [success, setIsSuccess] = useState(false);

  return (
    <div className="relative">
      <div
        style={{ backgroundColor: props.theme?.inlineBgColor }}
        className="absolute top-2 right-4 bg-opacity-40 px-2 py-2 rounded-md hover:bg-opacity-30 cursor-pointer"
        onMouseDown={() => {
          navigator.clipboard.writeText(String(children));
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 1000);
        }}
      >
        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
          {!success ? (
            <>
              <path
                style={{ fill: props.theme?.inlineTextColor }}
                color="currentColor"
                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
              ></path>
              <path
                style={{ fill: props.theme?.inlineTextColor }}
                color="currentColor"
                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
              ></path>
            </>
          ) : (
            <path
              style={{ fill: props.theme?.inlineTextColor }}
              fillRule="evenodd"
              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
            ></path>
          )}
        </svg>
      </div>
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
        language={match[1] == "rs" ? "rust" : match[1]}
        PreTag="div"
        {...propso2}
      />
    </div>
  );
};
