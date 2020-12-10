function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// Form elements
var GeneralCondition = document.getElementById("GeneralCondition");
var events = document.getElementsByTagName("location");

//validation 1 location checkbox is checked

var radioBtn = function (){
  var events = document.querySelectorAll(".location");
  var nbChecked = 0;
  console.log(events, events.value);
  for (var i = 0; i < events.length; i++) {
    if (events[i].checked) {
        nbChecked++;
      }
    console.log(nbChecked.value)}
    if (nbChecked==0){
      document.getElementById('msgCity').style.display='block';
      return false;
        }
    return true;
  }



// Fonction Validate form
function validate(){
  console.log("validate");
  formValid = true;
  if (!GeneralCondition.checked){
    document.getElementById('msgGC').style.display='block'; //display message
    formValid=false; }
  if (radioBtn==false){
    document.getElementById('msgCity').style.display='block';
  }
    formValid=radioBtn(); 
  console.log("sortie validate"+formValid);
  return formValid;
}

//display confirmation
const formSent = document.querySelector(".form__sent");
const submitBtn = document.querySelectorAll(".btn-submit");

submitBtn.forEach((btn) => btn.addEventListener("click", displayConfirmation));

function displayConfirmation(){
  if (validate==true){
  formSent.style.display = "block";}
  }

// close confirmation
const closeBtn2 = document.querySelectorAll(".close2");
closeBtn2.forEach((btn) => btn.addEventListener("click", closeConfirmation));
function closeConfirmation() {
  formSent.style.display = "none";
}




