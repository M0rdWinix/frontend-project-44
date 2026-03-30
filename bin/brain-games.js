#!/usr/bin/env node
import getName from '../src/cli.js'
import {condition, question} from '../bin/brain-even.js'

function app() {
  console.log('Welcome to the Brain Games!')

  getName()
  condition()
  question()
}

app()
