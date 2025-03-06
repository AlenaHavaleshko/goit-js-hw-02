// 1. ----if ... else-----

// function checkForSpam(message) {
//  const normalizeMessage = message.toLowerCase();
//  if(normalizeMessage.includes("spam") || normalizeMessage.includes("sale")) {
//   return true;
//  } else {
//   return false;
//  }
// }

// 2.-----ternary operator----

function checkForSpam(message) {
 const normalizeMessage = message.toLowerCase();
 return normalizeMessage.includes("spam") || normalizeMessage.includes("sale") ? true : false;
}

console . log (checkForSpam( "Latest technology news" )); // false 
console . log (checkForSpam( "JavaScript weekly newsletter" )); // false 
console . log (checkForSpam( "Get best sale offers now!" )); // true 
console . log (checkForSpam( "Amazing SalE, only tonight!" )); // true 
console . log (checkForSpam( "Trust me, this is not a spam message" )); // true 
console . log (checkForSpam( "Get rid of sPaM emails. Our book in on sale!" )); // true 
console . log (checkForSpam( "[SPAM] How to earn fast money?" )); // true