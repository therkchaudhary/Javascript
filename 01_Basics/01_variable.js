const accountId = 112334;
let accountEmail = "rkchaudharyoff@gmail.com";
var accountPassword = "12345qwer";
accountCity = "Noida";   //not recommended method but we can declere varialbe like this also.
let accountState;   //it give the value udefined because we did not declare it's value.


// accountId = 123; //not allowed

accountEmail = "sdnjcdn@gmail.com";
accountPassword = "2323232";
accountCity = "Delhi"   //not recommended method but we can declere varialbe like this also.

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope.
*/