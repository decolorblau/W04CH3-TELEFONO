import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Display component", () => {
  describe("When it receives 7", () => {
    test("Then it should return 7", () => {
      const number = 7;

      const expectedNumber = 7;

      render(<Key number={number} actionOnClick={() => {}} />);

      const numberInput = screen.getByText(expectedNumber);

      expect(numberInput).toBeInTheDocument();
    });
  });
});
