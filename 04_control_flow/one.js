// if

// const isUserLoggedIn = true
// if (isUserLoggedIn){

// }

// ------------------------------------------------

// const temperature = 42
// if (temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }
// ------------------------------------------------

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);  


// const balance = 1000
// if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than");
// }else if(balance < 750){
//     console.log("less than 750")
// }else if (balance == 1000){
//     console.log("equal to ")
// }else{
//     console.log("greater than ")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
