#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { calculatorGame } from '../src/games/index.js'

function app() {
  console.log('Welcome to the Brain Games!')
  calculatorGame(getName())
}

app()
