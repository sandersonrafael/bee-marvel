import Item from './Item';

type Events = {
  available: 1;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export default Events;
