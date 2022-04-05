var heading;
var executeButton=document.getElementById("executeButton");
var outputParagraph;

// document.addEventListener("DOMContentLoaded", food);
executeButton.addEventListener("click",food);
heading =document.getElementById("title");
executeButton = document.getElementById("executeButton");
outputParagraph=document.getElementById("outputText");


function food(){
var site= ["Chinese Food", "French Cuisine","BBQ","PIZZA","Smoothie","SUSHI","Italian Food","India Food","Mexican Cuisine","Taco","Ice Cream"]
var random = Math.floor(Math.random() * site.length);
outputParagraph.innerText= site[random];
   var randomRed = Math.floor(Math.random()*255);
   var randomGreen = Math.floor(Math.random()*255);
   var randomBlue = Math.floor(Math.random()*255);
   console.log(randomRed);
   console.log(randomGreen);
   console.log(randomBlue);

   var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue +")";

   console.log(outputColorString);
   heading.style.color = outputColorString;
   executeButton.style.color = outputColorString;
};

  // outputParagraph.innerHTML = "Chinese Food","Sushi","Smoothie";


function demonstrationFunction() {
  console.log("");

}
