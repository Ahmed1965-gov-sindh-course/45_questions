/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function makeShirt(size: string, message: string) {
    console.log(` ${size}, ${message}`)
}

makeShirt('large size', 'I love TypeScript')