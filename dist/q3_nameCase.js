"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// step-1 lowerCase
let lower_Case = 'AHMED';
let lower_Case2 = lower_Case.toLowerCase();
console.log(`This is Lower Case : ${lower_Case2}`);
// step-2 upperCase
let upper_Case = 'ahmed';
let upper_Case2 = upper_Case.toUpperCase();
console.log(`This is upper Case : ${upper_Case2}`);
// step-3 titleCase
let title_Case = 'ahmed';
let title_Case2 = title_Case.charAt(0);
//Capitilizing title_case2
let title_Case3 = title_Case2.toUpperCase();
// slicing remaining words
let title_Case4 = title_Case.slice(1, 5);
// joing titleCase & titleCase3
let title_Case5 = title_Case3.concat(title_Case4);
console.log(`This is Title Case : ${title_Case5}`);
// ---------------------  End of Exercise-------------------------------------------------------
