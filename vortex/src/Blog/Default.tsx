import { BlogProps } from "../types";
import CDefault, { Body, Category, Main, ReactionChild, Reactions } from "../components/Default";
import { Header, Title } from "../components/Default/header";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { H1, H2, H3, H4, H5, H6 } from "../components/Default/Markdown/Headers";
import { CodeBlock } from "./components/CodeBlock";
import TweetEmbed from "react-tweet-embed";
// @ts-expect-error
import SuperReactGist from "super-react-gist";
import Codepen from "react-codepen-embed";
import { Reaction } from "./components/Default/Reaction";

const Default: React.FC<BlogProps> = (props) => {
    const components: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
        h1: (props) => <H1 {...props} />,
        h2: (props) => <H2 {...props} />,
        h3: (props) => <H3 {...props} />,
        h4: (props) => <H4 {...props} />,
        h5: (props) => <H5 {...props} />,
        h6: (props) => <H6 {...props} />,
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
                return <SuperReactGist url={rest.href} />;
            } else if (rest.href?.startsWith("https://codepen.io/")) {
                let id = rest.href?.match(
                    /codepen.io\/([(\w)+]*.)\/pen\/([(\w)+]*.)/
                ) ?? ["", "alvaromontoro", "vYexLGV"];
                return <Codepen hash={id[2]} user={id[1]} />;
            } else {
                return (
                    <a
                        href={rest.href}
                        style={{ textDecorationColor: props.theme?.linkColor }}
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
                        backgroundColor: props.theme?.inlineBgColor,
                        padding: "5px 10px",
                        color: props.theme?.inlineTextColor,
                        borderRadius: "5px",
                    }}
                    className={className}
                    {...propso2}
                >
                    {children}
                </code>
            );
        },

    }
    return (
        <CDefault theme={props.theme}>
            <Main {...props} theme={props.theme}>
                {props.header ? (
                    <Header  {...props.header}>
                    </Header>
                ) : <></>}
                <Body theme={props.theme} style={{ fontFamily: props.font?.body }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", marginTop: "2rem" }}>
                        <img style={{ borderRadius: "100%" }} width="68px" src={props.author?.avatar} alt="" />
                        <h1 style={{ fontSize: "1rem" }}>{props.author?.name}</h1>
                        <span>{dayjs(props.date).format("MMMM DD YYYY")}</span>
                    </div>
                    <div>
                        {props.header?.category ? (
                            <Category theme={props.theme} href={props.header.category.url}>{props.header.category.title}</Category>
                        ) : <></>}
                        <Title theme={props.theme}>{props.header?.title}</Title>
                        <div style={{ font: props.font?.body }}>
                            <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
                                {props.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div >
                        {props.reactions ? (
                            <Reactions style={{ fontFamily: props.font?.title }}>
                                <ReactionChild>
                                    <Reaction  {...props} />
                                </ReactionChild>
                            </Reactions>
                        ) : <></>}
                    </div>
                </Body>
            </Main>
        </CDefault >
    )
}
export default Default