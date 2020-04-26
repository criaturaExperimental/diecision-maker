const binary = [
  {
    id: '1',
    label: 'yes',
  },
  {
    id: '0',
    label: 'no',
  },
];

const die = [
  {
    id: '1',
    label: '1',
  },
  {
    id: '2',
    label: '2',
  },
  {
    id: '3',
    label: '3',
  },
  {
    id: '4',
    label: '4',
  },
  {
    id: '5',
    label: '5',
  },
  {
    id: '6',
    label: '6',
  },
];

const directions = [
  {
    id: '1',
    label: 'South',
  },
  {
    id: '2',
    label: 'West',
  },
  {
    id: '3',
    label: 'North',
  },
  {
    id: '4',
    label: 'East',
  },
];

export const menuPresets = [
  {
    label: 'Die',
    presetList: die,
  },
  {
    label: 'Yes or No',
    presetList: binary,
  },
  {
    label: 'Directions',
    presetList: directions,
  },
];
