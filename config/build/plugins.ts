import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BuildOptions} from "../build.interfaces";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

export function buildPlugins(opts: BuildOptions): webpack.WebpackPluginInstance[] {
    const {paths} = opts

    const plugins = [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(opts.isDev),
        }),
        new BundleAnalyzerPlugin({openAnalyzer: false}),
    ]

    if (opts.isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    return plugins
}