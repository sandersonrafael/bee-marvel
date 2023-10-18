import Comic from './Comic';
import Series from './Series';
import Thumbnail from './Thumbnail';
import Stories from './Stories';
import Events from './Events';
import Url from './Url';

type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comic[];
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
};

export default Character;
