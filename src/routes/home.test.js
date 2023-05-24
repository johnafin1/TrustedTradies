import React from "react";
import { render, screen } from "@testing-library/react";
import Results from "./results";
import professsionals from "../plugins/professsionals";

describe("Results", () => {
  it("renders a list with the provided items", () => {
    render(<Results />);

    const listItemElements = screen.getAllByRole("img");

    expect(listItemElements.length).toBe(professsionals.length + 1);
  });
});
