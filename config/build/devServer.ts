import webpack from "webpack";
import {BuildOptions} from "../build.interfaces";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(opts: BuildOptions): DevServerConfiguration {
    const {port} = opts;
    return {
        port,
        open: true,
        historyApiFallback: true,
    }
}