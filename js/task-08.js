const loginFormRel = document.querySelector(".login-form");

loginFormRel.addEventListener("submit", onloginFormSubmit);

function onloginFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
  }

  console.log(`email: ${email.value}`);
  console.log(`password: ${password.value}`);
}
