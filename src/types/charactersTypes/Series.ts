import Item from './Item';

type Series = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export default Series;
