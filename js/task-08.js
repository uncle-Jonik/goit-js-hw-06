const loginFormRel = document.querySelector(".login-form");

loginFormRel.addEventListener("submit", onloginFormSubmit);

function onloginFormSubmit(event) {
  event.preventDefault();

  // Виправив, але мені рішення не дуже подобається()

  const enteredData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  if (enteredData.email === "" || enteredData.password === "") {
    return alert("All fields must be filled!");
  }

  console.log(enteredData);

  loginFormRel.reset();
}
