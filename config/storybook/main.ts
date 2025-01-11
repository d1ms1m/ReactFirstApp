import type {StorybookConfig} from "@storybook/react-webpack5";
import path from "path";
import webpack from 'webpack';

import {getStyleLoader} from "../build/loaders/styleLoader";
import {BuildPaths} from "../build.interfaces";
import {getSvgLoader} from "../build/loaders/svgLoader";
import {getFontLoader} from "../build/loaders/fontLoader";


const config: StorybookConfig = {
    stories: [
        "../../src/**/*.mdx",
        "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        {
            name: '@storybook/addon-styling-webpack',
            options: {
                rules: [
                    getStyleLoader(true),
                ],
            }
        }
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    core: {disableTelemetry: true,},
    // staticDirs: ['../../public'],
    webpackFinal: async (config: webpack.Configuration) => {
        const paths: BuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
        }

        config.plugins!.push(new webpack.ProvidePlugin({"React": "react"}))
        config.resolve!.modules!.push(paths.src);
        config.resolve!.extensions!.push('.ts', '.tsx');

        config.module!.rules = [
            ...(config.module!.rules || []), // keep default
            getSvgLoader(),
            getFontLoader(),
        ];

        return config
    },
};
export default config;
