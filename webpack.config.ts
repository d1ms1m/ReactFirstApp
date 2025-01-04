import path from 'path'
import webpack from 'webpack'
import {BuildEnv, BuildPaths} from "./config/build.interfaces";
import {buildWebpackConfig} from "./config/build/webpackConfig";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        build: path.resolve(__dirname, 'dist'),
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        port: env.port || 3000,
        isDev,
    });

    return config
}
