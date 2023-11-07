const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

// виправив
spanRef.style.fontSize = `${inputRef.value}px`;

const onFontSizeInput = inputRef.addEventListener("input", (event) => {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
});
