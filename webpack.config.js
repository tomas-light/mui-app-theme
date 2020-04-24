const path = require("path");

const paths = {
    root: path.join(__dirname, "./"),
    entry: path.join(__dirname, "./src/index.ts"),
    output: path.join(__dirname, "./dist"),
};

const webpackConfig = {
    entry: paths.entry,
    mode: "development",
    output: {
        filename: "[name].js",
        path: paths.output,
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                exclude: /node_modules/,

                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [ ".js", ".ts" ],
        modules: [ paths.root, "node_modules" ]
    }
};

module.exports = webpackConfig;
