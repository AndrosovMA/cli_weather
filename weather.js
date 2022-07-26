#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp} from './service/log.service.js'

// get arguments cli - process.argv
const initCLI = () => {
  const args = getArgs(process.argv)

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // сохранить город
  }
  if (args.t) {
    // сохранить токен
  }
};

initCLI();
