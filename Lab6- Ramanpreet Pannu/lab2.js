window.onload = loadHandle;

function loadHandle() {
  "use strict";

  const loginForm = document.querySelector(".login__form");

  loginForm.onsubmit = submitHandle;
}

function submitHandle(event) {
  "use strict";

  event.preventDefault();

  const username = document.querySelector(".login__user");
  const password = document.querySelector(".login__pass");

  if (username.value === "") {
    if (!username.classList.contains("login__txtbox_error")) {
      username.classList.add("login__txtbox_error");
    }
    username.focus();
    return false;
  } else {
    username.classList.remove("login__txtbox_error");
  }

  if (password.value === "") {
    if (!password.classList.contains("login__txtbox_error")) {
      password.classList.add("login__txtbox_error");
    }
    password.focus();
    return false;
  } else {
    password.classList.remove("login__txtbox_error");
  }

  document.querySelector(".output__user").textContent = username.value;
  document.querySelector(".output__pass").textContent = password.value;
  document.querySelector(".output").style.display = "block";

  username.value = "";
  password.value = "";

  return false;
}
