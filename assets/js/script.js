// Assignment code here
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charNumber = "0123456789";
var charSpecial = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
var charCollector = "";

var formSubmitHandler = function(event) {
    event.preventDefault();
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 


// generate random password 8-50 characters

function generatePassword() {
  var passwordPrompt = parseInt(
    window.prompt("Choose password length from 8-50 characters.")
  );
  console.log(passwordPrompt) 

    if (passwordPrompt < 8 || passwordPrompt > 50 || !passwordPrompt) 
    
    {alert("Please enter a valid number!");
  return generatePassword();
}
//character prompts
      var confirmCharNumber = confirm("Include numbers?");
      console.log(confirmCharNumber)
      var confirmCharUpper = confirm("Include upper case letters?");
      console.log(confirmCharUpper)
      var confirmCharLower = confirm("Include lower case letters?");
      console.log(confirmCharLower)
      var confirmCharSpecial = confirm("Include special characters");
      console.log(confirmCharSpecial)
      
  if (confirmCharUpper === true) {
    charCollector = charCollector + charUpper;
  }

  if (confirmCharLower === true) {
    charCollector = charCollector + charLower;
  }

  if (confirmCharSpecial === true) {
    charCollector = charCollector + charSpecial
  }

  if (confirmCharNumber === true) {
    charCollector = charCollector + charNumber
    console.log
  }

  else if (
    confirmCharUpper === false && 
    confirmCharSpecial === false &&
    confirmCharNumber === false &&
    confirmCharLower === false){
    alert("Must choose one option.")
    return generatePassword();
}
//random PW generator
  var randomPassword = ""
  for (let i = 0; i < passwordPrompt; i++) {
    var randomIndex = Math.floor(Math.random() * charCollector.length)
    var randomChar = charCollector[randomIndex];
    randomPassword += randomChar
  }

  return `Generated Password: 
${randomPassword}`;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

