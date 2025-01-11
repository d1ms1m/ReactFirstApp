import type {Preview} from "@storybook/react";
import {themes} from "@storybook/theming";
import '../../src/app/styles/index.scss';

import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
// import {StyleDecorator} from "shared/config/storybook/StyleDecorator/StyleDecorator";

const preview: Preview = {
    tags: ['autodocs'],
    parameters: {
        // actions: { argTypesRegex: '^on[A-Z].*' },
        docs: {
            theme: themes.light,
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        // StyleDecorator,
        RouterDecorator,
        ThemeDecorator(Theme.LIGHT)
    ]
};

export default preview;
