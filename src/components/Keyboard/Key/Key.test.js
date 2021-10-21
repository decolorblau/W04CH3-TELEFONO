import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Display component", () => {
  describe("When it receives 7", () => {
    test("Then it should return 7", () => {
      const key = {
        textButton: 7,
        className: "key",
        disabled: "false",
        actionOnClick: jest.fn(),
      };

      const expectedNumber = 7;

      render(
        <Key
          textButton={key.textButton}
          className={key.className}
          disabled={key.disabled}
          actionOnClick={key.actionOnClick}
        />
      );

      const numberInput = screen.getByText(expectedNumber);

      expect(numberInput).toBeInTheDocument();
    });
  });
});
