import {getArgs} from './helpers/args.js'
import {printHelp} from './service/log.service.js'
import {saveKeyValue} from './service/storege.service.js'

// get arguments cli - process.argv
const initCLI = () => {
  const args = getArgs(process.argv)

  if (args.h) {
    printHelp();
  }
  if (args.s) {

  }
  if (args.t) {
    saveKeyValue('token', args.t);
  }
};

initCLI();
