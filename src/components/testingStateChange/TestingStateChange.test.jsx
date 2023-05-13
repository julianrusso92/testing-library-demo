import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TestingStateChange from "./TestingStateChange";
import userEvent from "@testing-library/user-event";

describe("", () => {
    it("Test State Updates in React", () => {
        render(<TestingStateChange />);
        const element = screen.getByRole('heading', {
            name: /page loaded/i
        });
        expect(element).toBeInTheDocument();
    });

    it("Test a State Change on Click of a Button", async () => {
        render(<TestingStateChange />);
        const elementButton = screen.getByRole('button', {
            name: /toggle text/i
        });
        await userEvent.click(elementButton);

        const elementTextVisible = screen.getByText(/text visible/i);

        expect(elementTextVisible).toBeInTheDocument();
    });

    it("Test a State Change on Click of a Button disabled", async () => {
        render(<TestingStateChange />);
        const elementBtnDisable = screen.getByRole('button', {
            name: /toggle button disabled/i
        });

        await userEvent.click(elementBtnDisable);
        const toggleBtn = screen.getByRole('button', {
            name: /toggle text/i
        });

        expect(toggleBtn).toBeDisabled();
    });

    it("Test if an Element Was Added to a List", async () => {
        render(<TestingStateChange />)
        const lengthBefore = screen.getAllByTestId('record').length;

        expect(lengthBefore).toBe(3);

        const btn = screen.getByRole('button', {
            name: /add to list/i
        });
        await userEvent.click(btn);
        const lengthAfter = screen.getAllByTestId('record').length;

        expect(lengthAfter).toBe(4);
    });

    it("Element removed from list", async () => {
        render(<TestingStateChange />)
        const btnRemove = screen.getByRole('button', {
            name: /remove from list/i
        });
        await userEvent.click(btnRemove);

        const record = screen.getAllByTestId('record').length;
        expect(record).toBe(2);
    });

});