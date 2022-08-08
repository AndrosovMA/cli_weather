import chalk from 'chalk'; //для раскрашивания log
import dedent from 'dedent-js' //для удаления лишних отступов

const printError = (error) => {
  console.log(`${chalk.bgRed('ERROR')} ${error}`);
};

const printSuccess = (message) => {
  console.log(` ${chalk.bgGreen('SUCCESS')} ${message}`);
};

const printHelp = () => {
  console.log(
      dedent`${chalk.bgCyan('HELP')}
      Без параметров - вывод погоды
      -s [SITY] для установки города
      -h для вывода помощи
      -t [API_KEY] для сохранения токена
      `
  );
};

export {printError, printSuccess, printHelp};