const allRel = {
  input: document.querySelector("input#name-input"),
  span: document.querySelector("span#name-output"),
};

allRel.input.addEventListener("input", onInputListener);

function onInputListener(event) {
  // виправив
  event.currentTarget.value.trim() !== ""
    ? (allRel.span.textContent = event.currentTarget.value)
    : (allRel.span.textContent = "Anonymous");
}
