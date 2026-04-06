import { quest } from './index.js'

export default (name) => {
  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 0; i < 3; i++) {
    let firstNumber = Math.floor(Math.random() * (100 - 0) + 0)
    let secondNumber = Math.floor(Math.random() * (100 - 0) + 0)

    const saveFNum = firstNumber
    const saveSNum = secondNumber

    let correctAnswer = firstNumber

    if (secondNumber !== 0) {
      while (secondNumber !== 0) {
        let save = secondNumber
        secondNumber = firstNumber % secondNumber
        firstNumber = save
      }
      correctAnswer = firstNumber
    }

    if (quest(`${saveFNum} ${saveSNum}`, String(correctAnswer), i, name) === false) {
      return
    }
  }
}
