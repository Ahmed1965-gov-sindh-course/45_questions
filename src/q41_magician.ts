/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

let m_name: string[] = [
    'Harry Porter',
    'David Copperfield',
    'Michael', 'Ron Weasley'
]

function showMagicians(){
    m_name.map((names)=>{
        console.log(names);
    })
}

showMagicians()
export {}