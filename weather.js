#!/usr/bin/env node
import {getArgs} from './helpers/args.js'

// get arguments cli - process.argv
const initCLI = () => {
  const args = getArgs(process.argv)
  console.log(args);

  if (args.h) {
    // Вывод help
  }
  if (args.s) {
    // сохранить город
  }
  if (args.t) {
    // сохранить токен
  }
};

initCLI();
