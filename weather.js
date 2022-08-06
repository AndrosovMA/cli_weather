// API KEY   =    ad4e7a534c717944371586c7ca4e4877
import {getArgs} from './helpers/args.js'
import {printError, printHelp, printSuccess} from './service/log.service.js';
import {saveKeyValue} from './service/storage.service.js'
import {TOKEN_DICTIONARY} from './service/storage.service.js';
import {getWeather} from './service/api.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
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

  getWeather('moscow')
};

initCLI();



