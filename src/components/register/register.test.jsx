import { render, screen } from "@testing-library/react";
import Register from "./Register";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Register component", () => {
    it("should render Register component correctly", () => {
        render(<Register />);
        const element = screen.getByRole("heading", { level: 2 });
        expect(element).toBeInTheDocument();
    });

    //Writing a test case for subheading is not necessary, because it does not affect the component behavior even if you don't test that. But just to show you how your tests will break for multiple elements, I have added that element on the UI along with its test case.
    it("should test for presence of subheading in the component", () => {
        render(<Register />);
        const element = screen.getByRole('heading', {
            name: /please enter your details below to register yourself\./i
        });
        expect(element).toBeInTheDocument();
    })

    it("should show error message when all the fields are not entered", async () => {
        render(<Register />);
        const buttonElement = screen.getByRole('button', {
            name: /register/i
        });
        //Always add an await keyword before triggering any event using userEvent as you may not know when the action will be completed.
        await userEvent.click(buttonElement);//Hay que agregar el await, porque sino el alert no aparece, por tema de tiempos.
        // screen.debug();
        const alertElement = screen.getByRole("alert");
        expect(alertElement).toBeInTheDocument();
    });

    it("should not show any error message when the component is loaded", () => {
        render(<Register />);
        const alertElement = screen.queryByRole("alert");
        expect(alertElement).not.toBeInTheDocument();
    })

    it("should show success message when the registration is successful.", async () => {
        render(<Register />);
        const buttonElement = screen.getByRole('button', {
            name: /register/i
        });
        await userEvent.click(buttonElement);
        const alertElement = screen.getByRole("alert");
        expect(alertElement).toBeInTheDocument();
    })
});