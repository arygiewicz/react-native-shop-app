const jestPreset = require("@testing-library/react-native/jest-preset");
const { defaults } = require("jest-config");

module.exports = Object.assign(defaults, jestPreset, {
  setupFiles: [
    ...jestPreset.setupFiles,
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  preset: "@testing-library/react-native",
  setupFilesAfterEnv: ["@testing-library/react-native/cleanup-after-each"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  transform: {
    "\\.ts$": ["ts-jest"]
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform)"
  ]
});
