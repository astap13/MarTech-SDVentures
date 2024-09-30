import avatarImage from "./assets/avatars.png";
import "./styles.scss";
import { openModal, closeModal } from "./modules/modal.js";
import { handleFormSubmit } from "./modules/form.js";

const imgElement = document.querySelector(".img-container img");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

imgElement.src = avatarImage;

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

signupForm.addEventListener("submit", handleFormSubmit);
