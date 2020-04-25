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

describe('Get a Random Item from an array ::getRandomItemFromArray::', () => {
  it('should return that item when single item', () => {
    expect(getRandomItemFromArray(singleItemArray)).toBe(singleItemArray[0]);
  });

  it('should return one random item with proper fields from array', () => {
    const selectedItem = getRandomItemFromArray(items);

    expect(selectedItem.id).toBeTruthy();
    expect(selectedItem.label).toBeTruthy();
  });
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
  it('should return the other item when the array has two items', () => {
    const itemProvided = doubleItemArray[1];
    const itemLeftToReturn = doubleItemArray[0];
    const itemRetrieved = getAnotherRandomItemFromArray(
      doubleItemArray,
      itemProvided
    );

    expect(itemRetrieved).toBe(itemLeftToReturn);
  });

  it('should return any other item but the provided item', () => {
    const itemProvided = items[1];
    const itemRetrieved = getAnotherRandomItemFromArray(items, itemProvided);

    expect(itemRetrieved).not.toBe(itemProvided);
  });
});
