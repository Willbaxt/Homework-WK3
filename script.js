// Assignment Code
let generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays to hold char sets
const lowC = "abcdefghijklmnopqrstuvwxyz";
const upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const char = "!@#$%^&*()_+:<>?;/.,][}{-=";
const numb = "0123456789";
let fullPass = "";

// Prompt for lenghth then confirms for uppercase,lowercase,numbers
// if and else statements to get if value is true or false  to determine if kind of password
function generatePassword() {
  console.log("btn was clicked") //  tells in the console when button is clicked
  let pwdLength = prompt(
    "Between 8 and 128 characters, how long would you like your password to be?"
  );
  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Please enter a number between 8 and 128.");
  } else {
    let lowerCase = confirm("Would you like to use lowerCase letters?");
    if (lowerCase) {
      fullPass += lowC
    };
    let upperCase = confirm("Would you like to use upperCase letters?");
    if (upperCase) {
      fullPass += upperC
    };

    let specialCharacters = confirm("Would you like to use special Characters?");
    if (specialCharacters) {
      fullPass += char
    };

    let numbers = confirm("Would you like to use numbers?");
    if (numbers) {
      fullPass += numb
    };

    if (
      lowerCase === false &&
      upperCase === false &&
      specialCharacters === false &&
      numbers === false
    ) {
      alert("Please select at least one character type.");
      generatePassword();
    }
  }
  // for loop to generate the actual password based on the choices made
  let pword = "";
  for (let i = 0; i < pwdLength; i++) {
    pword += fullPass.charAt(Math.floor(Math.random() * fullPass.length))
  }
  return pword
}

// send the password to the text box after it is made
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}