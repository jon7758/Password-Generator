// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  console.log("inside writePassword");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  console.log("inside generatePassword");
  
  confirm ("Would you like to generate a password?");
  var psswordLength = prompt ("How many characters would you like your password to have?");
  while (psswordLength < 8 || psswordLength > 128) {
    psswordLength = prompt("Length must be 8-128 characters. How many characters would you like your password to have?");
  }
  var plowercase = confirm ("Would you like your password to have lowercase characters?");
  var puppercase = confirm ("Would you like you password to have uppercase characters?");
  var pnumbers = confirm ("Would you like your password to have numbers?");
  var pspecial = confirm ("Would you like your password to have special characters?");
  
  var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var numbers = "1234567890".split("")
  var specialchar = "!@#$%^&*()_+".split("")
  var emptyarr = []
  
  if (plowercase === true) {
    emptyarr += lowercase;
    console.log(emptyarr);
    // if true add lowercase to 
  }
  if (puppercase === true) {
    emptyarr += uppercase;
    console.log(emptyarr);
    // if true add uppercase to 
  }
  if (pnumbers === true) {
    emptyarr += numbers;
    console.log(emptyarr);
    // if true add numbers to 
  }
  if (pspecial === true) {
    emptyarr += specialchar;
    console.log(emptyarr);
    // if true add specialchar to 
  }
  emptyarr= emptyarr.split(",")
  var results=[]
  for (var i = 0; i < psswordLength; i++) {
    results.push(emptyarr[Math.floor(Math.random() * emptyarr.length)])
    
    
  }
  
  

  return results
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

