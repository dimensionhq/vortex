import { BlogProps, defaultProps, defaultTheme, Theme } from "../types/Blog";
import Default from "./Default";
import DevTO from "./DevTO";
import Hashnode from "./Hashnode";
import "../index.css";
import SEO from "react-seo-component";

const SEOComponent: React.FC<BlogProps> = (props) => {
  return (
    <SEO
      description={props.header?.title ?? ""}
      title={props.header?.title ?? ""}
      image={props.header?.image?.src}
      author={props.author?.avatar ?? ""}
      datePublished={props.date}
      article={true}
      titleTemplate={""}
      pathname={""}
      siteLanguage={""}
      siteLocale={""}
      twitterUsername={""}
    ></SEO>
  );
};

const Blog: React.FC<BlogProps> = (props) => {
  const blog_props: BlogProps = { ...defaultProps, ...props };
  const blog_themes: Theme = { ...defaultTheme, ...props.theme };
  blog_props.theme = blog_themes;
  if (blog_props.layout === "Default") {
    return (
      <div
        className="w-full h-full"
        style={{ fontFamily: blog_props.font?.body }}
      >
        <SEOComponent {...blog_props}></SEOComponent>
        <Default {...blog_props} />
      </div>
    );
  } else if (blog_props.layout === "DevTO") {
    return (
      <div
        className="w-auto h-full flex items-center justify-center"
        style={{ fontFamily: blog_props.font?.body }}
      >
        <SEOComponent {...blog_props}></SEOComponent>
        <DevTO {...blog_props} />
      </div>
    );
  } else if (blog_props.layout === "Hashnode") {
    return (
      <div
        className="w-auto h-full flex items-center justify-center"
        style={{ fontFamily: blog_props.font?.body }}
      >
        <SEOComponent {...blog_props}></SEOComponent>
        <Hashnode {...blog_props} />
      </div>
    );
  } else {
    return (
      <div
        className="w-full h-full"
        style={{ fontFamily: blog_props.font?.body }}
      >
        <SEOComponent {...blog_props}></SEOComponent>
        <Default {...blog_props} />
      </div>
    );
  }
};
export default Blog;
