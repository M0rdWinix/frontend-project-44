import readlineSync from 'readline-sync'

const condition = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
}

const question = () => {
    let number = Math.floor(Math.random() * 10)
    let correctAnswer = "yes"
    if (number % 2 === 0) {
         correctAnswer = "yes"
    } else correctAnswer = "no"

    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ' );
    if (answer === correctAnswer) {
        console.log('Correct!')
    } else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet\'s try again ${}`)
}

export {condition, question}