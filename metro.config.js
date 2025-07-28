const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);
config.resolver.alias = {
  "@assets": path.resolve(__dirname, "assets"),
  "@": path.resolve(__dirname), // optional, maps @ to project root
};

module.exports = withNativeWind(config, { input: "./global.css" });
