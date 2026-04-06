import { quest } from './index.js'

export default (name) => {
  console.log('What is the result of the expression?')

  let operations = ['+', '-', '*']
  let correctAnswer

  for (let i = 0; i < 3; i++) {
    let firstNumber = Math.floor(Math.random() * (100 - 1) + 1)
    let secondNumber = Math.floor(Math.random() * (100 - 1) + 1)

    let randomOperations = operations[Math.floor(Math.random() * operations.length)]

    if (randomOperations === '+') {
      correctAnswer = firstNumber + secondNumber
    }
    else if (randomOperations === '-') {
      correctAnswer = firstNumber - secondNumber
    }
    else if (randomOperations === '*') {
      correctAnswer = firstNumber * secondNumber
    }

    if (quest(`${firstNumber} ${randomOperations} ${secondNumber}`, String(correctAnswer), i, name) === false) {
      return
    }
  }
}
