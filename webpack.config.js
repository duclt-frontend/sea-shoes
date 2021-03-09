const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: "development",
    devtool: "source-map",
    context: path.resolve(__dirname, "src"),
    entry: {
        index: "./assets/styles/index.scss",
        // about: "./assets/styles/about.scss",
        // cart : "./assets/styles/cart.scss",
        //category: "./assets/styles/category.scss",
        contact: "./assets/styles/contact.scss",
        //  detail : "./assets/styles/detail.scss",
        //  signin: "./assets/styles/signin.scss",
        // news: "./assets/styles/news.scss",
        // news__detail: "./assets/styles/news__detail.scss",
        //search: "./assets/styles/search.scss",
        //payment: "./assets/styles/payment.scss",
    },
    output: {
        filename: "js/[name].js",
        path: path.join(__dirname, "./dist"),
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true },
                }, ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],
};