import React, { useState, useEffect } from "react";
import { MenuToggle, Twitter, Discord, Github, ThemeToggle } from "@components";
import cn from "classnames";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import {
  Row,
  Col,
  Spacer,
  Link,
  useTheme,
  useBodyScroll,
  NextUIThemes,
} from "@nextui-org/react";
import { Route } from "@lib/docs/page";
import { useRouter } from "next/router";
import { useMediaQuery } from "@hooks/use-media-query";
import { addColorAlpha } from "@utils/index";
import { isActive } from "@utils/links";

export interface Props {
  isHome?: boolean;
  detached?: boolean;
  routes?: Route[];
}

const MobileNavigation = dynamic(
  () => import("../components/mobile-navigation"),
  {
    ssr: false,
  }
);

const SearchInput = dynamic(
  () => import("../components/search/instant-search"),
  {
    ssr: true,
  }
);

const Navbar: React.FC<Props> = ({ detached, routes }) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const theme = useTheme() as NextUIThemes;
  const isMobile = useMediaQuery(960);
  const [, setBodyHidden] = useBodyScroll(null, { scrollLayer: true });

  const isDark = theme.type === "dark";

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false);
      setBodyHidden(false);
    }
  }, [isMobile]);

  const onToggleNavigation = () => {
    setExpanded(!expanded);
    isMobile && setBodyHidden(!expanded);
  };

  const showBlur = !!expanded || !!detached;
  return (
    <nav className="navbar__container">
      <div className="navbar__wrapper">
        <Col className="navbar__logo-container">
          <Row justify="flex-start" align="center">
            <NextLink href="/">
              <Link>
                {isDark ? (
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38 0H12C5.37258 0 0 5.37258 0 12V38C0 44.6274 5.37258 50 12 50H38C44.6274 50 50 44.6274 50 38V12C50 5.37258 44.6274 0 38 0Z"
                      fill="white"
                    />
                    <g filter="url(#filter0_i_4691_14648)">
                      <path
                        d="M15.122 18.9091H13.46L18.2668 32H19.9032L24.71 18.9091H23.0481L19.1617 29.929H19.0083L15.122 18.9091ZM27.5161 18.9091H25.6497L29.8684 25.4545L25.6497 32H27.5161L30.8911 26.6562H30.9934L34.3684 32H36.2349L32.1184 25.4545L36.2349 18.9091H34.3684L30.9934 24.3551H30.8911L27.5161 18.9091Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_4691_14648"
                        x="11.46"
                        y="18.9091"
                        width="24.7744"
                        height="13.0909"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="-2" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.233333 0 0 0 0 0.632 0 0 0 0 1 0 0 0 0.59 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_4691_14648"
                        />
                      </filter>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="50" height="50" rx="12" fill="black" />
                    <g filter="url(#filter0_d_4690_14650)">
                      <path
                        d="M15.1222 18.9091H13.4602L18.267 32H19.9034L24.7102 18.9091H23.0483L19.1619 29.929H19.0085L15.1222 18.9091ZM27.5163 18.9091H25.6499L29.8686 25.4545L25.6499 32H27.5163L30.8913 26.6562H30.9936L34.3686 32H36.2351L32.1186 25.4545L36.2351 18.9091H34.3686L30.9936 24.3551H30.8913L27.5163 18.9091Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_4690_14650"
                        x="9.45996"
                        y="16.9091"
                        width="26.7754"
                        height="17.0909"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="-2" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.233333 0 0 0 0 0.632 0 0 0 0 1 0 0 0 0.59 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4690_14650"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4690_14650"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                )}
              </Link>
            </NextLink>
          </Row>
        </Col>
        <Col className="navbar__resources-container">
          <Row justify="center" align="center">
            <Spacer x={1} y={0} />
            <NextLink href="/docs/guide/getting-started">
              <Link
                className={cn("navbar__link", {
                  active: isActive(router.pathname, "/docs/[[...slug]]"),
                })}
                href="#"
              >
                Docs
              </Link>
            </NextLink>
            <Spacer x={1} y={0} />
            <NextLink href="#">
              <Link
                className="navbar__link"
                href="https://github.com/dimensionhq/vortex/graphs/contributors"
              >
                Contributors
              </Link>
            </NextLink>
            <Spacer x={1} y={0} />
          </Row>
        </Col>
        <Col className="navbar__search-container">
          <Row className="navbar__search-row" justify="flex-end" align="center">
            <Row
              className="navbar__social-icons-container"
              justify="flex-end"
              align="center"
              gap={1}
            >
              <Link
                className="navbar__social-icon"
                href="https://twitter.com/joindimension"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter
                  size={20}
                  fill={
                    isDark ? theme.palette.accents_4 : theme.palette.accents_5
                  }
                />
              </Link>
              <Link
                className="navbar__social-icon"
                href="https://discord.gg/qgytYy6vTP"
                target="_blank"
                rel="noreferrer"
              >
                <Discord
                  size={20}
                  fill={
                    isDark ? theme.palette.accents_4 : theme.palette.accents_5
                  }
                />
              </Link>
              <Link
                className="navbar__social-icon"
                href="https://github.com/dimensionhq/vortex"
                target="_blank"
                rel="noreferrer"
              >
                <Github
                  size={20}
                  fill={
                    isDark ? theme.palette.accents_4 : theme.palette.accents_5
                  }
                />
              </Link>
              <ThemeToggle className="navbar__social-icon" />
            </Row>
            <SearchInput />
          </Row>
        </Col>
        <Col className="navbar__menu-container">
          <ThemeToggle className="navbar__social-icon-mobile" />
          <div
            className="navbar__menu-arrow noselect"
            onClick={onToggleNavigation}
          >
            <MenuToggle expanded={expanded} />
          </div>
        </Col>
        <MobileNavigation
          routes={routes}
          opened={expanded}
          onClose={() => {
            setExpanded(false);
            setBodyHidden(false);
          }}
        />
      </div>
      <style jsx>{`
        .navbar__container,
        .navbar__wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .navbar__container {
          min-height: 64px;
          max-height: 64px;
          z-index: 9999;
        }
        :global(.navbar__search-row) {
          position: initial !important;
        }
        :global(.navbar__logo) {
          cursor: pointer;
          transition: all 0.25s ease;
        }
        :global(.navbar__link.active) {
          font-weight: 600;
          color: ${theme.palette.primary};
        }
        :global(.navbar__menu-arrow) {
          height: 100%;
          min-height: 40px;
          min-width: 30px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        :global(.navbar__menu-container) {
          width: 100%;
          height: 100%;
          display: none;
        }
        :global(.navbar__social-icon) {
          margin: 0 6px;
        }
        :global(.navbar__social-icon-mobile) {
          margin: 0;
        }
        :global(.navbar__social-icon svg) {
          transition: all 0.25s ease;
        }
        :global(.navbar__social-icon:hover svg) {
          opacity: 0.7;
        }
        :global(.navbar__disabled-link) {
          cursor: not-allowed;
          events: none;
        }
        @media only screen and (max-width: ${theme.breakpoints.xs.max}) {
          :global(.navbar__container) {
            top: 0;
            position: fixed;
            background: ${showBlur
          ? addColorAlpha(theme.palette.background, 0.6)
          : "transparent"};
            box-shadow: ${detached
          ? "0px 5px 20px -5px rgba(2, 1, 1, 0.1)"
          : "none"};
            min-height: 64px;
            max-height: 64px;
          }
          :global(.navbar__search-row) {
            justify-content: center;
          }
          @supports (
            (-webkit-backdrop-filter: blur(10px)) or
              (backdrop-filter: blur(10px))
          ) {
            :global(.navbar__container) {
              backdrop-filter: ${showBlur
          ? "saturate(180%) blur(10px)"
          : "none"};
            }
          }
          @supports (
            not (-webkit-backdrop-filter: blur(10px)) and not
              (backdrop-filter: blur(10px))
          ) {
            :global(.navbar__container) {
              background: ${theme.palette.background};
            }
          }
          :global(.navbar__logo-container a:active) {
            opacity: 0.7;
          }
        }
        @media only screen and (max-width: ${theme.breakpoints.md.min}) {
          :global(.navbar__logo-container) {
            display: flex;
            width: 24px;
            align-items: center;
          }
          :global(.navbar__menu-container) {
            display: flex;
            justify-content: flex-end;
          }
          :global(.navbar__resources-container) {
            display: none;
          }
          :global(.navbar__version-badge, .navbar__social-icons-container) {
            display: none !important;
            padding: 3px;
          }
        }
        @media only screen and (max-width: ${theme.breakpoints.lg.min}) {
          .navbar__wrapper {
            padding: 0 16px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
