// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Test

// const sumArray = (...arr) => {
//   let sum = 0
//   for (const numbers of arr) {
//     sum += numbers
//   }
//   return sum
// }
// console.log(sumArray(1, 2, 3, 4))

//  EXERCISES : LEVEL 3

// Exercise 1: ID generator

// const creatingArray = function () {
//   let simbols = []
//   for (let i = 0; i <= 90; i++) {
//     let keys = 32 + i
//     if (
//       (keys >= 65 && keys <= 90) ||
//       (keys >= 97 && keys <= 122) ||
//       (keys >= 48 && keys <= 57)
//     ) {
//       simbols.push(`${String.fromCharCode(keys)}`)
//     }
//   }
//   return simbols
// }

// const arrayToStr = array => {
//   let str = ''
//   for (const i of array) {
//     str += i
//   }
//   return str
// }

// const userIdGeneratedByUser = (numOfCharacters = 10, numOfIds = 10) => {
//   const arr = creatingArray()
//   for (num = 1; num <= numOfIds; num++) {
//     let newIdArray = []
//     for (i = 1; i <= numOfCharacters; i++) {
//       let randomIndex = Math.floor(Math.random() * arr.length)
//       newIdArray.push(arr[randomIndex])
//     }
//     newidStr = arrayToStr(newIdArray)
//     console.log(newidStr, '\n')
//   }
// }

// userIdGeneratedByUser()

// Exercise 2

const sevenDifferentNumbers = function () {
  let arrZeroToNine = [...Array(10).keys()]
  let arrDifferentNumb = []
  for (i = 1; arrDifferentNumb.length <= 6; i++) {
    let randNum = Math.floor(Math.random() * arrZeroToNine.length)
    let randomPick = arrZeroToNine[randNum]
    if (arrDifferentNumb.includes(randomPick)) {
      continue
    } else {
      arrDifferentNumb.push(randomPick)
    }
  }
  arrDifferentNumb.sort()
  return arrDifferentNumb
}

console.log(sevenDifferentNumbers())
