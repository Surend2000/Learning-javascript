const accountId = 12345
let accountEmail ="surend@google.com";
var accountPassword ="1222"
accountCity="Nagpur"
let accountState

//accountId =2222;   Error Comes due to assigning value again to the const.

console.log(accountId)
console.log(accountEmail)

accountEmail="Gourai@google.com"

console.table([accountEmail, accountCity, accountState ])

/*
prefer not to use var because of issue in block scope and functonal scope
*/