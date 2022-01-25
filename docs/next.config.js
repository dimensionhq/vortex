module.exports = {
  target: "serverless",
  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],
  redirects: require("./next-redirect"),
  basePath: "/vortex",
  eslint: {
    ignoreDuringBuilds: true,
  },
};
