const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
];

const alias = {
    "@app-theme": "./src",
    "@app-theme/colors": "./src/colors",
    "@app-theme/overrides": "./src/overrides",
    "@app-theme/styles": "./src/styles"
};

const plugins = [
    [
        "babel-plugin-module-resolver",
        {
            root: [ "./" ],
            alias,
        },
    ],
];

const babelConfig = {
    presets,
    env: {
        development: {
            plugins,
        },
    }
};

module.exports = babelConfig;
