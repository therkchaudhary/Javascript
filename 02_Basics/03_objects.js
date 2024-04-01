// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rahul",
    "full name": "Rahul Chaudhary",
    mySym: "myKey1",
    [mySym]: "myKey1",
    age: 19,
    location: "Delhi",
    email: "Rahul@gooogle.com",
    isLoggedIn: false,
    LastLoginDays: ["Momday", "Saturday"]
}

console.log(JsUser.email)
// console.log(JsUser["location"])    //Right method 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Rahul@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Rahul@microsoft.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Helllo JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Helllo JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());















