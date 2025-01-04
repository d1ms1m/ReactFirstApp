import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildEnv, BuildOptions} from "../build.interfaces";

export function buildLoaders(opts: BuildOptions): webpack.RuleSetRule[] {
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            opts.isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
            {
                loader: "css-loader", // Translates CSS into CommonJS
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes(".module."),
                        localIdentName: opts.isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            {
                loader: "sass-loader", // Compiles Sass to CSS
                options: {
                    api: "modern",
                    sassOptions: {
                        // Your sass options
                    },
                },
            },
        ],
    }

    // const cssExtractLoader = {
    //     test: /\.css$/i,
    //     use: [MiniCssExtractPlugin.loader, "css-loader"],
    // }
    const tsLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        tsLoader,
        styleLoader,
        // cssExtractLoader,
    ]
}