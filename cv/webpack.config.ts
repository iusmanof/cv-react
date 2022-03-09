import path from "path";
import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackConfig = (env): Configuration => ({
    entry: "./src/index.tsx",
    ...(env.production || !env.development ? {} : {devtool: "eval-source-map"}),
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
               test: /\.(png|jpeg|jpg|gif)$/i,
               use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-url-loader",
                        options: {
                            limit: 10000,
                        }
                    }
                ]
            },
            {
                test: /\.(otf|pdf)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
        new ForkTsCheckerWebpackPlugin({
            // eslint: {
            //     files: "./src/**/*.{ts,tsx,js,jsx}" // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            // }
        }),
        new FaviconsWebpackPlugin("./src/images/favicon.ico")
    ]
});

export default webpackConfig;

// import path from "path";
// import webpack from "webpack";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
// import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
// import FaviconsWebpackPlugin from "favicons-webpack-plugin";
// import { Configuration as WebpackConfiguration } from "webpack";
// import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

// interface Configuration extends WebpackConfiguration {
//   devServer?: WebpackDevServerConfiguration;
// }

// const webpackConfig = (env): Configuration => ({
//     entry: "./src/index.tsx",
//     ...(env.production || !env.development ? {} : {devtool: "eval-source-map"}),
//      devtool: "source-map",
//   devServer: {
//      historyApiFallback: true,
//      port: 8080,
//      open: true
//    },
//     resolve: {
//         extensions: [".ts", ".tsx", ".js"],
//         //TODO waiting on https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/61
//         //@ts-ignore
//         plugins: [new TsconfigPathsPlugin()]
//     },
//     output: {
//         path: path.join(__dirname, "/dist"),
//         filename: "build.js"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 loader: "ts-loader",
//                 options: {
//                     transpileOnly: true
//                 },
//                 exclude: /dist/
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: ["style-loader", "css-loader", "sass-loader"]
//             },
//             {
//                 test: /\.(png|jpe?g|gif)$/i,
//                 loader: "file-loader",
//                 options: {
//                     outputPath: "images",
//                     name: "[name]-[sha1:hash:7].[ext]"
//                 }
//             },
//             {
//                 test: /\.svg$/,
//                 use: [
//                     {
//                         loader: "svg-url-loader",
//                         options: {
//                             limit: 10000
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./public/index.html"
//         }),
//         new webpack.DefinePlugin({
//             "process.env.PRODUCTION": env.production || !env.development,
//             "process.env.NAME": JSON.stringify(require("./package.json").name),
//             "process.env.VERSION": JSON.stringify(require("./package.json").version)
//         }),
//         new ForkTsCheckerWebpackPlugin({
//             // eslint: {
//             //     files: "./src/**/*.{ts,tsx,js,jsx}" // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
//             // }
//         }),
//         new FaviconsWebpackPlugin("./src/images/favicon.ico")
//     ],

// });

// export default webpackConfig;
