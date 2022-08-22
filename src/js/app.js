/* eslint-disable new-cap */
import GameSavingLoader from './class';
import json from './parser';

const gameSaving = new GameSavingLoader.load().then((saving) => {
  json(saving);
}).catch((error) => { console.error(error); });
console.log(gameSaving);

// saving объект класса GameSaving
