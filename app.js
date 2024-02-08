const form = document.querySelector("form");
const btn = document.querySelector("button");
const inputs = document.querySelectorAll(".form input");

btn.addEventListener("click", () => {
  let isFormValid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    alert("Form is submitted");
    // You can uncomment the following line if you want to add a class to the form
    // form.classList.add("form-submitted");
  } else {
    alert("Please fill in all required fields");
  }
});