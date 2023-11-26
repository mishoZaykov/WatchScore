import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (movieId) => {
    const query = new URLSearchParams({
        where: `movieId="${movieId}"`
    })

    const result = await request.get(`${baseUrl}`);

    // TODO: colletction service
    return Object.values(result).filter(comment => comment.movieId === movieId);
}

export const create = async (movieId, username, text) => {
    const newComment = await request.post(baseUrl, {
        movieId,
        username,
        text,
    });

    return newComment;
}

