import Url from './Url.ts';
import Image from './Image.ts';
import Info from './Info.ts';
import Item from './Item.ts';

type Event = {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  modified: string;
  start: string;
  end: string;
  thumbnail: Image;
  creators: Info;
  characters: Info;
  stories: Info;
  comics: Info;
  series: Info;
  next: Item;
  previous: Item;
};

export default Event;
