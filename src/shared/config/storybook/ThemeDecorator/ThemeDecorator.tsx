import {Theme} from 'app/providers/ThemeProvider';
import {StoryFn} from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => function themeDecorator(Story: StoryFn) {
    const styles = {
        padding: '20px'
    }
    return <div className={`app ${theme}--theme`} style={styles}>
        <Story/>
    </div>
};
