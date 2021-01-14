
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
const generateBtn = document.querySelector("#generate");


//Is it possible to store the variables in one object?
const passwordCriteria = {
  passLength: 0,
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
  //converted to integer
  while (!(passwordCriteria.passLength >= 8) || !(passwordCriteria.passLength <= 128)) {
    passwordCriteria.passLength = parseInt(
      prompt("How long does your password need to be (must be between 8-128 characters)")
    );
  }

  while (!passwordCriteria.lowerCase && !passwordCriteria.upperCase && !passwordCriteria.numbers && !passwordCriteria.specialChar) {

    let password = " ";

    //Boolean operators
    passwordCriteria.lowerCase = confirm("Click OK to confirm including lower case characters.");

    passwordCriteria.upperCase = confirm("Click OK to confirm including upper case characters.");

    passwordCriteria.numbers = confirm("Click OK to confirm including numbers.");

    passwordCriteria.specialChar = confirm("Click OK to confirm including special characters.");


    console.log(passwordCriteria.passLength);

    console.log(passwordCriteria.lowerCase);

    console.log(passwordCriteria.upperCase);

    console.log(passwordCriteria.numbers);

    console.log(passwordCriteria.specialChar);


    /*including while loop for validation of selection and case correction*/
    //pick guaranteed characters - picking those at the front of the password
    //fischer yates algorithm

    //if (criteria) guarateed characters to meet selected criteria

    //separte statement for totally random

    //put together.

    console.log(password.length);

    while (password.length < passwordCriteria.passLength) {
      if (passwordCriteria.lowerCase == true) {
        password += lowerSelect.charAt(Math.floor(Math.random() * lowerSelect.length));
        console.log(password);
      }

      if (passwordCriteria.upperCase === true) {
        password += upperSelect.charAt(Math.floor(Math.random() * upperSelect.length));
        console.log(password);
      }

      if (passwordCriteria.numbers === true) {
        password += numberSelect.charAt(Math.floor(Math.random() * numberSelect.length));
        console.log(password);
      }

      if (passwordCriteria.specialChar === true) {
        password += specialSelect.charAt(Math.floor(Math.random() * specialSelect.length));
        console.log(password);
      }
    }
    return password;
  }
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)