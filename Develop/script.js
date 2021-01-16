const generateBtn = document.querySelector("#generate");

//Object for password criteria
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

//function to generate the password
function generatePassword() {
  alert("We'll be asking you questions to help generate your password");

  /*Inluding while loop for validation of length*/
  //converted to integer
  while (!(passwordCriteria.passLength >= 8) || !(passwordCriteria.passLength <= 128)) {
    passwordCriteria.passLength = parseInt(
      prompt("How long does your password need to be (must be between 8-128 characters)")
    );
  }

  //Broad while loop asks the end user questions about password criteria, stores them in applicable variables and then generates a random string to be the password.
  while (!passwordCriteria.lowerCase && !passwordCriteria.upperCase && !passwordCriteria.numbers && !passwordCriteria.specialChar) {

    let password = " ";

    //Boolean operators

    //This while loop is validating responses to ensure at least one selection is true.
    while (!passwordCriteria.lowerCase && !passwordCriteria.upperCase && !passwordCriteria.numbers && !passwordCriteria.specialChar) {
      alert("You must select at least one of the following criteria to be included in your password: \n-lower case characters \n-upper case characters \n-numbers \n-special characters");

      passwordCriteria.lowerCase = confirm("Click OK to confirm including lower case characters.");

      passwordCriteria.upperCase = confirm("Click OK to confirm including upper case characters.");

      passwordCriteria.numbers = confirm("Click OK to confirm including numbers.");

      passwordCriteria.specialChar = confirm("Click OK to confirm including special characters.");
    }

    //using criteria provided above to generate the password.
    while (password.length < passwordCriteria.passLength) {
      if (passwordCriteria.lowerCase == true) {
        password += lowerSelect.charAt(Math.floor(Math.random() * lowerSelect.length));
      }

      if (passwordCriteria.upperCase === true) {
        password += upperSelect.charAt(Math.floor(Math.random() * upperSelect.length));
      }

      if (passwordCriteria.numbers === true) {
        password += numberSelect.charAt(Math.floor(Math.random() * numberSelect.length));
      }

      if (passwordCriteria.specialChar === true) {
        password += specialSelect.charAt(Math.floor(Math.random() * specialSelect.length));
      }
    }
    //Returning password to be displayed in browser.
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