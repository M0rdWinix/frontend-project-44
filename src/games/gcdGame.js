import readlineSync from 'readline-sync'

export default (name) => {
  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 0; i < 3; i++) {
    let firstNumber = Math.floor(Math.random() * (100 - 0) + 0)
    let secondNumber = Math.floor(Math.random() * (100 - 0) + 0)

    console.log(`Question: ${firstNumber} ${secondNumber}`)

    let correctAnswer = firstNumber

    if (secondNumber !== 0) {
      while (secondNumber !== 0) {
        let save = secondNumber
        secondNumber = firstNumber % secondNumber
        firstNumber = save
      }
      correctAnswer = firstNumber
    }

    const answer = readlineSync.question('Your answer: ')
    if (Number(answer) === correctAnswer) {
      console.log('Correct!')
    }
    else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
    if (i === 2) {
      console.log(`Congratulations, ${name}!`)
    }
  }
}
