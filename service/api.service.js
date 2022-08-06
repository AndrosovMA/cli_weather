import https from 'https';
import {getKeyValue, TOKEN_DICTIONARY} from './storage.service.js';



const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);

  if (!token) {
    throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
  }

  const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  url.searchParams.append('q', city);
  url.searchParams.append('appid', token);
  url.searchParams.append('lang', 'ru');
  url.searchParams.append('units', 'metric');

  https.get(url, (respons) => {
    let res = '';
    respons.on('data', (chunk) => {
      res += chunk;
    });

    respons.on('end', () => {
      console.log(res);
    });

  })
};

export {getWeather}