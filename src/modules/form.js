import { registerUser } from "./api.js";

import emailErrorIcon from "../assets/Vector.svg";
import passwordErrorIcon from "../assets/Vector.svg";

document.getElementById("emailErrorIcon").src = emailErrorIcon;
document.getElementById("passwordErrorIcon").src = passwordErrorIcon;

export async function handleFormSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email-input").value; 
  const password = document.getElementById("password-input").value; 

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const emailErrorIcon = document.getElementById("emailErrorIcon");
  const passwordErrorIcon = document.getElementById("passwordErrorIcon");
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");

  emailError.classList.add("hidden");
  passwordError.classList.add("hidden");
  emailErrorIcon.classList.add("hidden");
  passwordErrorIcon.classList.add("hidden");
  emailInput.classList.remove("input-error");
  passwordInput.classList.remove("input-error");

  let isValid = true;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(email)) {
    emailError.classList.remove("hidden");
    emailErrorIcon.classList.remove("hidden");
    emailInput.classList.add("input-error");
    isValid = false;
  }

  if (password.length < 8) {
    passwordError.classList.remove("hidden");
    passwordErrorIcon.classList.remove("hidden");
    passwordInput.classList.add("input-error");
    isValid = false;
  }

  if (isValid) {
    const result = await registerUser(email, password);

    if (result.success) {
      displayThankYouMessage();
    } else {
      alert("Регистрация не удалась: " + result.error);
    }
  }
}

function displayThankYouMessage() {
  const signupForm = document.getElementById("signupForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  signupForm.classList.add("hidden");
  thankYouMessage.classList.remove("hidden");
}
