type Stories = {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
    type: string;
  }[];
  returned: number;
};

export default Stories;
