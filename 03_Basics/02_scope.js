// var c = 300

let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Rahul"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one( )

if (true){
    const username = "Rahul"
    if(username === "Rahul"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++ intresting ++++++++++++++++++++

console.log(addon(5))
function addon(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}
