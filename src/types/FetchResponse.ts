import Characters from './charactersTypes/Characters';
import Comics from './comicsTypes/Comics';

type FetchResponse = {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: Characters | Comics;
  etag: string;
  status: string;
};

export default FetchResponse;
