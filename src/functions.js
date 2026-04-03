import readlineSync from 'readline-sync'

const question = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for (let i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * (100 - 1) + 1)
        let correctAnswer = 'yes'
        if (number % 2 === 0) {
            correctAnswer = 'yes'
        }
        else correctAnswer = 'no'

        console.log(`Question: ${number}`)
        const answer = readlineSync.question('Your answer: ')
        if (answer === correctAnswer) {
            console.log('Correct!')
        }
        else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet\'s try again, ${name}`)
        if (i === 2) { console.log(`Congratulations, ${name}`) }
    }
}

const calculate = (name) => {
    console.log('What is the result of the expression?')

    let operations = ['+', '-', '*']
    let correctAnswer

    for (let i = 0; i < 3; i++) {
        let firstNumber = Math.floor(Math.random() * (100 - 1) + 1)
        let secondNumber = Math.floor(Math.random() * (100 - 1) + 1)

        let randomOperations = operations[Math.floor(Math.random() * operations.length)]

        if (randomOperations === '+') {
            correctAnswer = correctAnswer = firstNumber + secondNumber
        } else if (randomOperations === '-') {
            correctAnswer = correctAnswer = firstNumber - secondNumber
        } else if (randomOperations === '*') {
            correctAnswer = correctAnswer = firstNumber * secondNumber
        }

        console.log(`Question: ${firstNumber} ${randomOperations} ${secondNumber}`)
        const answer = readlineSync.question('Your answer: ')
        if (Number(answer) === correctAnswer) {
            console.log('Correct!')
        }
        else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet\'s try again, ${name}`)
        if (i === 2) { console.log(`Congratulations, ${name}`) }
    }
}

const gcd = (name) => {
    console.log('Find the greatest common divisor of given numbers.')

    let correctAnswer

    for (let i = 0; i < 3; i++) {
        let firstNumber = Math.floor(Math.random() * (100 - 0) + 0)
        let secondNumber = Math.floor(Math.random() * (100 - 0) + 0)

        console.log(`Question: ${firstNumber} ${secondNumber}`)

        if (secondNumber === 0) {
            correctAnswer = firstNumber
        } else while (secondNumber !== 0) {
            let save = secondNumber
            secondNumber = firstNumber % secondNumber
            firstNumber = save
        } correctAnswer = firstNumber

        const answer = readlineSync.question('Your answer: ')
        if (Number(answer) === correctAnswer) {
            console.log('Correct!')
        }
        else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet\'s try again, ${name}`)
        if (i === 2) { console.log(`Congratulations, ${name}`) }
    }
}

const progression = (name) => {
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
        /* console.log(`правильный ответ = ${correctAnswer}`) */
        arr[hiddenItem] = '..'

        console.log(`Question: ${arr.join(' ')}`)
        const answer = readlineSync.question(`Your answer: `)
        if (Number(answer) === correctAnswer) {
            console.log('Correct!')
        }
        else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet\'s try again, ${name}`)
        if (i === 2) { console.log(`Congratulations, ${name}`) }
    }
    

}

const prime = () => {
    let number = Math.floor(Math.random() * (101 - 0) + 0)
    let correctAnswer
    if (number < 2) {
        correctAnswer = 'no'
    } else if (number === 2) {
        correctAnswer = 'yes'
    } else if (number % 2 === 0) {
        correctAnswer = 'no'
    } 
}
export { question, calculate, gcd, progression, prime }