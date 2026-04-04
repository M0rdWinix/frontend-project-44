#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { primeGame } from '../src/games/index.js'

function app() {
  console.log('Welcome to the Brain Games!')
  primeGame(getName())
}

app()
