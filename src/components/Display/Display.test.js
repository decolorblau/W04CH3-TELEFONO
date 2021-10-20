import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When it receives 6546", () => {
    test("Then it should return 6546", () => {
      const number = 6546;

      const expectedClassName = 6546;

      render(<Display number={number} />);

      const numberInput = screen.getByText(expectedClassName);

      expect(numberInput).toBeInTheDocument();
    });
  });
});
