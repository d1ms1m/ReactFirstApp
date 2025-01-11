import type {Meta, StoryObj} from '@storybook/react';

import {AppLink, AppLinkFontColor} from './AppLink';
import {kebabize} from "shared/lib/Kebabize/kebabize";

const COMPONENT = AppLink
type Story = StoryObj<typeof COMPONENT>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof COMPONENT> = {
    title: 'shared/AppLink',
    component: COMPONENT,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        // layout: 'centered',
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        to: {
            control: "text",
            type: {
                name: "other",
                value: 'H.LocationDescriptor<S> | ((location: H.Location<S>) => H.LocationDescriptor<S>)'
            },
            table: {
                category: 'Common',
                type: {
                    summary: 'H.LocationDescriptor<S> | function)'.toString(),
                },
                defaultValue: {
                    // summary: 'H.LocationDescriptor<S> | ((location: H.Location<S>) => H.LocationDescriptor<S>)',
                }
            },
        },
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
        fontColor: {
            type: {
                name: 'enum',
                value: Object.values(AppLinkFontColor).map(item => item),
            },
            control: {
                type: "select",
                labels: Object.values(AppLinkFontColor).map(item => item)
            },
            table: {
                category: 'Visual',
                type: {
                    summary: 'enum AppLinkFontColor',
                    detail: Object.keys(AppLinkFontColor).map(item => item).join(' | '),
                },
                defaultValue: {
                    summary: 'AppLinkFontColor.PRIMARY',
                    detail: AppLinkFontColor.PRIMARY
                }
            },
            description: 'Component\'s visual style',
        },
    },
    args: {
        children: 'Link Text',
        fontColor: AppLinkFontColor.PRIMARY,
    },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        to: 'https://www.google.com',
        fontColor: AppLinkFontColor.PRIMARY
    },
};

export const Secondary: Story = {
    args: {
        to: 'https://www.google.com',
        fontColor: AppLinkFontColor.SECONDARY
    },
};
