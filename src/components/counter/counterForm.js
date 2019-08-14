import React from "react";
import PropTypes from "prop-types";
import { ButtonToolbar } from "react-bootstrap";

const CounterForm = ({
  count,
  onIncrement,
  onDecrement,
  isIncrementing,
  isDecrementing
}) => {
  return (
    <div className="container">
      <h1>Counter</h1>
      <p id={'counter-value'} data-testid="counter-value">{count}</p>
      <ButtonToolbar>
        <button className="btn btn-primary" onClick={onIncrement}>
          Increment
        </button>

        <button className="btn btn-success" onClick={onDecrement}>
          Decrement
        </button>
      </ButtonToolbar>
    </div>
  );
};

CounterForm.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default CounterForm;
