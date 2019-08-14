import React from "react";
import { render } from "@testing-library/react";
import About from "./index";

describe("About component testing", function() {
  test("renders About message", () => {
    const { getByText } = render(<About />);
    expect(getByText("About Us").textContent).toBe("About Us");
  });
});
