import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import CounterForm from "./counterForm";
import * as types from "../../actions/actionTypes";

export function CounterPage() {
  const count = useSelector(state => state.counter.count);

  const dispatch = useDispatch();
  const incrementCounter = useCallback(
    () => dispatch({ type: types.INCREMENT }),
    [dispatch]
  );

  const decrementCounter = useCallback(
    () => dispatch({ type: types.DECREMENT }),
    [dispatch]
  );
  return (
    <CounterForm
      count={count}
      onIncrement={incrementCounter}
      onDecrement={decrementCounter}
    />
  );
}
