/*
step-1
Album: Write a function called make_album() that builds a Object describing a music album. 
step-2
The function should take in an artist name and an album title, 
step-3
and it should return a Object containing these two pieces of information. 
step-4
Use the function to make three dictionaries representing different albums. 
step-5
Print each return value to show that Objects are storing the album information correctly. 
step-6
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
step-7
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
//step-1 -  creating album
function make_album(artist: string, title: string) {
    return `\n${artist}  \n${title}`

}
console.log(make_album('Atif','Atif'))
console.log(make_album('Noor Jahan','Noor Jahan'))
console.log(make_album('Mehnaz','Mehnaz'))
console.log(make_album('Mehdi Hussan','Mehdi Hassn'))    

