import Comic from './Comic';

type Comics = {
  count: number;
  limit: number;
  offset: number;
  results: Comic[];
  total: number;
};

export default Comics;
