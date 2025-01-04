import webpack from "webpack";
import {BuildOptions} from "../build.interfaces";
import {buildLoaders} from "./loaders";
import {buildResolvers} from "./resolvers";
import {buildPlugins} from "./plugins";
import {buildDevServer} from "./devServer";

export function buildWebpackConfig(opts: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = opts
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(opts)
        },
        resolve: buildResolvers(opts),
        devtool:  isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(opts) : undefined,
    }
}