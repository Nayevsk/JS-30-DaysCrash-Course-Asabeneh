// let txt =
//   'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'
// let regExp1 = /\d+/gi
// let regExp2 = /month|annual/gi
// const matchesValue = txt.match(regExp1)
// const matchesRateType = txt.match(regExp2)
// let total = 0
// for (i = 0; i < matchesRateType.length; i++) {
//   let actualValue = 0
//   if (matchesRateType[i] === 'month') {
//     actualValue = matchesValue[i] * 12
//     total += parseInt(actualValue)
//   } else {
//     actualValue = matchesValue[i]
//     total += parseInt(actualValue)
//   }
// }

// console.log(total)

// EXERCISE LEVEL 2

// let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

// const tenMostFrequentWords = (paragraph, n) => {
//   let regExp = /[,.\s]/gi
//   let languagesCountArray = []
//   let match = paragraph.split(regExp)
//   for (const l of new Set(match)) {
//     let countMatch = match.filter(word => word === l)
//     languagesCountArray.push({
//       word: l,
//       count: countMatch.length
//     })
//   }
//   languagesCountArray.sort((a, b) => (a.count > b.count ? -1 : 1))
//   return languagesCountArray.slice(0, n)
// }

// console.log(tenMostFrequentWords(paragraph, 10))

// EXERCISE LEVEL 3
