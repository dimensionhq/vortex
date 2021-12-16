import { BlogProps, defaultProps } from "../types/Blog";
import Default from "./Default";
import DevTO from "./DevTO";
import Hashnode from "./Hashnode";
// import "../styles.css";
import SEO from "react-seo-component";

const SEOComponent: React.FC<BlogProps> = (props) => {
  return (
    <SEO
      description={props.banner?.title ?? ""}
      title={props.banner?.title ?? ""}
      image={props.banner?.image?.src}
      author={props.author.avatar}
      datePublished={props.metadata.date}
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
  if (blog_props.type === "Default") {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font }}>
        <SEOComponent {...blog_props}></SEOComponent>
        <Default {...blog_props} />
      </div>
    );
  } else if (blog_props.type === "DevTO") {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font }}>
        <SEOComponent {...blog_props}></SEOComponent>
        <DevTO {...blog_props} />
      </div>
    );
  } else if (blog_props.type === "Hashnode") {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font }}>
        <SEOComponent {...blog_props}></SEOComponent>
        <Hashnode {...blog_props} />
      </div>
    );
  } else {
    return (
      <div className="w-full h-full" style={{ fontFamily: props.font }}>
        <SEOComponent {...blog_props}></SEOComponent>
        <Default {...blog_props} />
      </div>
    );
  }
};
export default Blog;
