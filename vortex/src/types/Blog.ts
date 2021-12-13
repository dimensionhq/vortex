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
    rounded: string;
  };
  category: {
    url: string;
    title: string;
  };
  title?: string;
}
export interface Theme {
  primary?: string;
  bgColor?: string;
  inlineColor?: string;
  linkColor?: string;
  textColor?: string;
  inlineBgColor?: string;
}

export interface BlogProps {
  theme?: Theme;
  banner?: Banner;
  font?: string;
  type?: "Default" | "DevTO" | "Hackernoon" | "Hashnode";
  content: string;
  codeblock?: {
    theme: Themes;
    carbon_sh?: boolean;
  };
  metadata: {
    date: string;
  };
  author: {
    name: string;
    avatar: string;
  };
}

export const defaultProps: BlogProps = {
  content: "",
  type: "Default",
  font: "'Inter', sans-serif",
  codeblock: {
    theme: "atomOneDark",
    carbon_sh: true,
  },
  metadata: {
    date: Date.now().toString(),
  },
  author: {
    avatar: "",
    name: "",
  },
  theme: {
    textColor: "black",
    primary: "#23272a",
    inlineColor: "#333",
    bgColor: "white",
    linkColor: "#5862f2",
    inlineBgColor: "#7c7c7c",
  },
  banner: undefined,
};
