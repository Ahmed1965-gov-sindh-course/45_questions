/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
let magicianNames: string[] =[
    'Harry Porter',
    'David Copperfield',
    'Michael', 'Ron Weasley'
]
function make_great(){
    magicianNames.forEach(name => {
        console.log(`${name} the Great`)
    })
}
make_great()

export {}