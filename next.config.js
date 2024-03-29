const withPlugins = require("next-compose-plugins")

const reactSvg = require("next-react-svg")
const path = require("path")

module.exports = withPlugins(
  [
    [
      reactSvg,
      {
        include: path.resolve(__dirname, "src/assets/svg"),
      },
    ],
  ],
  
  // {
  //   trailingSlash: true,
  // },
  {
    images: {
      loader: 'akamai',
      path: '',
      deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      domains: ['cdn.chec.io'],
      // loader: "imgix", // Uncomment this line for STATIC EXPORT
      // path: "", // Uncomment this line for STATIC EXPORT
    },
    env: {
      production_type: "server", // Change variable to "static" for STATIC EXPORT
    },
    experiments: {
      topLevelAwait: true
    },
    
    }
   
),
{
  reactStrictMode: false,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false};

    return config;
  }
}



