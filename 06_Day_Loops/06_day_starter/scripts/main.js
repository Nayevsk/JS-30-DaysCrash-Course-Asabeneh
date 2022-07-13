// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// EXERCISES LEVEL 3

// 1 Copy countries array(Avoid mutation)

// let countriesArrayClone = []
// for (i = 0; i < countries.length - 1; i++) {
//   countriesArrayClone.push(countries[i])
// }
// console.log('The new array is: \n', countriesArrayClone)

// 4

// let arrayHatesLand = []
// for (i = 0; i < countries.length - 1; i++) {
//   if (countries[i].includes('land')) {
//     arrayHatesLand.push(countries[i].replace('land', ''))
//   } else {
//     arrayHatesLand.push(countries[i])
//   }
// }
// console.log('The new array whithout "land" is: \n', arrayHatesLand)

// 5

// let largestCountryName = ``
// let currentHighlength = 0
// let countriesWhithoutSpace = []

// for (i = 0; i < countries.length - 1; i++) {
//   if (countries[i].includes(' ')) {
//     countriesWhithoutSpace.push(countries[i].replace(/ /g, ''))
//   } else {
//     countriesWhithoutSpace.push(countries[i])
//   }
// }

// for (i = 0; i < countriesWhithoutSpace.length - 1; i++) {
//   if (countriesWhithoutSpace[i].length > currentHighlength) {
//     currentHighlength = countriesWhithoutSpace[i].length
//     largestCountryName = countriesWhithoutSpace[i]
//   }
// }
// console.log(largestCountryName)

// 6

// Cheking if the other question was right

// let arrayWhithLand = []
// let count = 0
// for (i = 0; i < countries.length - 1; i++) {
//   if (countries[i].includes('land')) {
//     arrayWhithLand.push(countries[i])
//   }
// }
// console.log(arrayWhithLand)

// let arrayWhitoutLand = []
// let count = 0
// for (i = 0; i < countries.length - 1; i++) {
//   if (countries[i].includes('land')) {
//     continue
//   } else {
//     arrayWhitoutLand.push(countries[i])
//   }
// }
// console.log(arrayWhitoutLand)
