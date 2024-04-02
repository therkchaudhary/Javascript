function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("H");
  console.log("U");
  console.log("L");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, null)
// addTwoNumbers(3, "a")

function addTwoNumbers(num1, num2){
    // let result = num1 + numb2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username){
  if(username === undefined){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage()) //----------in case of value not given.
// console.log(loginUserMessage("")) //--------in case of empty string.
// console.log(loginUserMessage("Rahul"))


function calculateCartPrice(...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "chandu",
  price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
console.log(returnSecondValue([200, 400, 500, 1000]));


