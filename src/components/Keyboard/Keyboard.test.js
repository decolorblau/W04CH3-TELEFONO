import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Given a Keyboard component", () => {
  describe("When it receives 7", () => {
    test("Then it should return 7", () => {
      const key = {
        textButton: 7,
        className: "key",
        disabled: "false",
        actionOnClick: jest.fn(),
      };

      const expectedNumber = 7;

      render(<Keyboard />);

      const numberInput = screen.getByText(expectedNumber);

      expect(numberInput).toBeInTheDocument();
    });
  });
});
