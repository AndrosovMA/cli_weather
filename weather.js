import {getArgs} from './helpers/args.js'
import {printError, printHelp, printSuccess} from './service/log.service.js';
import {saveKeyValue} from './service/storage.service.js'


const saveToken = async (token) => {
  try {
    await saveKeyValue('token', token)
    printSuccess('Токен сохранен')
  } catch (e) {
    printError(e.message)
  }
}


// get arguments cli - process.argv
const initCLI = () => {
  const args = getArgs(process.argv)

  if (args.h) {
    printHelp();
  }
  if (args.s) {

  }
  if (args.t) {
    return saveToken(args.t);
  }
};

initCLI();
