import {render, screen} from "@testing-library/react";
import {AppNavbar} from "widgets/AppNavbar";

describe("AppNavbar component testing ...", () => {
    test("Should be rendered", () => {
        render(<AppNavbar/>);
        expect(screen.getByTestId('app-navbar')).toBeInTheDocument();
        // screen.debug()
    })
})