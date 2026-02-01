/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // For GitHub Pages project site: https://username.github.io/repo-name/
  basePath: process.env.NODE_ENV === "production" && process.env.BASE_PATH ? process.env.BASE_PATH : "",
  assetPrefix: process.env.NODE_ENV === "production" && process.env.BASE_PATH ? process.env.BASE_PATH + "/" : "",
};

module.exports = nextConfig;
