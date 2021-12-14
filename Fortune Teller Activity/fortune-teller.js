// TODO: Create a variable called "fortune" and assign a number between 0 - 10.

// YOUR CODE GOES HERE
var fortune;

//I will be using readline for this since this is console based and uses nodejs
const promise = new Promise((resolve, reject) => {
    var interface = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });
    interface.question("Please pick a number from 0-10!\n> ", (reply) => {
        interface.close();
        resolve(parseInt(reply)); //parseInt allows us to take a string and turn it into a number
    });
});


// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE

promise.then(reply => {
    fortune = reply; // I really hate doing this but why does this var required?
    if (fortune >= 0 && fortune <= 10) {
        var type;
        if (fortune >= 0 && fortune <= 3) {
            type = "low";
        } else if (fortune >= 4 && fortune <= 7) {
            type = "average";
        } else if (fortune >= 8 && fortune <= 10) {
            type = "great";
        };
        console.log(`Your fortune is ${reply}\nYou have a ${type} fortune!`);
    } else {
        console.log(`\nSorry! ${fortune} is not in the 0-10 range! Please try again!`);
    }
});
