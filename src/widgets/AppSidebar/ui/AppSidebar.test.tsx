import {fireEvent, screen} from "@testing-library/react";
import {AppSidebar} from "widgets/AppSidebar";
import {renderWithTranslation} from "shared/tests/renderWithTranslation/renderWithTranslation";

describe("AppSidebar component testing ...", () => {
    test("Should be rendered", () => {
        renderWithTranslation(<AppSidebar/>);
        expect(screen.getByTestId('app-sidebar')).toBeInTheDocument();
    })
    test("Has a toggle button", () => {
        renderWithTranslation(<AppSidebar/>);
        expect(screen.getByTestId('app-sidebar__toggle-button')).toBeInTheDocument();
    })
    test("Should has a 'collapsed' class on toggle button click", () => {
        renderWithTranslation(<AppSidebar/>);
        const toggleButton = screen.getByTestId('app-sidebar__toggle-button')
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('app-sidebar')).toHaveClass('collapsed');
    })
})