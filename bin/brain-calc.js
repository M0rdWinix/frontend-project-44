#!/usr/bin/env node
import { getName } from '../src/cli.js'


function app() {
  console.log('Welcome to the Brain Games!')

  getName()
  console.log('What is the result of the expression?')
}

app()