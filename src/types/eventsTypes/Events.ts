import Event from './Event';

type Events = {
  count: number;
  limit: number;
  offset: number;
  results: Event[];
  total: number;
};

export default Events;
