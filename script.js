// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate the password
function generatePassword() {
  // Ask user for how long they want the password to be choice
  var passLength = window.prompt("Please choose how many characters, between 8-128, you want the password to be:");

  while (passLength < 8 || passLength > 128) {

    passLength = window.prompt("Please choose a number between 8 and 128:");
    
    if (passLength > 7 && passLength < 129) {
      console.log(passLength);
      break;
    }
  }

  window.alert("Please select at least one of the following criteria.");

  var lower = window.confirm("Do you want lowercase letters?")
  var upper = window.confirm("Do you want uppercase letters?")
  var num = window.confirm("Do you want numbers?")
  var specialChar = window.confirm("And finally, do you want any special characters?")

  while (lower === false && upper === false && num === false && specialChar === false) {

    window.alert("You need to select at least one of the criteria.");

    lower = window.confirm("Do you want lowercase letters?")
    upper = window.confirm("Do you want uppercase letters?")
    num = window.confirm("Do you want numbers?")
    specialChar = window.confirm("And finally, do you want any special characters?")
    
    if (lower === true || upper === true || num === true || specialChar === true) {
      console.log('Great!');
      break;
    }
  }

  return "testing"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
