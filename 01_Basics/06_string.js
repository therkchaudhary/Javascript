const name = "Rahul"
const repoCount = 50

// console.log(name + repoCount + "value"); //old method

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);  //New method

const gameName = new String('Rahul-ch-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString)


const newStringOne = "      Rahul        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));