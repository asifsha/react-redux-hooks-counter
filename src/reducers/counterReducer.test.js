import React from "react";

import * as types from "../actions/actionTypes";

describe("Test Redux Actions", () => {
  it("uses correct constants", () => {
    expect({ type: types.INCREMENT }).toEqual({
      type: types.INCREMENT
    });
    expect({ type: types.DECREMENT }).toEqual({
      type: types.DECREMENT
    });
  });
});
