import {homedir} from 'os'
import {join, basename, dirname, extname, relative, isAbsolute, resolve, sep} from 'path'
import {promises} from 'fs'

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = (key, value) => {
  const data = {}

  promises.writeFile(filePath, JSON.stringify(data));
}

export {saveKeyValue}