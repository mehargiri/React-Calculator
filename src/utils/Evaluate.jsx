export default function evaluate({ currentNum, previousNum, sign }) {
  const prev = parseFloat(previousNum);
  const curr = parseFloat(currentNum);
  if (Number.isNaN(prev) || Number.isNaN(curr)) return "";
  let answer = "";
  switch (sign) {
    case "+":
      answer = prev + curr;
      break;
    case "-":
      answer = prev - curr;
      break;
    case "×":
      answer = prev * curr;
      break;
    case "÷":
      answer = prev / curr;
      break;
    default:
      break;
  }
  return Number.isInteger(answer) ? answer.toString() : answer.toFixed(4);
}
