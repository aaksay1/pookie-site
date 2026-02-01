/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // GitHub Pages project site: https://aaksay1.github.io/pookie-site/
  basePath: "/pookie-site",
  assetPrefix: "/pookie-site/",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
