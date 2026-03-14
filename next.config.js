/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@mdxeditor/editor'],
    reactStrictMode: true,
    webpack: (config) => {
      // this will override the experiments
      config.experiments = { ...config.experiments, topLevelAwait: true }
      // this will just update topLevelAwait property of config.experiments
      // config.experiments.topLevelAwait = true
      return config
    },
    // Add buildId to force rebuild
    generateBuildId: async () => {
      return `build-${Date.now()}`
    },
  }

module.exports = nextConfig
