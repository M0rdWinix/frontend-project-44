export { default as evenGame } from './evenGame.js'

export { default as calculatorGame } from './calculatorGame.js'

export { default as gcdGame } from './gcdGame.js'

export { default as progressionGame } from './progressionGame.js'

export { default as primeGame } from './primeGame.js'

const quest = (question) => {
      console.log(`Question: `)
      const answer = readlineSync.question('Your answer: ')
      if (Number(answer) === correctAnswer) {
        console.log('Correct!')
      }
      else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
      if (i === 2) {
        console.log(`Congratulations, ${name}!`)
      }
    }
export { quest }