import "dotenv/config";

export default {
  name: "RepoRater",
  slug: "RepoRater",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    // eslint-disable-next-line no-undef
    env: process.env.ENV,
    // eslint-disable-next-line no-undef
    apolloUri: process.env.APOLLO_URI,
  },
};
