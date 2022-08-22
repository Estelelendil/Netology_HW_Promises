import read from './reader';

class GameSavingLoader {
  constructor() {
    this.buffer = null;
  }

  load() {
    this.buffer = read();// возвращает Промис от getBufferа с Таймаутом 1с

    return this.buffer;
  }
}
export default GameSavingLoader;
