export function getFontLoader() {
    return {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset',
        parser: {
            dataUrlCondition: {
                maxSize: 8 * 1024 // 8kb
            }
        },
        generator: {
            filename: 'fonts/[name][ext]',
            // filename: 'fonts/[hash][ext][query]'
        }
    }
}