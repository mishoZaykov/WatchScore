import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (movieId, username, text) => {
    const newComment = await request.post(baseUrl, {
        movieId,
        username,
        text,
    });

    return newComment;
}