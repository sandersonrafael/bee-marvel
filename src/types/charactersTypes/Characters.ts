import Character from './Character';

type Characters = {
  count: number;
  limit: number;
  offset: number;
  results: Character[];
  total: number;
};

export default Characters;
