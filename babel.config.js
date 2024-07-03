module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@navigations": "./src/navigations",
            "@screens": "./src/screens",

            "@gql": "./src/gql",
            "@redux": "./src/redux",
            "@hooks": "./src/hooks",
            "@store": "./src/store",
            "@functions": "./src/functions",

            "@routes": "./src/routes",
            "@utils": "./src/utils",
            "@assets": "./src/assets",
          },
        },
        //     "transform-inline-environment-variables",
        //     {
        //       include: ["NODE_ENV"],
        //     },
      ],
    ],
  };
};
