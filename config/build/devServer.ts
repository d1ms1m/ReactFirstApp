import {BuildOptions} from "../build.interfaces";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(opts: BuildOptions): DevServerConfiguration {
    const {port} = opts;
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
        client: {
            overlay: {
                errors: false,
                warnings: false,
                runtimeErrors: false,
            },
        },
    }
}