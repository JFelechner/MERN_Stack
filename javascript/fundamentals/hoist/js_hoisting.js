

// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:


// EXAMPLE GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";



// Q1
console.log(hello);                                   
var hello = 'world';                                 
// AFTER HOISTING BY THE INTERPRETER
// var hello; -> only hoists var name NOT assignment
// console.log(hello); -> logs "undefined"




// Q2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle; -> 'needle' is declared at the top as global variable
// function test(){ -> is hoisted to the top
// var needle; -> 'needle' is declared within the function and get hoisted to the top of its scope
// test(); -> test function is called upon and the console.log runs
// console.log(needle); -> logs "magnet"




// Q3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan; -> 'brendan' is declared at the top as global variable
// console.log(brendan); -> inside function does not log anything as the function is not called upon
// console.log(brendan); -> outside the function logs "super cool"




// Q4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food; -> 'food' is declared at the top as a global variable
// function eat(); -> is hoisted to the top
// console.log(food); -> outside the function logs "chicken"
// eat(); -> function call runs the console.log in the function
// var food; -> inside the function is hoisted to the top 
// console.log(food); -> in the function logs "half-chicken"




// Q5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean; -> is hoisted to the top as a global variable
// mean(); -> is undefined




// Q6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre; -> is hoisted to the top as a global variable
// funtion rewind(){ -> is hoisted to the top
// console.log(genre); -> first one outside the function retuns undefined
// rewind(); -> function is called upon 
// var genre; -> inside the function is hoisted to the top
// console.log(genre) -> first console.log in the function logs "rock"
// console.log(genre) -> second console.log inside the fuinction logs "r&b"
// console.log(genre) -> second console.log outside the function at the bottom logs "disco"



// Q7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// dojo -> is declared at the top as a global variable
// function learn(){ -> is hoisted to the top
// console.log(dojo) -> first console.log outside the function logs "san jose"
// learn(); -> function is called upon
// var dojo; -> inside the function is hoisted to the top
// console.log(dojo) -> first console.log inside the function logs "seattle"
// console.log(dojo) -> second console.log inside the function logs "burbank"
// console.log(dojo) -> second console.log outside the function logs "san jose"