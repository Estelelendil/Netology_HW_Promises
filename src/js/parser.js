/* eslint-disable no-unused-vars */
export default function json(data) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));// парсит в строку через 0,5 с
    }, 500);
  });
}
