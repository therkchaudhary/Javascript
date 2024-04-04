// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();
// chai()

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("rahul")

