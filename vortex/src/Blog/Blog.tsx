import { BlogProps, defaultProps } from "../types/Blog";
import Default from "./Default";
import DevTO from "./DevTO";
import Hashnode from "./Hashnode";
// import "../styles.css";
import SEO from "react-seo-component";

const SEOComponent: React.FC<BlogProps> = (props) => {
  return (
    <SEO
      description={props.header?.title ?? ""}
      title={props.header?.title ?? ""}
      image={props.header?.image?.src}
      author={props.author.avatar}
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
  console.log(blog_props);
  if (blog_props.layout === "Default") {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font?.body }}>
        <SEOComponent {...blog_props}></SEOComponent>
        <Default {...blog_props} />
      </div>
    );
  } else if (blog_props.layout === "DevTO") {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font?.body }}>
        <SEOComponent {...blog_props}></SEOComponent>
        <DevTO {...blog_props} />
      </div>
    );
  } else if (blog_props.layout === "Hashnode") {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font?.body }}>
        <SEOComponent {...blog_props}></SEOComponent>
        <Hashnode {...blog_props} />
      </div>
    );
  } else {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font?.body }}>
        <SEOComponent {...blog_props}></SEOComponent>
        <Default {...blog_props} />
      </div>
    );
  }
};
export default Blog;
