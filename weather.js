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

const getForecast = async () => {
  try {
    const weather =  await getWeather('moscow');
  } catch (e) {
    if (e?.response?.status === 404) {
      printError('Неверно указан город');
    } else if (e?.response?.status === 401) {
        printError('Неверно указан токен');
    } else {
      printError(e.message);
    }
  }
}

const initCLI = () => {
  const args = getArgs(process.argv) //get arguments []

  if (args.h) {
    printHelp();
  }

  if (args.s) {

  }

  if (args.t) {
    return saveToken(args.t);
  }

  getForecast()
};

initCLI();



