import readlineSync from 'readline-sync'

export default () => {
  const mainName = readlineSync.question('May I have your name? ')

  console.log(`Hello, ${mainName}!`)
}