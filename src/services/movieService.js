import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/movies";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return Object.values(result);
};

export const create = async (movieData) => {
  const result = await request.post(baseUrl, movieData);

  return result;
};