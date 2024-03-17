"use strict";
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
let greatMagicians = [
    'Harry Porter',
    'David Copperfield',
    'Ron Weasley',
];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(`\n\t The magicians: ${magician} \n\t`);
    }
}
function make_great(magicians) {
    greatMagicians.forEach(magicians => {
        console.log(`\n\t${magicians} the Great\n\t`);
    });
}
function originalMagicians(magicians) {
    greatMagicians.slice(); //create modified array
    console.log(`\n\tThe Original Magician's List: [ ${greatMagicians}]\n\t`);
}
showMagicians(greatMagicians);
make_great(greatMagicians);
originalMagicians(greatMagicians);
