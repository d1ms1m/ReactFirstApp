import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "../build.interfaces";

export function buildLoaders(opts: BuildOptions): webpack.RuleSetRule[] {
    const styleLoader = {
        test: /\.s[ac]ss|css$/i,
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
    const tsLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
    }
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }
    const fontLoader = {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset',
        parser: {
            dataUrlCondition: {
                maxSize: 8 * 1024 // 8kb
            }
        },
        generator: {
            filename: 'fonts/[hash][ext][query]'
        }
    }
    return [
        svgLoader,
        fontLoader,
        tsLoader,
        styleLoader,
    ]
}