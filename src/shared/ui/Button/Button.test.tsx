import {Button, ButtonStyle} from "shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";

describe("Button component testing ...", () => {
    test("Should have correct label", () => {
        render(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
        // screen.debug()
    })
    test("Should have correct component class ...", () => {
        render(<Button>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('button');
    })
    test("Should have correct 'clear' class ...", () => {
        render(<Button buttonStyle={ButtonStyle.CLEAR}>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('clear');
    })
    test("Should have correct 'default' class ...", () => {
        render(<Button buttonStyle={ButtonStyle.DEFAULT}>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('default');
    })
})