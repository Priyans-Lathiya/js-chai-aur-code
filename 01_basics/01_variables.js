const accountId=12345
let accountEmail="priyanslathiya@gmail.com"
var accountPassword="98765"
accountCity="Ahmedabad"
let accountState;

// accountId=2 not allowed
/*
Prefer not to use var because of issue in block scope and functional scope
*/

accountEmail="pl@gmail.com"
accountPassword="5555"
accountCity="bengaluru"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])