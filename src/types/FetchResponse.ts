import Characters from './charactersTypes/Characters';
import Comics from './comicsTypes/Comics';
import Events from './eventsTypes/Events';

type FetchResponse = {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: Characters | Comics | Events;
  etag: string;
  status: string;
};

export default FetchResponse;
