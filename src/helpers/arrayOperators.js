function getRandomItemFromArray(array) {
  const index = getRandomInt(array.length);
  return array[index];
}

export function getAnotherRandomItemFromArray(array, previousItem) {
  return getRandomItemFromArray(removeItemFromArray(array, previousItem));
}

export function removeItemFromArray(array, itemIdToRemove) {
  const indexItemToRemove = array.findIndex(
    (item) => item.id === itemIdToRemove
  );
  return [
    ...array.slice(0, indexItemToRemove),
    ...array.slice(indexItemToRemove + 1),
  ];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
