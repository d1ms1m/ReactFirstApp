import {BrowserRouter} from 'react-router-dom';
import {Decorator} from "@storybook/react";

export const RouterDecorator: Decorator = (story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
