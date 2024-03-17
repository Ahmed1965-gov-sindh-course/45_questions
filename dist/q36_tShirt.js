"use strict";
/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
let size = "small";
let message = `${size}  I am a small size}`;
function make_shirt(size, message) {
    console.log(` ${size}, ${message}`);
}
make_shirt(size, message);
