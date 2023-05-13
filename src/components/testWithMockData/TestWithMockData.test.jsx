import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TestWithMockData from "./TestWithMockData";
import userEvent from "@testing-library/user-event";

const mockData = [
    {
        "id": 1,
        "first_name": "Fletcher",
        "last_name": "McVanamy",
        "email": "mmcvanamy0@e-recht24.de",
        "age": 30
    }, {
        "id": 2,
        "first_name": "Clarice",
        "last_name": "Harrild",
        "email": "charrild1@dion.ne.jp",
        "age": 35
    },
    {
        "id": 3,
        "first_name": "Amby",
        "last_name": "Emmer",
        "email": "aemmer2@buzzfeed.com",
        "age": 67
    }
]
//Agrege id 3 porque no tenia covertura del 100%, me indicaba que la linea 19 no estaba cubierta.
//{item.age > 50 ? 'Senior' : 'Not senior'}


describe("Test TestWithMockData component", () => {
    it("Ordered list renders", () => {
        render(<TestWithMockData data={mockData} displayUnorderedList={false} />)
        const elementByName = screen.getByText(/McVanamy/i);
        expect(elementByName).toBeInTheDocument()
    });

    it("should be render list", () => {
        render(<TestWithMockData data={mockData} displayUnorderedList={true} />);
        const elementByName = screen.getByText(/fletcher/i);
        expect(elementByName).toBeInTheDocument();
    });

    it("Email link click handler called", async () => {
        const mockHandleClick = vi.fn()
        render(<TestWithMockData
            data={mockData}
            displayUnorderedList={true}
            handleClick={mockHandleClick}
        />)

        const element = screen.getByText(/mmcvanamy0@e-recht24.de/i);
        await userEvent.click(element);
        expect(mockHandleClick).toHaveBeenCalled();
    })
})