let assetPrefix = ""
let basePath = ""

if (process.env.GITHUB_ACTIONS) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")
  // check if the repo name doesn't end with .github.io
  if (!/\.github\.io$/.test(repo)) {
    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
