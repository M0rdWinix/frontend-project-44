#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { evenGame } from '../src/games/index.js'

function app() {
  console.log('Welcome to the Brain Games!')
  evenGame(getName())
}

app()
