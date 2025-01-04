import {ResolveOptions} from "webpack";
import {BuildOptions} from "../build.interfaces";

export function buildResolvers(opts: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [opts.paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index'],
    }
}