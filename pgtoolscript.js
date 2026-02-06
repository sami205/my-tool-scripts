
alert("JS file link ho chuki hai!");
/*Password Generator Script
Created for commercial use.
Resale or redistribution prohibited.*/

const passwordField = document.getElementById("password");
const lengthField = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copyBtn");
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUM = "0123456789";
const SYM = "!@#$%^&*()_+[]{}<>?";

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
function generatePassword() {
  let chars = "";
  if (uppercase.checked) chars += UPPER;
  if (lowercase.checked) chars += LOWER;
  if (numbers.checked) chars += NUM;
  if (symbols.checked) chars += SYM;

  if (chars === "") {
    alert("Please select at least one option.");
    return;
  }

  let password = "";
  for (let i = 0; i < lengthField.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordField.value = password;
}

function copyPassword() {
  passwordField.select();
  document.execCommand("copy");
  copyBtn.textContent = "Copied!";
  setTimeout(() => copyBtn.textContent = "Copy", 2500);
}

