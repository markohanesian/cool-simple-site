/* FLIP CHECK BUTTON */
// creating the constants to select the html elements
const button = document.querySelector('#flip-check-container');
const buttonText = document.querySelector('#flip-check-text');

const checkMark =
  '<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30.88"><defs><style>.a{fill:none;stroke:#06d6a0;stroke-linecap:round;stroke-miterlimit:10;stroke-width:8px;}</style></defs><path class="a" d="M20.05,31.9l7.86,11.29a.15.15,0,0,0,.28,0L44.05,20.4" transform="translate(-16.05 -16.4)"/></svg>';

buttonText.innerHTML = "Submit";

button.addEventListener("click", function () {
  if (buttonText.innerHTML !== "Submit") {
    buttonText.innerHTML = "Submit";
  } else if (buttonText.innerHTML === "Submit") {
    buttonText.innerHTML = checkMark;
  }
});
