import readlineSync from 'readline-sync'

export default (name) => {
  console.log('What number is missing in the progression?')

  for (let i = 0; i < 3; i++) {
    let start = Math.floor(Math.random() * 11)
    let index = Math.floor(Math.random() * (6 - 1) + 1)
    let step = Math.floor(Math.random() * (6 - 1) + 1)
    let length = Math.floor(Math.random() * (11 - 5) + 5)
    let hiddenItem = Math.floor(Math.random() * (length - 0) + 0)

    const arr = []

    for (let i = 0; i < length; i++) {
      let currentElement = start + index * step
      arr.push(currentElement)
      index += step
    }

    let correctAnswer = arr[hiddenItem]
    arr[hiddenItem] = '..'

    console.log(`Question: ${arr.join(' ')}`)
    const answer = readlineSync.question(`Your answer: `)
    if (Number(answer) === correctAnswer) {
      console.log('Correct!')
    }
    else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}`)
    if (i === 2) { console.log(`Congratulations, ${name}!`) }
  }
}