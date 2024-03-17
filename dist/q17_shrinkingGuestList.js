"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
const q16_moreGuest_1 = require("./q16_moreGuest");
q16_moreGuest_1.guestList.map((guest) => console.log(`\nDear ${guest} we can only invite two persons to join this dinner`));
//step 1: remove guest
let remove1 = q16_moreGuest_1.guestList.pop();
let remove2 = q16_moreGuest_1.guestList.pop();
