import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/movies";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (movieId) => {
  const result = await request.get(`${baseUrl}/${movieId}`,);
  
  return result;
};

export const create = async (movieData) => {
  const result = await request.post(baseUrl, movieData);

  return result;
};

export const edit = async (movieId, movieData) => {
  const result = await request.put(`${baseUrl}/${movieId}`, movieData);

  return result
}

export const remove = async (movieId) => request.remove(`${baseUrl}/${movieId}`);
