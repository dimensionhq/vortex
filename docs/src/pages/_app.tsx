import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { NextRouter, Router, useRouter } from "next/router";
import { CssBaseline, NextUIThemes, ThemeProvider } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { AppInitialProps } from "next/app";
import { DeepPartial } from "@utils/types";
import { NextComponent } from "@lib/types";
import generateKbarActions from "@lib/kbar-actions";
import sharedTheme from "@theme/shared";
import { KBarProvider } from "kbar";

type AppPropsType<
  R extends NextRouter = NextRouter,
  P = {}
  > = AppInitialProps & {
    Component: NextComponent<P>;
    router: R;
    __N_SSG?: boolean;
    __N_SSP?: boolean;
  };

type AppProps<P = {}> = AppPropsType<Router, P>;

const KbarComponent = dynamic(() => import("../components/kbar"), {
  ssr: false,
});

const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
  // @ts-ignore
  const [customTheme, setCustomTheme] = useState<DeepPartial<NextUIThemes>>({
    ...sharedTheme,
  });

  const router = useRouter();

  const themeChangeHandle = (isDark: boolean) => {
    if (customTheme.type === "dark" && !isDark) {
      setCustomTheme({
        ...customTheme,
        type: "light",
      });
    } else if (customTheme.type === "light" && isDark) {
      setCustomTheme({
        ...customTheme,
        type: "dark",
      });
    }
  };

  const darkMode = useDarkMode(true, {
    onChange: themeChangeHandle,
  });

  const kbarActions = generateKbarActions(router, darkMode);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("darkMode")
      ? "dark"
      : "light";
    setCustomTheme((prevTheme) => ({
      ...prevTheme,
      type: savedTheme || "dark",
    }));
  }, []);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <KBarProvider
          actions={kbarActions}
          options={{
            animations: {
              enterMs: 250,
              exitMs: 100,
            },
          }}
        >
          <KbarComponent />
          <Component {...pageProps} />
        </KBarProvider>
        <style global jsx>{`
          .noselect {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
          }
          .npm__react-simple-code-editor__textarea {
            padding: 0px !important; /* remove padding to textarea to avoid wrong cursor in live editor */
          }
          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}</style>
      </ThemeProvider>
    </>
  );
};

export default Application;
