import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("page", () => {
  it("should render", () => {
    render(<Home />);
    expect(screen.getByText("Save and see your changes instantly.")).toBeInTheDocument();
  });
});
