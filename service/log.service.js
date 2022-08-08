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
      -c [CITY] для установки города
      -h для вывода помощи
      -t [API_KEY] для сохранения токена
      `
  );
};

const printWeather = (res, icon) => {
  console.log(
      dedent`${chalk.bgYellow('WEATHER')} Погода в городе ${res.name}
      ${icon} ${res.weather[0].description}
      Температура: ${res.main.temp} ощущается как ${res.main.feels_like}
      Влажность: ${res.main.humidity}%
      Скорость ветра: ${res.wind.speed}`
  );
}

export {printError, printSuccess, printHelp, printWeather};