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
  // As user if what criteria they want
  window.alert("Please select at least one of the following criteria.");

  var hasLower = window.confirm("Do you want lowercase letters?")
  var hasUpper = window.confirm("Do you want uppercase letters?")
  var hasNum = window.confirm("Do you want numbers?")
  var hasSpecialChar = window.confirm("And finally, do you want any special characters?")
  
  var password = "";

  // If they don't select anything, ask them again until they select at least on of the criteria
  while (hasLower === false && hasUpper === false && hasNum === false && hasSpecialChar === false) {

    window.alert("You need to select at least one of the criteria.");

    hasLower = window.confirm("Do you want lowercase letters?")
    hasUpper = window.confirm("Do you want uppercase letters?")
    hasNum = window.confirm("Do you want numbers?")
    hasSpecialChar = window.confirm("And finally, do you want any special characters?")
    
  }

  // For the lenth of the password, loop through and grab a random value if it has been specified
  for (let i = 0; i < passLength; i += 1 ) {
    if (hasLower) {
      password += getRandomLower();
    }
    if (hasUpper) {
      password += getRandomUpper();
    }
    if (hasNum) {
      password += getRandomNumber();
    }
    if (hasSpecialChar) {
      password += getRandomSpecial();
    }
  }

  // Random value generators
  function getRandomLower() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random() * lower.length)];
  }
  function getRandomUpper() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upper[Math.floor(Math.random() * upper.length)];
  }
  function getRandomNumber() {
    const num = "0123456789";
    return num[Math.floor(Math.random() * num.length)];
  }
  function getRandomSpecial() {
    const specialChar = "!@#$%^&*(){}[]=<>/,.";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
  }

  // selecting only the num of password length
  const finalPassword = password.slice(0, passLength);
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
