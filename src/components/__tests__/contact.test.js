import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';


test("Check the contact page heading", () => {
    render(<Contact />);

    const heading = screen.getByText("This is Contact us page");
    expect(heading).toBeInTheDocument();
});
