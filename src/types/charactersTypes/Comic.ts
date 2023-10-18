import Item from './Item';

type Comic = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export default Comic;
