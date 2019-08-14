import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import reducer from "../../reducers";
import { initialState } from "../../reducers/initialState";

import { CounterPage } from "./index.js";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer(history), initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>), 
    store
  };
}

test("test increment", () => {
  const { getByTestId, getByText } = renderWithRedux(<CounterPage />);
  fireEvent.click(getByText("Increment"));
  expect(getByTestId("counter-value").textContent).toBe("1");
});

test("test decrement", () => {
  const { getByTestId, getByText } = renderWithRedux(<CounterPage />);
  fireEvent.click(getByText("Decrement"));
  expect(getByTestId("counter-value").textContent).toBe("-1");
});
