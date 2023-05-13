import { describe, expect, it, vi } from "vitest";
import * as services from '../../utils/Services';
import TestingAPICalls from "./TestingAPICalls";
import { render, screen, waitFor } from "@testing-library/react";

describe("Text TestingAPICalls component", async () => {
    it("Test ", async () => {
        const mockFetchData = vi.spyOn(services, 'FetchData').mockImplementation(async () => {
            return [{
                name: 'kunal'
            }];
        });

        render(<TestingAPICalls />)
        expect(mockFetchData).toHaveBeenCalled();
        await waitFor(() => {
            expect(screen.getByText(/kunal/i)).toBeInTheDocument();
        });

    });
});