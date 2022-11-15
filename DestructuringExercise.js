// Object Destructuring 1:
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); logs 8
// console.log(yearNeptuneDiscovered); logs 1846

// Object Destructuring 2:
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); logs { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

// Object Destructuring 3:
// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"})
//   returns: 'Your name is Alejandro and you like purple'
  
//   getUserData({firstName: "Melissa"})
//   returns: 'Your name is Melissa and you like green'

  
//   getUserData({})
//   returns: 'Your name is undefined and you like green'

// Array Destructuring 1:
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); returns Maya
// console.log(second); returns Marisa
// console.log(third); returns Chi

// Array Destructuring 2:
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); returns 'Raindrops on roses'
//   console.log(whiskers); returns 'Whiskers on kittens'
//   console.log(aFewOfMyFavoriteThings); returns ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// Array Destructuring 3:
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers); returns [10,30,20]

// ES6 Object Destructuring:
// const object = {numbers: {a:1, b:2}};
// const {a,b} = object.numbers

// ES6 Array Swap:
// [array[0], array[1]] = [array[1],array[0]]

// raceResults function:
const raceResults = ([first,second,third,rest]) => ({first,second,third,rest})
