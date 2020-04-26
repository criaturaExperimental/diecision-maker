import {
  getRandomItemFromArray,
  removeItemFromArray,
  getAnotherRandomItemFromArray,
} from 'helpers/arrayOperators';

let items;
let singleItemArray;
let doubleItemArray;

beforeAll(() => {
  items = [
    {
      id: 'oi3',
      label: 'single',
    },
    {
      id: '01',
      label: 'uno',
    },
    {
      id: '02',
      label: 'dos',
    },
    {
      id: '0000',
      label: 'remove_me',
    },
  ];
  singleItemArray = [items[0]];
  doubleItemArray = [
    {
      id: '0',
      label: 'no',
    },
    {
      id: '1',
      label: 'yes',
    },
  ];
});

describe('Return an array without the item which id is provided ::removeItemFromArray::', () => {
  it('should return an empty array when array has a single item', () => {
    const finalArray = removeItemFromArray(
      singleItemArray,
      singleItemArray[0].id
    );

    expect(finalArray.length).toBe(0);
  });

  it('should return an array without the element to be removed', () => {
    const itemToIdBeExtracted = items[items.length - 1].id;
    const finalArray = removeItemFromArray(items, itemToIdBeExtracted);
    expect(finalArray[finalArray.length - 1]).not.toBe(itemToIdBeExtracted);
    expect(finalArray).toStrictEqual(items.slice(0, items.length - 1));
  });
});

describe('Return an item different of the item provided ::getAnotherRandomItemFromArray::', () => {
  it('should return the same item when the array is empty', () => {
    const itemRetrieved = getAnotherRandomItemFromArray([], '');

    expect(itemRetrieved).toStrictEqual({ id: '', label: '' });
  });

  it('should return the same item when the array has one item', () => {
    const itemIdProvided = singleItemArray[0].id;
    const itemLeftToReturn = singleItemArray[0];
    const itemRetrieved = getAnotherRandomItemFromArray(
      singleItemArray,
      itemIdProvided
    );

    expect(itemRetrieved).toBe(itemLeftToReturn);
  });

  it('should return the other item when the array has two items', () => {
    const itemIdProvided = doubleItemArray[0].id;
    const itemLeftToReturn = doubleItemArray[1];
    const itemRetrieved = getAnotherRandomItemFromArray(
      doubleItemArray,
      itemIdProvided
    );

    expect(itemRetrieved).toBe(itemLeftToReturn);
  });

  it('should return any other item but the provided item', () => {
    const itemProvided = items[1];
    const itemRetrieved = getAnotherRandomItemFromArray(items, itemProvided.id);

    expect(itemRetrieved).not.toBe(itemProvided);
  });
});
