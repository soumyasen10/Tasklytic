// next.config.js

const nextConfig = {
  webpack(config) {
    // Find the existing rule for SVG and modify it
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg')
    );

    // Modify the rule to exclude SVGs from being handled by the default file-loader
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Add the rule for handling SVGs with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
