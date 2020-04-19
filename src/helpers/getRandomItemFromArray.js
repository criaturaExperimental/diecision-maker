export function getRandomItemFromArray(array) {
  const index = getRandomInt(array.length);
  return array[index];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
