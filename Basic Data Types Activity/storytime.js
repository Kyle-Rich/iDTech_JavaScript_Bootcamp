// TODO: Create 4-String variables to introduce develop your story.
// YOUR CODE GOES HERE
const date = new Date();
const main_character_name = "Billy";
const friendly_team = "Moon";
const enemy_team = "Sun";

// TODO: Create 3-String variables to set the time period of your story or discuss other number elements.
// YOUR CODE GOES HERE
const location = "The Box";
const moved_items = ["Sword"];
const world = "Ocean";

// TODO: Create 1-Array variable to show a collection of items your character might have.
// YOUR CODE GOES HERE
const items = ["Sword", "Fishing Rod", "Sand"];

// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
// YOUR CODE GOES HERE
const is_in_rush = true;

// TODO: Print your story to the console.
// YOUR CODE GOES HERE
const seed = Math.floor(Math.random()*1000);
console.log(`Hello, welcome to the ${world}!`);
console.log("Here we like to watch the sunset everynight.");
if (is_in_rush) {
    console.log("I see your in a rush so we can watch the sunset later.");
} else {
    if (date.getHours() >= 17 && date.getHours() >= 19) {
        console.log(`It almost night here in ${location}, would you like to watch the sunset with us?`);
    } else {
        console.log("Sadly its not night but you may be able to watch the sunset with us later...");
    }
}
setTimeout(() => {
    console.log(`\nUH-OH! It looks like our enemy (${enemy_team}) is trying to enter our base!`);
    console.log(`Here are some of your items you can use to try to stop them! (${items.join(", ")})`);
    console.log(`Only issue is, these items you dont own... (${moved_items.join(", ")})`);
}, seed*3);
setTimeout(() => {
    console.log("\nIt seems like they have left.");
    console.log(`We may need you to help us build our base ${main_character_name}, before they try to enter again.`);
}, seed*3+5600);
setTimeout(() => {
    if (is_in_rush) {
        console.log("\nIt seems like you where in a rush anyway, you should leave.");
        console.log(`Goodbye. ${main_character_name}.`);
    }
}, seed*3+7300);
