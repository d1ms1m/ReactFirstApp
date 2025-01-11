import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function getStyleLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss|css$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
            {
                loader: "css-loader", // Translates CSS into CommonJS
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes(".module."),
                        localIdentName: isDev
                            ? "[local]-([name]#[hash:base64:5])"
                            : "[hash:base64:8]",
                    },
                },
            },
            "resolve-url-loader",
            {
                loader: "sass-loader", // Compiles Sass to CSS
                options: {
                    api: "modern",
                    sourceMap: true,
                    implementation: require.resolve("sass"),
                    sassOptions: {
                        // Your sass options
                    },
                },
            },
        ],
    }
}