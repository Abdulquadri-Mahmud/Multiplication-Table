const viewContent = document.querySelector(".viewContent");
const input = document.querySelector(".input");
const display_error = document.querySelector(".display_error");
const clear = document.querySelector(".clear");
const enter = document.querySelector(".enter");

function expression() {
  //const display_error = document.querySelector(".display_error");
  for (let i = 1; i <= 20; i++) {
    let expressValue = `${input.value} x ${i} = ${input.value * i} \n`;
    //viewContent.innerText += expressValue;
    function Display_Error() {
      if (input.value === "") {
        display_error.style.display += "block";
        viewContent.innerText = "";
      }else if (isNaN(input.value)) {
        display_error.style.display = "block";
        viewContent.innerText = "";
      }else {
        viewContent.innerText += expressValue;
      }
    }
    Display_Error();
  }
}
//claer user input immediately after clicking the enter button.
function clearUserInput() {
  input.value = "";
}

enter.addEventListener("click", () => {
  expression();
  clearUserInput();
});

clear.addEventListener("click", () => {
  display_error.style.display = "none";
  viewContent.innerText = "";
});
