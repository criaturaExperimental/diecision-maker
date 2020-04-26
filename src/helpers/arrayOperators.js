function getRandomItemFromArray(array) {
  const index = getRandomInt(array.length);
  return array[index];
}

export function getAnotherRandomItemFromArray(array, previousItemId) {
  const isOneItemArray = array.length === 1;
  const isEmptyArray = array.length === 0;
  if (isEmptyArray) {
    return { id: '', label: '' };
  }
  if (isOneItemArray) {
    return array[0];
  } else {
    return getRandomItemFromArray(removeItemFromArray(array, previousItemId));
  }
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
