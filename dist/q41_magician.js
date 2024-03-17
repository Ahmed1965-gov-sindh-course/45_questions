"use strict";
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let m_name = [
    'Harry Porter',
    'David Copperfield',
    'Michael', 'Ron Weasley'
];
function showMagicians() {
    m_name.map((names) => {
        console.log(names);
    });
}
showMagicians();
