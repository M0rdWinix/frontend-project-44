#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { condition, question } from '../src/functions.js'

function app() {
  console.log('Welcome to the Brain Games!')

    const name = getName()
    
  condition()
  question(name)
}

app()
