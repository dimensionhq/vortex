import { PluggableList } from "react-markdown/lib/react-markdown";

type Themes =
  | "a11yDark"
  | "a11yLight"
  | "agate"
  | "anOldHope"
  | "androidstudio"
  | "arduinoLight"
  | "arta"
  | "ascetic"
  | "atelierCaveDark"
  | "atelierCaveLight"
  | "atelierDuneDark"
  | "atelierDuneLight"
  | "atelierEstuaryDark"
  | "atelierEstuaryLight"
  | "atelierForestDark"
  | "atelierForestLight"
  | "atelierHeathDark"
  | "atelierHeathLight"
  | "atelierLakesideDark"
  | "atelierLakesideLight"
  | "atelierPlateauDark"
  | "atelierPlateauLight"
  | "atelierSavannaDark"
  | "atelierSavannaLight"
  | "atelierSeasideDark"
  | "atelierSeasideLight"
  | "atelierSulphurpoolDark"
  | "atelierSulphurpoolLight"
  | "atomOneDarkReasonable"
  | "atomOneDark"
  | "atomOneLight"
  | "brownPaper"
  | "codepenEmbed"
  | "colorBrewer"
  | "darcula"
  | "dark"
  | "defaultStyle"
  | "docco"
  | "dracula"
  | "far"
  | "foundation"
  | "githubGist"
  | "github"
  | "gml"
  | "googlecode"
  | "gradientDark"
  | "gradientLight"
  | "grayscale"
  | "gruvboxDark"
  | "gruvboxLight"
  | "hopscotch"
  | "hybrid"
  | "idea"
  | "irBlack"
  | "isblEditorDark"
  | "isblEditorLight"
  | "kimbieDark"
  | "kimbieLight"
  | "lightfair"
  | "lioshi"
  | "magula"
  | "monoBlue"
  | "monokaiSublime"
  | "monokai"
  | "nightOwl"
  | "nnfxDark"
  | "nnfx"
  | "nord"
  | "obsidian"
  | "ocean"
  | "paraisoDark"
  | "paraisoLight"
  | "pojoaque"
  | "purebasic"
  | "qtcreatorDark"
  | "qtcreatorLight"
  | "railscasts"
  | "rainbow"
  | "routeros"
  | "schoolBook"
  | "shadesOfPurple"
  | "solarizedDark"
  | "solarizedLight"
  | "srcery"
  | "stackoverflowDark"
  | "stackoverflowLight"
  | "sunburst"
  | "tomorrowNightBlue"
  | "tomorrowNightBright"
  | "tomorrowNightEighties"
  | "tomorrowNight"
  | "tomorrow"
  | "vs"
  | "vs2015"
  | "xcode"
  | "xt256"
  | "zenburn";

export interface Banner {
  image?: {
    src: string;
    borderRadius: string;
  };

  subtitle?: string;
  category: {
    url: string;
    title: string;
  };
  title?: string;
}
export interface Theme {
  primary?: string;
  bgColor?: string;
  textHeaderColor?: string;
  dateColor?: string;
  inlineTextColor?: string;
  linkColor?: string;
  textColor?: string;
  inlineBgColor?: string;
  codeBlockTheme: Themes;
  twitter?: {
    theme?: "light" | "dark";
  };
}
export interface Reaction {
  name: string;
  upvoted?: boolean;
  upvotes: number;
  emote: string | JSX.Element;
}
export interface BlogProps {
  theme?: Theme;
  header?: Banner;
  font?: {
    header: string;
    body: string;
    title: string;
    category: string;
  };
  reactions?: {
    reactions: Reaction[];
    onClick: (val: string, upvote: boolean) => void;
  };
  layout: "Default" | "DevTO" | "Hashnode";
  content: string;
  date?: string;
  author?: {
    name: string;
    avatar: string;
  };
}

export const defaultTheme: Theme = {
  textColor: "black",
  twitter: {
    theme: "dark",
  },
  codeBlockTheme: "atomOneDark",
  primary: "#23272a",
  dateColor: "white",
  inlineTextColor: "#333",
  bgColor: "white",
  linkColor: "#5862f2",
  inlineBgColor: "#ebebeb",
};

export const defaultProps: BlogProps = {
  content: "",
  layout: "Default",
  font: {
    body: "'Inter', sans-serif",
    category: "'Inter', sans-serif",
    header: "'Inter', sans-serif",
    title: "'Inter', sans-serif",
  },
  reactions: undefined,
  date: Date.now().toString(),
  author: undefined,
  theme: defaultTheme,
  header: undefined,
};
