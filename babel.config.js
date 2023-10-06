module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "react-native-reanimated/plugin",
      "nativewind/babel",
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@app": "./",
          },
        },
      ],
    ],
  };
};
