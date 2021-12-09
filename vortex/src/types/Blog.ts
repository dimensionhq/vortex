type BlogType = "Dev.to" | "Hashnode" | "Github" | "Default";

type Themes =
  | "a11yDark"
  | "atomDark"
  | "base16AteliersulphurpoolLight"
  | "cb"
  | "coldarkCold"
  | "coldarkDark"
  | "coyWithoutShadows"
  | "coy"
  | "darcula"
  | "duotoneDark"
  | "duotoneEarth"
  | "duotoneForest"
  | "duotoneLight"
  | "duotoneSea"
  | "duotoneSpace"
  | "funky"
  | "ghcolors"
  | "hopscotch"
  | "materialDark"
  | "materialLight"
  | "materialOceanic"
  | "nord"
  | "okaidia"
  | "pojoaque"
  | "prism"
  | "shadesOfPurple"
  | "solarizedlight"
  | "synthwave84"
  | "tomorrow"
  | "twilight"
  | "vs"
  | "xonokai"
  | "vscDarkPlus";

interface BlogProps {
  type?: BlogType;
  content: string;
  codeblock?: {
    theme: Themes;
  };
  banner?: {
    title: string;
    category: string;
    date: string;
    image: {
      src: string;
      alt: string;
      width: string;
      height: string;
    };
  };
  author?: {
    name: string;
    avatar: string;
  };
  theme?: {
    primary: string;
  };
}

const defaultValues: BlogProps = {
  type: "Default",
  banner: undefined,
  theme: {
    primary: "#5865f2",
  },
  content: "",
  codeblock: {
    theme: "atomDark",
  },
};

export { defaultValues };
export type { BlogType, BlogProps };
