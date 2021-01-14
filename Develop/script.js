
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
const generateBtn = document.querySelector("#generate");


//Is it possible to store the variables in one object?
const passwordCriteria = {
  length: 0,
  lowerCase: "",
  upperCase: "",
  numbers: "",
  specialChar: ""
};

//variables for password selection 
const upperSelect = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSelect = "abcdefghijklmnopqrstuvwxyz";
const specialSelect = "!@#$%^&*()-=_+";
const numberSelect = "1234567890";

console.log(`variables are as follows: \n${upperSelect}, \n${lowerSelect}, \n${specialSelect}, \n${numberSelect}`);

//function to generate the password - look to use '.include' to validate PW creation.

function generatePassword() {
  alert("We'll be asking you questions to help generate your password");

  /*Inluding while loop for validation of length*/

  console.log(passwordCriteria.length);

  //stored as a string
  while (!(passwordCriteria.length >= 8) || !(passwordCriteria.length <= 128)) {
    passwordCriteria.length = prompt("How long does your password need to be (must be between 8-128 characters)");
  }

  while (!passwordCriteria.lowerCase && !passwordCriteria.upperCase && !passwordCriteria.numbers && !passwordCriteria.specialChar) {

    const password = "";

    //Boolean operators
    passwordCriteria.lowerCase = confirm("Does your password need lowercase characters (Select 'OK' for Yes and 'Cancel' for No)?");

    passwordCriteria.upperCase = confirm("Does your password need uppercase characters (Select 'OK' for Yes and 'Cancel' for No)?");

    passwordCriteria.numbers = confirm("Does your password need numbers (Select 'OK' for Yes and 'Cancel' for No)?");

    passwordCriteria.specialChar = confirm("Does your password need special characters (Select 'OK' for Yes and 'Cancel' for No)?");
  }

  console.log(passwordCriteria.length);

  console.log(passwordCriteria.lowerCase);

  console.log(passwordCriteria.upperCase);

  console.log(passwordCriteria.numbers);

  console.log(passwordCriteria.specialChar);


  /*including while loop for validation of selection and case correction*/
  //pick guaranteed characters - picking those at the front ofthe password
  //fischer yates algorithm

  //if (criteria) guarateed characters to meet selected criteria

  //separte statement for totally random

  //put together.



  if (passwordCriteria.lowerCase == true) {
    password += lowerSelect.charAt(Math.floor(Math.random() * lowerSelect.length));
    console.log(password);
  }

  if (passwordCriteria.upperCase === true) {
    password += upperSelect.charAt(Math.floor(Math.random() * upperSelect.length));
    console.log(password);
  }

  if (passwordCriteria.numbers === true) {
    password += upperSelect.charAt(Math.floor(Math.random() * upperSelect.length));
    console.log(password);
  }

  if (passwordCriteria.specialChar === true) {
    password += upperSelect.charAt(Math.floor(Math.random() * upperSelect.length));
    console.log(password);
  }

  //password +=;

  //return password;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

