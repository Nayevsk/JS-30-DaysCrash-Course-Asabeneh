// EXERCISES LEVEL 1

// const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   {
//     product: 'banana',
//     price: 3
//   },
//   {
//     product: 'mango',
//     price: 6
//   },
//   {
//     product: 'potato',
//     price: ' '
//   },
//   {
//     product: 'avocado',
//     price: 8
//   },
//   {
//     product: 'coffee',
//     price: 10
//   },
//   {
//     product: 'tea',
//     price: ''
//   }
// ]

// EXERCISE LEVEL 2
//7

// const countriesGroups = []
// for (i = 97; i <= 122; i++) {
//   let letter = String.fromCharCode(i)
//   let currentCountriesArray = []
//   currentCountriesArray.push(
//     countries.filter(country => {
//       if (country.name.toLowerCase().slice(0, 1) == letter) {
//         currentCountriesArray.push(country.name)
//       }
//     })
//   )
//   countriesGroups.push(currentCountriesArray)
// }

// let biggestArraySize = 0
// countriesGroups.forEach((sameLetterCountriesArray, index) => {
//   if (sameLetterCountriesArray.length > biggestArraySize) {
//     biggestArraySize = sameLetterCountriesArray.length
//     mostRepeatedLetter = countriesGroups[index][0].slice(0, 1)
//   }
//   return biggestArraySize, mostRepeatedLetter
// })

// console.log(countriesGroups)
// console.log(biggestArraySize, mostRepeatedLetter)

// EXERCISES LEVEL 3

// 2

// const spokenLanguages = []
// countries.forEach(element => {
//   element.languages.forEach(language => {
//     spokenLanguages.push(language)
//   })
// })

// const sortedSpokenLanguages = spokenLanguages.sort()
// const languages = []
// let obj = {
//   country: '',
//   count: 0
// }
// for (i = 0; i < sortedSpokenLanguages.length; i++) {
//   if (sortedSpokenLanguages[i] === sortedSpokenLanguages[i + 1]) {
//     obj.country = sortedSpokenLanguages[i]
//     obj.count += 1
//   } else {
//     obj.country = sortedSpokenLanguages[i]
//     obj.count += 1
//     languages.push(obj)
//     obj = {
//       country: '',
//       count: 0
//     }
//   }
// }

// languages.sort((a, b) => {
//   if (a.count < b.count) return 1
//   if (a.count > b.count) return -1
// })

// console.log(languages.slice(0, 10))
// ------------ SOLVING USING SET ------------------

// const spokenLanguages = []
// countries.forEach(element => {
//   element.languages.forEach(language => {
//     spokenLanguages.push(language)
//   })
// })

// const spokenLanguagesSet = new Set(spokenLanguages)
// const counts = []
// const count = {}
// for (const l of spokenLanguagesSet) {
//   const filteredLanguages = spokenLanguages.filter(lan => lan === l)
//   counts.push({ lang: l, count: filteredLanguages.length })
// }

// const sortedArray = counts.sort((a, b) => {
//   if (a.count < b.count) return 1
//   if (a.count > b.count) return -1
// })

// console.log(sortedArray)

// 3

// const TenMostPopulatedCountries = (list, range = 10) => {
//   const countriePopulation = []
//   obj = {}
//   list.forEach(country => {
//     obj.name = country.name
//     obj.population = country.population
//     countriePopulation.push(obj)
//     obj = {}
//   })
//   countriePopulation.sort((a, b) => {
//     if (a.population < b.population) return 1
//     if (a.population > b.population) return -1
//   })
//   return countriePopulation.slice(0, 10)
// }

// console.log(TenMostPopulatedCountries(countries))
