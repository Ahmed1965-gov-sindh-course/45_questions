// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const transport: string[] = ['Honda-motorcycle, '
,'Toyota car', 'Hundai car', 'Suzuki car', 'Kia-car']

transport.map((item)=>console.log("\nI would like to own a ", item));
  