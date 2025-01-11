export function getTsLoader() {
    return {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
    }
}