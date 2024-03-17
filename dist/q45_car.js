"use strict";
/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
let myCars;
function getCar(car_name, car_model, car_feature, car_year) {
    return {
        car_name: car_name,
        car_model: car_model,
        car_feature: car_feature,
        car_year: car_year,
    };
    console.log(`${car_name}\n car_model: ${car_model} car feature \n${car_feature}${car_year} ${car_feature}`);
}
console.log(getCar("Honda", "2021", "4 wheels"));
console.log(getCar("Toyota", "2021", "4 wheels", 2021));
console.log(getCar("Kia", "1989", "4 wheels", 2023));
