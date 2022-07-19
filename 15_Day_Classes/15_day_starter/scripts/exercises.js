// EXERCISE LEVEL 1

// class Animal {
//   constructor(name, age, color, legs) {
//     this.name = name
//     this.age = age
//     this.color = color
//     this.legs = legs
//   }
//   getNumberOfLegs() {
//     let numberOfLegs = this.legs
//     return numberOfLegs
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, color, legs) {
//     super(name, age, color, legs)
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, color, legs) {
//     super(name, age, color, legs)
//   }

//   getNumberOfLegs() {
//     let numberOfLegs = this.legs
//     return `${this.name} has ${numberOfLegs} legs`
//   }
// }

// const Cat1 = new Cat('Meredith', '2 months', 'gray', 3)
// console.log(Cat1.getNumberOfLegs())

// const animal1 = new Animal('Ceasar', '15 years', 'lack', 2)
// console.log(animal1.getNumberOfLegs())

// EXERCISES LEVEL 3
// missing incomes and expenses

class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstname = firstName
    this.lastName = lastName
    this.incomes = incomes
    this.expenses = expenses
  }

  totalIncome() {}
  totalExpense() {}
  accountInfo() {}
  addIncome() {}
  addExpense() {}
  accountBalance() {}
}
