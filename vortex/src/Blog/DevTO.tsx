import { BlogProps } from "../types";
import CDevTO, { Main, Reactions } from "../components/DevTO";
import { Author, Header, Title } from "../components/DevTO/header";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { H1, H2, H3, H4, H5, H6 } from "../components/DevTO/Markdown/Headers";
import { CodeBlock } from "./components/CodeBlock";
import TweetEmbed from "react-tweet-embed";
// @ts-expect-error
import SuperReactGist from "super-react-gist";
import Codepen from "react-codepen-embed";
import { Reaction } from "./components/DevTO/Reaction";

const DevTO: React.FC<BlogProps> = (props) => {
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
        <CDevTO theme={props.theme}>
            {props.reactions ? (
                <Reactions style={{ fontFamily: props.font?.title }}>
                    <Reaction  {...props} />
                </Reactions>
            ) : <></>}
            <Main {...props} theme={props.theme}>
                {props.header ? (
                    <Header  {...props.header}>
                    </Header>
                ) : <></>}
                <div style={{ padding: "20px 40px", fontFamily: props.font?.title }}>
                    <Author >
                        <img width="40px" style={{ borderRadius: "100%" }} src={props.author?.avatar} alt="" />
                        <div style={{ width: "auto", display: "flex", "alignItems": "start", fontFamily: props.font?.header, flexDirection: "column", gap: "0px", justifyContent: "center" }}>
                            <h4 style={{ font: props.font?.header, fontSize: "16px", margin: "0px", color: props.theme?.textColor }}>{props.author?.name}</h4>
                            {props.date ? (
                                <span style={{ font: props.font?.header, fontWeight: "normal", fontSize: "12px", color: props.theme?.dateColor }}>Posted on {dayjs(props.date).format("DD MMM YYYY")}</span>
                            ) : <></>}
                        </div>
                    </Author>
                    <Title>
                        {props.header?.title}
                    </Title>
                    {props.header?.subtitle ? (
                        <h4 style={{ font: props.font?.header, fontSize: "20px", margin: "0px", color: props.theme?.textColor }}>{props.header.subtitle}</h4>
                    ) : <></>}
                    {props.header?.category ? (
                        <div style={{ marginTop: "12px", display: "inline-flex", color: props.theme?.inlineTextColor, gap: "12px", alignItems: "center", fontWeight: "bold", backgroundColor: props.theme?.inlineBgColor, opacity: 0.6, padding: "5px 10px", borderRadius: "12px" }}>
                            {props.header?.category?.title}
                        </div>
                    ) : <></>}
                    <div style={{ font: props.font?.body }}>
                        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
                            {props.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </Main>
        </CDevTO>
    )
}
export default DevTO