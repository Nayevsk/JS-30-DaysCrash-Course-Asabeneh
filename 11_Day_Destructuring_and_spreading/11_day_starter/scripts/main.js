// const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }
// const users = [
//   {
//     name: 'Brook',
//     scores: 75,
//     skills: ['HTM', 'CSS', 'JS'],
//     age: 16
//   },
//   {
//     name: 'Alex',
//     scores: 80,
//     skills: ['HTM', 'CSS', 'JS'],
//     age: 18
//   },
//   {
//     name: 'David',
//     scores: 75,
//     skills: ['HTM', 'CSS'],
//     age: 22
//   },
//   {
//     name: 'John',
//     scores: 85,
//     skills: ['HTML'],
//     age: 25
//   },
//   {
//     name: 'Sara',
//     scores: 95,
//     skills: ['HTM', 'CSS', 'JS'],
//     age: 26
//   },
//   {
//     name: 'Martha',
//     scores: 80,
//     skills: ['HTM', 'CSS', 'JS'],
//     age: 18
//   },
//   {
//     name: 'Thomas',
//     scores: 90,
//     skills: ['HTM', 'CSS', 'JS'],
//     age: 20
//   }
// ]

// EXERCISE LEVEL 1

// let { name, scores, skills, age } = users[0]
// console.log(name, scores, skills, age)

// EXERCISE LEVEL 2

// let peropleWithTwoOrLessSkills = []
// for (const i of users) {
//   let { name, scores, skills, age } = i
//   if (skills.length < 2) {
//     console.log(name)
//   }
// }

// EXERCISE LEVEL 3

//.1
// countries.forEach(element => {
//   let { name, capital, languages, population, currency } = element
//   console.log(name, capital, languages, population, currency)
// })

//.2
// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// let [name, skills, scores] = student
// console.log(
//   name,
//   skills,
//   scores[skills.indexOf(`JS`)],
//   scores[skills.indexOf('React')]
// )

//.3
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = students => {
  studentsArray = []
  students.forEach(student => {
    let [name, skills, scores] = student
    let obj = { name: name, skills: skills, scores: scores }
    studentsArray.push(obj)
  })
  return studentsArray
}

console.log(convertArrayToObject(students))
