const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      // Passing true will enable the default Workbox + Expo SW configuration.
      offline: true,
    },
    argv
  );

  // Optionally you can enable the bundle size report.
  // It's best to do this only with production builds because it will add noticeably more time to your builds and reloads.
  if (env.mode === "production") {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        path: "web-report",
      })
    );
  }

  return config;
};
