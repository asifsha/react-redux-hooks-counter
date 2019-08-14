import React from "react";
import { render } from "@testing-library/react";
import App from "./index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../reducers";
import { initialState } from "../../reducers/initialState";

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer(history), initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

describe("App component testing", function() {
  test("renders App", () => {
    renderWithRedux(<App />);
  });
});
