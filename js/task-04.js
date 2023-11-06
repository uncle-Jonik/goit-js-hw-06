const allRel = {
  increment: document.querySelector("[data-action=increment]"),
  decrement: document.querySelector("[data-action=decrement]"),
  span: document.querySelector("#value"),
};

allRel.increment.addEventListener("click", onIncrementClick);
allRel.decrement.addEventListener("click", onDecrementClick);

let counterValue = 0;

function onIncrementClick() {
  counterValue += 1;
  return (allRel.span.textContent = counterValue);
}
function onDecrementClick() {
  counterValue -= 1;
  return (allRel.span.textContent = counterValue);
}
