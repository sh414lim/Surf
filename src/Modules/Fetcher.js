export const fetcher = (...args) =>
  axios.get(...args).then((res) => res.data());
