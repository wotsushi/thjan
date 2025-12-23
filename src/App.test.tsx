import { render, screen } from "@testing-library/react";
import App from "./App";

describe("清算", () => {
  describe("点数計算", () => {
    beforeEach(() => {
      render(<App />);
    });
  });
  describe("連荘", () => {});
  describe("終局", () => {});
  it("should pass", () => {
    render(<App />);
    expect(screen.getByText("ボーナス")).toBeInTheDocument();
  });
});
