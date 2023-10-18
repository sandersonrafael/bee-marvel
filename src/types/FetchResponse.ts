import Characters from './charactersTypes/Characters';

type FetchResponse = {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: Characters;
  etag: string;
  status: string;
};

export default FetchResponse;
