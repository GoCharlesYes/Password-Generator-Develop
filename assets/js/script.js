// Assignment Code
var generateBtn = document.querySelector("#generate");

// Adding possible values for password
var valueupperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var valuelowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var valueNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var valueSpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "`", "-", "=", "[", "]", "{", "}", "<", ">", ".", "?", "/"];

// Creating password criteria prompts
function passwordprompt() {
  var check = false;
  do {
    var passwordLength = prompt("Please type password length between 8 and 128 characters");
    var passwordNumbers = confirm("Click OK to include numeric characters.");
    var passwordUppercase = confirm("Click OK to include uppercase characters.");
    var passwordLowercase = confirm("Click OK to include lowercase characters.");
    var passwordSpecial = confirm("Click OK to include special characters.");
    
    // Creating possible responses for password criteria
    var reply = {
      passwordLength: passwordLength,
      passwordNumbers: passwordNumbers,
      passwordUppercase: passwordUppercase,
      passwordLowercase: passwordLowercase,
      passwordSpecial: passwordSpecial,
    }
    
    // Setting parameters for length and values included in the password
    if ((passwordLength > 128)||(passwordLength < 8))
    alert("Please enter a number between 8 and 128");
    else if((!passwordNumbers)&&(!passwordUppercase)&&(!passwordLowercase)&&(!passwordSpecial))
    alert("Please choose at least one type");
    else 
    check = true; 

  } while(!check);
  return reply;
}

// Creating function for generate passsword function which was previously undefined in the console
function generatePassword() {
  var passwordChoice = passwordprompt();
  var passwordCombination = [];
  var passwordFinal = "";

  if (passwordChoice.passwordNumbers) {
    for (var i of valueNumber)
      passwordCombination.push(i);
  }
  if (passwordChoice.passwordUppercase) {
    for (var i of valueupperCase)
      passwordCombination.push(i);
  }
  if (passwordChoice.passwordLowercase) {
    for (var i of valuelowerCase)
      passwordCombination.push(i);
  }
  if (passwordChoice.passwordSpecial) {
    for (var i of valueSpecial)
      passwordCombination.push(i);
  }

  // Logs to console
  console.log(passwordCombination);

  // Creating for loop
  for (var i = 0; i < passwordChoice.passwordLength; i++) {
    passwordFinal += passwordCombination[Math.floor(Math.random()*passwordCombination.length)];
  }
  // Math.floor rounds to nearest whole number and math.random returns a number between 0 and 1
  console.log(passwordFinal);

  return passwordFinal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
