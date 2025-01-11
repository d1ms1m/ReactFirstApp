import webpack from "webpack";
import {BuildOptions} from "../../build.interfaces";
import {getStyleLoader} from "./styleLoader";
import {getSvgLoader} from "./svgLoader";
import {getFontLoader} from "./fontLoader";
import {getTsLoader} from "./tsLoader";

export function buildLoaders(opts: BuildOptions): webpack.RuleSetRule[] {
    return [
        getSvgLoader(),
        getFontLoader(),
        getTsLoader(),
        getStyleLoader(opts.isDev),
    ]
}