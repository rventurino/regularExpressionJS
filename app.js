/*
1. Write a JavaScript program to test the first character of a string is uppercase or not.
*/

console.log("first is uppercase: ");
function firstIsUpperCase(str) {
  regex = /^[A-Z]/;
  if (regex.test(str)) {
    return true;
  } else return false;
}

console.log(firstIsUpperCase("Hello"));
//true
console.log(firstIsUpperCase("hello"));
//false
console.log(firstIsUpperCase("hEllo"));

console.log("credit num checker: ");

/*
Write a JavaScript program to check a credit card number ( format 9999-9999-9999-9999 ).
*/

function creditNumChecker(numString) {
  regex = /\d\d\d\d-\d\d\d\d-\d\d\d\d-\d\d\d\d/;
  if (regex.test(numString)) {
    return true;
  } else return false;
}
console.log(creditNumChecker("4444-5555-6666-7777"));
//true
console.log(creditNumChecker("jdf-445-3232"));
//false
console.log("email checker");
/*
3. Write a pattern that matches e-mail addresses. Go to the editor
The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
*/

function isValidEmail(email) {
  if (/\w+@+\w+\.+\w/.test(email)) {
    return true;
  } else return false;
}
//probably not the greatest solution but I am just learning
console.log(isValidEmail("admin@example.com"));
//true
console.log(isValidEmail("mysite@.org.org "));
//false

console.log("DateString: ");
/*
Write a JavaScript program to search a date within a string.
*/

function is_dateString(dateString) {
  regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

  if (regexp.test(dateString)) {
    return true;
  } else {
    return false;
  }
}
is_dateString("32/01/2015");

console.log(is_dateString("Albert Einstein was born in Ulm, on 14/03/1879."));
//true
console.log(is_dateString("01/01/2015"));
//true
console.log(is_dateString("01/22/2015"));
//true
console.log(is_dateString("32/01/2015"));
//false
/*
let a = "22/33/4444";
let a = a.replaceAll("/", ", ");
console.log(a);

let result = "1 abc 2 abc 3".replaceAll("abc", "xyz");
console.log(result);
*/
// let extractedDate = validDate.exec(dateString)[0];
// extractedDate = extractedDate.replaceAll("/", ", ");
