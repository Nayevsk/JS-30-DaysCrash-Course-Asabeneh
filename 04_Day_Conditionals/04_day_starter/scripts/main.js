// this is your main.js script
// alert('Open the browser console whenever you work on JavaScript')

// EXERCISE LEVEL 1:

// 1.

// let userInput = prompt('Enter your age')

// if (userInput >= 18) {
//   console.log('You are old enough to drive')
// } else {
//   console.log(`You are left ${18 - userInput} years to drive`)
// }

// 3

// let a = 4
// let b = 3
// a > b ? console.log('a is grater than b') : console.log('b is grater than a')

// 4

// let a = prompt('Type a number to see if it is even or odd')
// let remainder = a % 2

// if (remainder == 0) {
//   console.log('The number is even')
// } else {
//   console.log('The number is odd')
// }

// EXERCISES LEVEL 2

// 1

// let grade = prompt('Enter student grade')
// switch (true) {
//   case grade >= 80 && grade <= 100:
//     console.log('A') // code
//     break
//   case grade >= 70 && grade <= 79:
//     console.log('B') // code
//     break
//   case grade >= 60 && grade <= 69:
//     console.log('C') // code
//     break
//   case grade >= 50 && grade <= 59:
//     console.log('D') // code
//     break
//   case grade >= 0 && grade <= 49:
//     console.log('F') // code
//     break
//   default:
//     console.log('You did not enter a valid grade')
// }

// 2

// let month = prompt('Enter current month to know the current season')

// switch (month) {
//   case `September`:
//   case `October`:
//   case `November`:
//     console.log('Its is Autumn')
//     break
//   case `December`:
//   case `January`:
//   case `February:`:
//     console.log('Its is Winter')
//     break
//   case `March`:
//   case `April`:
//   case `May`:
//     console.log('Its is Spring')
//     break
//   case `June`:
//   case `July`:
//   case `August`:
//     console.log('Its is Summer')
//     break
//   default:
//     console.log('You did not enter a valid month')
// }

// EXERCISE LEVEL 3

// 1 and 2

// let userInput = prompt('type the month to know the number of days it has')
// let leapYear = confirm(`Is this year a leap year?`)
// let month = userInput.toLowerCase()
// switch (month) {
//   case `january`:
//   case `march`:
//   case `may`:
//   case `july`:
//   case `agust`:
//   case `octuber`:
//   case `december`:
//     console.log(`${month} has 31 days.`)
//     break
//   case `february`:
//     if (leapYear == true) {
//       console.log(`${month} has 29 days.`)
//     } else {
//       console.log(`${month} has 28 days.`)
//     }
//     break
//   case `april`:
//   case `june`:
//   case `september`:
//   case `november`:
//     console.log(`${month} has 30 days.`)
//     break
//   default:
//     console.log('You did not enter a valid month')
// }
