// // Text Manipulation:

// //1. Create an HTML page with a <p> element with an id.
// //2. Use getElementById to retrieve the paragraph element.
// //3. Change the text content of the paragraph to something else.

// const myPara = document.getElementById("myParagraph");
// myPara.innerHTML = "THIS IS PARA";
// console.log(myPara);

// // Styling Manipulation:

// // Create an HTML page with a <div> element with a unique id.
// // Use getElementById to retrieve the div element.
// // Change the background color of the div using JavaScript.
// const backgroundColor = document.getElementById("bg-color");
// backgroundColor.style.backgroundColor="green"
// backgroundColor.style.height="50px"
// backgroundColor.innerHTML="<h2>This Is Heading</h2>"
// console.log(backgroundColor);

// // Event Handling:

// // Create an HTML page with a button element and a separate <div> with an id.
// // Use getElementById to retrieve the div element.
// // Attach a click event listener to the button so that when clicked, it changes the text content of the div.

// document.getElementById("button").addEventListener("click", function(){ 
//     const div = document.getElementById("button");
//     div.innerHTML=("This is DIV Section")
//     div.style.backgroundColor="orange"

//  }); 

// //  Validation:

// // Create an HTML form with an input field and a submit button.
// // Add an id to the input field.
// // Use getElementById to retrieve the input element.
// // Validate the input (e.g., check if it's not empty) when the submit button is clicked.

// const form = document.querySelector('form');
// // // this usecase will give you empty
// // // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });
const form = document.querySelector('form');
form.addEventListener('submit',function(bmi){
  bmi.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  if (height === '' || height <0 || isNaN(height)){
    results.innerHTML = `Please give a Valid height ${height}`
  } 
  else if (weight === '' || weight <0 || isNaN(weight)) {
    results.innerHTML = `Please give a Valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
 
})



