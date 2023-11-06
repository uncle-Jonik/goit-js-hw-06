const inputRel = document.querySelector("#validation-input");

const onInputBlur = inputRel.addEventListener("blur", vereficationInputBlur);

function vereficationInputBlur() {
  const needLength = Number(inputRel.dataset.length);
  const currentLength = inputRel.value.trim().length;

  if (needLength === currentLength) {
    inputRel.classList.add("valid");
    inputRel.classList.remove("invalid");
  } else {
    inputRel.classList.remove("valid");
    inputRel.classList.add("invalid");
  }
}
