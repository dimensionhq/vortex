type BlogType = "Dev.to" | "Hashnode" | "Github" | "Default" | "Hackernoon";

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

interface BlogProps {
  type?: BlogType;
  content: string;
  codeblock?: {
    theme: Themes;
    raw?: {};
  };
  banner?: {
    title: string;
    category: string;
    date: string;
    image: {
      src: string;
      shadow: string;
      rounded: string;
    };
  };
  author?: {
    name: string;
    avatar: string;
  };
  theme?: {
    primary: string;
    text?: string;
    bgColor?: string;
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
    theme: "a11yLight",
  },
};

export { defaultValues };
export type { BlogType, BlogProps };
