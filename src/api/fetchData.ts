const fetchData = async (urlPath: string) => {
  const endpoint = import.meta.env.VITE_API_ENDPOINT;
  const apiKey = import.meta.env.VITE_API_PUBLIC_KEY;
  const arrayLength = 100;

  const res = await fetch(`${endpoint}${urlPath}?apikey=${apiKey}&limit=${arrayLength}`);
  const resJson = await res.json();
  return resJson;
};

export default fetchData;
