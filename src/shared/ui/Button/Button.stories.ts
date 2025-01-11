import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {Button, ButtonStyle} from './Button';
import {kebabize} from "shared/lib/Kebabize/kebabize";

const COMPONENT = Button
type Story = StoryObj<typeof COMPONENT>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof COMPONENT> = {
    title: 'shared/Button',
    component: COMPONENT,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        // layout: 'centered',
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        children: {
            control: "text",
            description: "Inner Component(s) or text",
            table: {
                category: 'Common',
                type: {
                    summary: 'component | text | ...',
                },
            },
        },
        className: {
            control: "text",
            description: "Additional Component classes",
            table: {
                category: 'Common',
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: `.${kebabize(COMPONENT.name)}`,
                    detail: 'unchangeable build-in class'
                }
            },
        },
        buttonStyle: {
            type: {
                name: 'enum',
                value: Object.values(ButtonStyle).map(item => item),
            },
            control: {
                type: "select",
                labels: Object.values(ButtonStyle).map(item => item)
            },
            table: {
                category: 'Visual',
                type: {
                    summary: 'enum ButtonStyle',
                    detail: Object.keys(ButtonStyle).map(item => item).join(' | '),
                },
                defaultValue: {
                    summary: 'ButtonStyle.DEFAULT',
                    detail: ButtonStyle.DEFAULT
                }
            },
            description: 'Component\'s visual style',
        },
        onClick: {
            type: {
                name: 'function',
            },
            table: {
                category: 'Actions',
            },
            description: 'onclick handler',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        children: 'Button Text',
        buttonStyle: ButtonStyle.DEFAULT,
        onClick: fn(),
    },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        // primary: true,
        // label: 'Button',
        buttonStyle: ButtonStyle.DEFAULT
    },
};

export const Clear: Story = {
    args: {
        // label: 'Button',
        buttonStyle: ButtonStyle.CLEAR
    },
};

export const Rounded: Story = {
    args: {
        // label: 'Button',
        buttonStyle: ButtonStyle.ROUNDED
    },
};
