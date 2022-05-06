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
          <Row justify="flex-start" style={{ marginTop: "12px" }} align="center">
            <NextLink href="/">
              <Link>
                {isDark ? (
                  <svg width="59" height="15" viewBox="0 0 59 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3581 2.98003H8.08886L5.78369 11.273H5.66771L3.35529 2.98003H0.0932617L3.98595 14.5706H7.46545L11.3581 2.98003Z" fill="url(#paint0_linear_8644_14699)" />
                    <path d="M16.5161 14.797C19.8941 14.797 21.9963 12.3898 21.9963 8.8206C21.9963 5.22873 19.8941 2.82912 16.5161 2.82912C13.138 2.82912 11.0358 5.22873 11.0358 8.8206C11.0358 12.3898 13.138 14.797 16.5161 14.797ZM16.5306 12.3068C14.972 12.3068 14.1746 10.8203 14.1746 8.79796C14.1746 6.77565 14.972 5.28155 16.5306 5.28155C18.0601 5.28155 18.8575 6.77565 18.8575 8.79796C18.8575 10.8203 18.0601 12.3068 16.5306 12.3068Z" fill="url(#paint1_linear_8644_14699)" />
                    <path d="M22.9299 14.5706H26.0179V8.01318C26.0179 6.587 27.0183 5.60602 28.3811 5.60602C28.8088 5.60602 29.3959 5.68148 29.6859 5.77958V2.92721C29.4104 2.8593 29.0262 2.81402 28.7145 2.81402C27.4677 2.81402 26.4456 3.56862 26.0397 5.00235H25.9237V2.98003H22.9299V14.5706Z" fill="url(#paint2_linear_8644_14699)" />
                    <path d="M36.6887 2.98003H34.5937V0.203125H31.5057V2.98003H29.9834V5.39474H31.5057V11.4315C31.4912 13.7028 32.9772 14.8272 35.2171 14.7291C36.0145 14.6989 36.5799 14.5329 36.8916 14.4272L36.4059 12.0352C36.2537 12.0654 35.9275 12.1408 35.6376 12.1408C35.0214 12.1408 34.5937 11.8993 34.5937 11.0089V5.39474H36.6887V2.98003Z" fill="url(#paint3_linear_8644_14699)" />
                    <path d="M42.5805 14.797C45.3351 14.797 47.1909 13.401 47.6258 11.2504L44.7697 11.0542C44.458 11.9371 43.6606 12.3974 42.6313 12.3974C41.0872 12.3974 40.1086 11.3334 40.1086 9.60538V9.59783H47.691V8.71496C47.691 4.77597 45.4004 2.82912 42.4573 2.82912C39.1808 2.82912 37.0568 5.25137 37.0568 8.82815C37.0568 12.503 39.1518 14.797 42.5805 14.797ZM40.1086 7.6057C40.1739 6.28516 41.138 5.22873 42.508 5.22873C43.8491 5.22873 44.777 6.22479 44.7842 7.6057H40.1086Z" fill="url(#paint4_linear_8644_14699)" />
                    <path d="M51.0331 2.98003H47.8436L51.0331 8.77532L47.7276 14.5706H50.9171L53.0773 10.5637L55.2737 14.5706H58.427L55.1143 8.77532L58.34 2.98003H55.1722L53.0773 7.03221L51.0331 2.98003Z" fill="url(#paint5_linear_8644_14699)" />
                    <defs>
                      <linearGradient id="paint0_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#A5A5A5" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#A5A5A5" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#A5A5A5" />
                      </linearGradient>
                      <linearGradient id="paint3_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#A5A5A5" />
                      </linearGradient>
                      <linearGradient id="paint4_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#A5A5A5" />
                      </linearGradient>
                      <linearGradient id="paint5_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#A5A5A5" />
                      </linearGradient>
                    </defs>
                  </svg>
                ) : (
                  <svg width="59" height="15" viewBox="0 0 59 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3581 2.98003H8.08886L5.78369 11.273H5.66771L3.35529 2.98003H0.0932617L3.98595 14.5706H7.46545L11.3581 2.98003Z" fill="url(#paint0_linear_8644_14699)" />
                    <path d="M16.5161 14.797C19.8941 14.797 21.9963 12.3898 21.9963 8.8206C21.9963 5.22873 19.8941 2.82912 16.5161 2.82912C13.138 2.82912 11.0358 5.22873 11.0358 8.8206C11.0358 12.3898 13.138 14.797 16.5161 14.797ZM16.5306 12.3068C14.972 12.3068 14.1746 10.8203 14.1746 8.79796C14.1746 6.77565 14.972 5.28155 16.5306 5.28155C18.0601 5.28155 18.8575 6.77565 18.8575 8.79796C18.8575 10.8203 18.0601 12.3068 16.5306 12.3068Z" fill="url(#paint1_linear_8644_14699)" />
                    <path d="M22.9299 14.5706H26.0179V8.01318C26.0179 6.587 27.0183 5.60602 28.3811 5.60602C28.8088 5.60602 29.3959 5.68148 29.6859 5.77958V2.92721C29.4104 2.8593 29.0262 2.81402 28.7145 2.81402C27.4677 2.81402 26.4456 3.56862 26.0397 5.00235H25.9237V2.98003H22.9299V14.5706Z" fill="url(#paint2_linear_8644_14699)" />
                    <path d="M36.6887 2.98003H34.5937V0.203125H31.5057V2.98003H29.9834V5.39474H31.5057V11.4315C31.4912 13.7028 32.9772 14.8272 35.2171 14.7291C36.0145 14.6989 36.5799 14.5329 36.8916 14.4272L36.4059 12.0352C36.2537 12.0654 35.9275 12.1408 35.6376 12.1408C35.0214 12.1408 34.5937 11.8993 34.5937 11.0089V5.39474H36.6887V2.98003Z" fill="url(#paint3_linear_8644_14699)" />
                    <path d="M42.5805 14.797C45.3351 14.797 47.1909 13.401 47.6258 11.2504L44.7697 11.0542C44.458 11.9371 43.6606 12.3974 42.6313 12.3974C41.0872 12.3974 40.1086 11.3334 40.1086 9.60538V9.59783H47.691V8.71496C47.691 4.77597 45.4004 2.82912 42.4573 2.82912C39.1808 2.82912 37.0568 5.25137 37.0568 8.82815C37.0568 12.503 39.1518 14.797 42.5805 14.797ZM40.1086 7.6057C40.1739 6.28516 41.138 5.22873 42.508 5.22873C43.8491 5.22873 44.777 6.22479 44.7842 7.6057H40.1086Z" fill="url(#paint4_linear_8644_14699)" />
                    <path d="M51.0331 2.98003H47.8436L51.0331 8.77532L47.7276 14.5706H50.9171L53.0773 10.5637L55.2737 14.5706H58.427L55.1143 8.77532L58.34 2.98003H55.1722L53.0773 7.03221L51.0331 2.98003Z" fill="url(#paint5_linear_8644_14699)" />
                    <defs>
                      <linearGradient id="paint0_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-color="#A5A5A5" />
                        <stop offset="1" stop-color="#090909" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-color="#A5A5A5" />
                        <stop offset="1" stop-color="#090909" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-color="#A5A5A5" />
                        <stop offset="1" stop-color="#090909" />
                      </linearGradient>
                      <linearGradient id="paint3_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-color="#A5A5A5" />
                        <stop offset="1" stop-color="#090909" />
                      </linearGradient>
                      <linearGradient id="paint4_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-color="#A5A5A5" />
                        <stop offset="1" stop-color="#090909" />
                      </linearGradient>
                      <linearGradient id="paint5_linear_8644_14699" x1="-1.44184" y1="8.88995" x2="58.4219" y2="9.64343" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-color="#A5A5A5" />
                        <stop offset="1" stop-color="#090909" />
                      </linearGradient>
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
