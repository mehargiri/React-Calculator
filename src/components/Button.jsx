import PropTypes from "prop-types";
import ButtonStyles from "./Button.module.scss";

export default function Button({ data, light, dark }) {
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

  return (
    <button
      type="button"
      className={`${ButtonStyles.btn} ${light ? `${ButtonStyles.light}` : ""} ${
        dark ? `${ButtonStyles.dark}` : ""
      }`}
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
};

Button.defaultProps = {
  data: {},
};
