/*let userName = "Kudus";
let userAge = 25;
let userOccupation = "remote worker";
let userMarritalStatus = "single";

console.log("my name is " + userName + " I'm " + userAge + " and I'm a " + userOccupation + " and i'm " + userMarritalStatus);*/



const plusBtn = document.querySelector(".plus-button");
  const minusBtn = document.querySelector(".minus-button");
  const counter = document.querySelector(".counter");
   const resetBtn = document.querySelector(".reset-button");

  let count = 0; 

  plusBtn.addEventListener("click", function() {
    count++;
    counter.textContent = count;
  });

  minusBtn.addEventListener("click", function() {
    count--; 
    counter.textContent = count;
  });

   resetBtn.addEventListener("click", function() {
    count = 0; 
    counter.textContent = count;
  });