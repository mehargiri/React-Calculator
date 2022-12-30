import actionTypes from "./ActionTypes";
import evaluate from "./Evaluate";
import initialState from "./InitialState";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case actionTypes.addNum:
      if (state.changeNumber && state.overwrite) {
        return {
          ...initialState,
          currentNum: payload,
          changeNumber: false,
          overwrite: false,
        };
      }
      if (state.overwrite) {
        return {
          ...state,
          currentNum: payload,
          previousNum: state.result,
          sign: state.tempSign,
          overwrite: false,
          includeEqual: false,
          // result: "",
        };
      }

      // Prevent users from inputting multiple zeroes in front of a number
      if (payload === "0" && state.currentNum === "0") {
        return state;
      }
      // Prevent users from inputting multiple decimal points
      if (payload === "." && state.currentNum.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentNum: `${state.currentNum}${payload}`,
        result: "",
      };

    case actionTypes.pickOperator:
      // Allowing users to change their operator multiple times before
      // inputting another number
      if (state.tempSign !== "") {
        return {
          ...state,
          sign: payload,
          previousNum: state.result,
          includeEqual: false,
          overwrite: false,
          currentNum: "",
          result: "",
          tempSign: "",
        };
      }
      if (state.overwrite) {
        return {
          ...state,
          sign: payload,
          previousNum: state.result,
          includeEqual: false,
          currentNum: "",
          result: "",
        };
      }

      // Preventing users from picking operator before any number is inputted
      if (state.currentNum === "" && state.previousNum === "") {
        return state;
      }

      if (state.currentNum === "") {
        return {
          ...state,
          sign: payload,
          includeEqual: false,
        };
      }
      if (state.previousNum === "") {
        return {
          ...state,
          sign: payload,
          previousNum: state.currentNum,
          currentNum: "",
          result: "",
          includeEqual: false,
        };
      }
      return {
        ...state,
        includeEqual: true,
        overwrite: true,
        tempSign: payload,
        result: evaluate(state),
      };
    case actionTypes.clear:
      return initialState;
    case actionTypes.plusMinus:
      return {
        ...state,
        currentNum: state.currentNum ? state.currentNum * -1 : "",
      };
    case actionTypes.percent:
      return {
        ...state,
        currentNum: state.currentNum ? state.currentNum / 100 : "",
      };
    case actionTypes.calculate:
      // Prevent users from clicking on = button if there has been no input
      if (
        state.sign === "" ||
        state.currentNum === "" ||
        state.previousNum === ""
      ) {
        return state;
      }

      // Preventing users from dividing by 0
      if (state.currentNum === "0" && state.sign === "/") {
        return state;
      }

      if (state.overwrite) {
        return {
          ...state,
          previousNum: state.result,
          result: evaluate(state),
        };
      }
      return {
        ...state,
        tempSign: payload,
        result: evaluate(state),
        includeEqual: true,
        overwrite: true,
        changeNumber: true,
      };
    default:
      return state;
  }
}
