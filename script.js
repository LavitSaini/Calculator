function main(){ // main function

// Accessing Display and Parent Element of All Buttons

// Display Box
let display = document.querySelector(".display");

// Parent Element of Buttons
let parentElm = document.querySelector(".cal-buttons");

// Initial Value
let initialValue = 0;
display.value = initialValue;

// function Add button Values as Data Attribute in Elements

function dataAttribute() {
  // Accessing All the Buttons from the Parent Element
  let allButtons = parentElm.querySelectorAll(".btn");

  allButtons.forEach((btn) => {
    btn.setAttribute('data-value', btn.innerText);
  })
}

dataAttribute(); // Calling dataAttribute function

// Main Logic of Calculator Operations

// Click Event Handling function

function eventHandling(event) {
  if (event.target.classList.contains("btn")) {

    event.target.innerText = event.target.dataset.value; // Re-Assign Button innerText
  
    if (event.target.classList.contains("result")) {
      display.value = eval(display.value);
      return;
    } 

    else if (event.target.classList.contains("clear")) {
      display.value = initialValue;
      return;
    } 

    else if (event.target.classList.contains("cut")) {
      let valueArr = display.value.split("");
      valueArr.pop();
      display.value = valueArr.join("");
      return;
    }

    else {
      display.value += event.target.innerText;
    }

  }
  
}

// Using Event Delegation
parentElm.addEventListener("click", function (event) {
  eventHandling(event);
});


}

main();
