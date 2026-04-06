import { quest } from './index.js'

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i++) {
    let number = Math.floor(Math.random() * (100 - 1) + 1)
    let correctAnswer = 'yes'
    if (number % 2 !== 0) {
      correctAnswer = 'no'
    }
    if (quest(number, correctAnswer, i, name) === false) {
      return
    }
  }
}
