import PropTypes from "prop-types";
import ToggleStyles from "./Toggle.module.scss";

export default function Toggle({ light, dark, changeLight, changeDark }) {
  return (
    <div
      className={`${ToggleStyles.container} ${
        light ? `${ToggleStyles.light}` : ""
      } ${dark ? `${ToggleStyles.dark}` : ""}`}
    >
      <button
        type="button"
        className={`${ToggleStyles.lightIcon} ${
          light ? `${ToggleStyles.select}` : ""
        }`}
        onClick={changeLight}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M128 62a66 66 0 1 0 66 66a66.1 66.1 0 0 0-66-66Zm0 120a54 54 0 1 1 54-54a54 54 0 0 1-54 54Zm-6-146V16a6 6 0 0 1 12 0v20a6 6 0 0 1-12 0ZM44.6 53a5.9 5.9 0 1 1 8.4-8.4l14.2 14.1a6.1 6.1 0 0 1 0 8.5a5.9 5.9 0 0 1-4.3 1.7a5.8 5.8 0 0 1-4.2-1.7ZM42 128a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h20a6 6 0 0 1 6 6Zm25.2 60.8a6.1 6.1 0 0 1 0 8.5L53 211.4a5.9 5.9 0 0 1-8.4-8.4l14.1-14.2a6.1 6.1 0 0 1 8.5 0ZM134 220v20a6 6 0 0 1-12 0v-20a6 6 0 0 1 12 0Zm77.4-17a5.9 5.9 0 1 1-8.4 8.4l-14.2-14.1a6 6 0 0 1 8.5-8.5Zm34.6-75a6 6 0 0 1-6 6h-20a6 6 0 0 1 0-12h20a6 6 0 0 1 6 6Zm-34.6-83.4a5.8 5.8 0 0 1 0 8.4l-14.1 14.2a5.8 5.8 0 0 1-4.2 1.7a5.9 5.9 0 0 1-4.3-1.7a6.1 6.1 0 0 1 0-8.5L203 44.6a5.8 5.8 0 0 1 8.4 0Z"
          />
        </svg>
      </button>
      <button
        type="button"
        className={`${ToggleStyles.darkIcon} ${
          dark ? `${ToggleStyles.select}` : ""
        }`}
        onClick={changeDark}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M222.4 150.9a6.1 6.1 0 0 0-5.7-4.3h-.1l-1.7.3A86 86 0 0 1 109.1 41.1a6.8 6.8 0 0 0 .2-1.4a5.8 5.8 0 0 0-3.7-5.9a6.1 6.1 0 0 0-4-.2a98 98 0 1 0 120.8 120.7a6.5 6.5 0 0 0 0-3.4ZM128 214A86 86 0 0 1 95.2 48.5a98.1 98.1 0 0 0 112.3 112.3A86.1 86.1 0 0 1 128 214Z"
          />
        </svg>
      </button>
    </div>
  );
}

Toggle.propTypes = {
  light: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  changeLight: PropTypes.func.isRequired,
  changeDark: PropTypes.func.isRequired,
};
