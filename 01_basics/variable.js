const accountId = 144523
let accountEmail = "abc@gmail.com"
var accountPassword = "12345";
accountCity = "Mumbai"
let accountState;

// no further assigning of accountId is allowed as it is const
// var is not prefer because in it scope is not fixed
// by default accountCity will be treated as let
// accountState is undefined

console.log(accountPassword);

console.table([accountId,accountEmail,accountCity,accountState])