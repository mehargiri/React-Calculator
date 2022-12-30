import PropTypes from "prop-types";
import ButtonStyles from "./Button.module.scss";
import actionTypes from "../utils/ActionTypes";

export default function Button({ data, light, dark, dispatch }) {
  let textColor;
  if (data.color === "green") {
    textColor = ButtonStyles.green;
  } else if (data.color === "pink") {
    textColor = ButtonStyles.pink;
  } else if (light === true) {
    textColor = ButtonStyles.textLight;
  } else if (dark === true) {
    textColor = ButtonStyles.textDark;
  }

  let onClickFn;
  if (data.numValue !== null) {
    onClickFn = () =>
      dispatch({ type: actionTypes.addNum, payload: data.numValue.toString() });
  } else if (data.operandValue === ".") {
    onClickFn = () =>
      dispatch({ type: actionTypes.addNum, payload: data.operandValue });
  } else if (["+", "-", "×", "÷"].includes(data.operandValue)) {
    onClickFn = () =>
      dispatch({ type: actionTypes.pickOperator, payload: data.operandValue });
  } else if (data.operandValue === "AC") {
    onClickFn = () => dispatch({ type: actionTypes.clear });
  } else if (data.operandValue === "=") {
    onClickFn = () => dispatch({ type: actionTypes.calculate });
  } else if (data.operandValue === "+/-") {
    onClickFn = () => dispatch({ type: actionTypes.plusMinus });
  } else if (data.operandValue === "%") {
    onClickFn = () => dispatch({ type: actionTypes.percent });
  }

  return (
    <button
      type="button"
      className={`${ButtonStyles.btn} ${light ? `${ButtonStyles.light}` : ""} ${
        dark ? `${ButtonStyles.dark}` : ""
      }`}
      onClick={onClickFn}
    >
      <p className={textColor}>{data.operandValue || data.numValue}</p>
    </button>
  );
}

Button.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    numValue: PropTypes.number,
    operandValue: PropTypes.string,
    color: PropTypes.string.isRequired,
  }),
  light: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Button.defaultProps = {
  data: {},
};
