let assetPrefix = ""
let basePath = "/"

if (process.env.GITHUB_ACTIONS) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix,
  basePath,
}

module.exports = nextConfig
