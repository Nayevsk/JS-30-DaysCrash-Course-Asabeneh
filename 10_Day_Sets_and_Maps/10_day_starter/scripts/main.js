// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries3 = ['Finland', 'Sweden', 'Norway']

// const countriesAndLength = new Map()
// for (const country of countries3) {
//   countriesAndLength.set(country, country.length)
// }
// console.log(countriesAndLength)

// UNION OF A AND B

// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C)

// INTERCECTION OF A AND B

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter(num => B.has(num))
// let C = new Set(c)

// console.log(C)

// EXERCISE LEVEL 3

const mostSpokenLanguages = (list, n = 10) => {
  const allLanguages = []
  const setLanguages = new Set()
  const countArray = []
  list.forEach(country => {
    country.languages.forEach(language => {
      setLanguages.add(language)
      allLanguages.push(language)
    })
  })
  for (const l of setLanguages) {
    const filteredlang = allLanguages.filter(lan => lan === l)
    countArray.push({
      [l]: filteredlang.length
    })
  }
  countArray.forEach(
    element => (element.count = parseInt(Object.values(element).toString()))
  )
  countArray.sort((a, b) => (a.count < b.count ? 1 : -1))
  countArray.forEach(Element => delete Element.count)
  const slicedCountArray = countArray.slice(0, n)
  return slicedCountArray
}

console.log(mostSpokenLanguages(countries, 20))
