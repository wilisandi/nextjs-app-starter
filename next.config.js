// // next.config.js
// const TerserPlugin = require("terser-webpack-plugin");
// const nextConfig = {
//     webpack: (config, { isServer }) => {
//       if (!isServer) {
//         config.optimization.minimizer.push(
//           new TerserPlugin({
//             terserOptions: {
//               compress: {
//                 drop_console: true,
//               },
//             },
//           })
//         );
//       }
//       return config;
//     },
//   }
// //   const withBundleAnalyzer = require('@next/bundle-analyzer')({
// //     enabled: true,
// //     analyzerMode:'static'
// //   })
// module.exports = nextConfig;
// next.config.js

const config = {
  swcMinify: true, // SWC minifies JavaScript for production builds
};

module.exports = config;
