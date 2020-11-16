module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "*": "./app",
          "@components": "./app/components",
          "@assets": "./app/assets",
          "@pages": "./app/pages",
          "@route": "./app/route",
          "@utils": "./app/utils",
          "@constants": "./app/constants",
          "@config": "./app/config"
        }
      }
    ]
  ]
};
