import { render, screen } from "@testing-library/react";
import App from "./App";

describe("sample test", () => {
  it("should pass", () => {
    render(<App />);
    expect(screen.getByText("ボーナス")).toBeInTheDocument();
  });
});
