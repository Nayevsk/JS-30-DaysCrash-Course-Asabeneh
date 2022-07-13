//EXERCISES : LEVEL 1

// 1-6

// const dog = {
//   name: 'Charcoal',
//   legs: 4,
//   color: 'Black',
//   bark: function () {
//     return `woof woof`
//   }
// }
// dog.breed = 'unknown'
// dog.getDogInfo = function () {
//   return `${dog.name}, ${dog.legs}, ${dog.color}, ${dog.breed}, ${dog.bark()}`
// }

// console.log(dog.getDogInfo())

// EXERCISES LEVEL 2

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'Redux',
//       'MongoDB',
//       'Express',
//       'React',
//       'Node'
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'MongoDB',
//       'Express',
//       'React',
//       'Node'
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }

// const mostSkills = () => {
//   let mostSkills = 0
//   let userWithMostSkills = ''
//   for (i = 0; i <= Object.keys(users).length - 1; i++) {
//     firstLayerKeys = Object.keys(users)[i]
//     if (users[firstLayerKeys].skills.length > mostSkills) {
//       mostSkills = users[firstLayerKeys].skills.length
//       userWithMostSkills = firstLayerKeys
//     }
//   }
//   return `The user with most skill is: ${userWithMostSkills}, with ${mostSkills} different skills`
// }

// const loggedInUsers = () => {
//   let loggedCount = 0
//   for (i = 0; i <= Object.keys(users).length - 1; i++) {
//     names = Object.keys(users)[i]
//     if (users[names].isLoggedIn == true) {
//       loggedCount += 1
//     }
//   }
//   return `The number of clients that are logged are: ${loggedCount}`
// }

// const greaterThan50 = () => {
//   let usersGreaterThan50 = []
//   for (i = 0; i <= Object.keys(users).length - 1; i++) {
//     names = Object.keys(users)[i]
//     if (users[names].points >= 50) {
//       usersGreaterThan50.push(names)
//     }
//   }
//   return `The number of users that has 50 or more points are: ${usersGreaterThan50}`
// }

// const mernDev = () => {
//   let mernDevnames = []
//   for (i = 0; i <= Object.keys(users).length - 1; i++) {
//     names = Object.keys(users)[i]
//     if (users[names].skills.includes('MongoDB')) {
//       mernDevnames.push(names)
//     }
//   }
//   return mernDevnames
// }

// const modifyButKeep = () => {
//   const newUsersObj = Object.assign({}, users)
//   newUsersObj.Lucas = ''
//   return Object.keys(newUsersObj)
// }

// const gettingAllKeys = () => {
//   let keys = []
//   for (i = 0; i <= Object.keys(users).length - 1; i++) {
//     firstLayerKeys = Object.keys(users)[i]
//     keys.push(firstLayerKeys)
//     for (y = 0; y <= Object.keys(users[firstLayerKeys]).length - 1; y++) {
//       secondLayerKeys = Object.keys(users[firstLayerKeys])[y]
//       keys.push(secondLayerKeys)
//     }
//   }
//   return keys
// }

// console.log(gettingAllKeys())
// console.log(modifyButKeep())
// console.log(mostSkills())
// console.log(loggedInUsers())
// console.log(greaterThan50())
// console.log(mernDev())

// EXERCISES LEVEL 3

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
  }
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      {
        userId: 'fg12cy',
        rate: 5
      },
      {
        userId: 'zwf8md',
        rate: 4.5
      }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [
      {
        userId: 'fg12cy',
        rate: 5
      }
    ],
    likes: ['fg12cy']
  }
]

const signUp = () => {
  let userName = prompt('Enter your Name to sign up')
  let userEmail = prompt('Enter your email to sign up')
  let passWord = prompt('Enter your password to sign up')
  let timeOfCreation = new Date()
  let allUsers = []
  for (i = 0; i <= users.length - 1; i++) {
    allUsers.push(users[i].username)
  }
  if (allUsers.includes(userName)) {
    console.log('The user name already exists.')
  } else {
    users.push({
      username: userName,
      email: userEmail,
      password: passWord,
      createdAt: timeOfCreation,
      isLoggedIn: false
    })
    console.log(users)
  }
  return
}

signUp()
