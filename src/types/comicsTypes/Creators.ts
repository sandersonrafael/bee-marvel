type Creators = {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
    role: string;
  }[];
  returned: number;
};

export default Creators;
