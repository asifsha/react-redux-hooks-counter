import React from "react";
import { render } from "@testing-library/react";
import CounterForm from "./counterForm";

describe("About component testing", function() {
  const count = 0;
  const incrementCounter = () => {};
  const decrementCounter = () => {};

  test("renders About message", () => {
    const { getByText } = render(
      <CounterForm
        count={count}
        onIncrement={incrementCounter}
        onDecrement={decrementCounter}
      />
    );
    expect(getByText("Counter").textContent).toBe("Counter");
  });
});
