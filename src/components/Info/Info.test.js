// Depende de que aparezca o no de una clase de css
import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given a Info component", () => {
  describe("When it receives a false", () => {
    test("Then it should have 'message off' className", () => {
      const state = false;

      const expectedClassName = "message off";

      render(<Info state={state} />);

      const className = screen.getByTestId("info");

      expect(className).toHaveClass(expectedClassName);
    });
  });
});
