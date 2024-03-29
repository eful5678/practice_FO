import axios from 'axios';

import { setInterceptors } from './common/interceptors';

// GET - posts
// POST - posts
// PUT - post{id}
// DELETE - post{id}

function createInstance() {
    return axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    })
}

// Axios 초기화
function createInstanceWithAuth(url) {
    const instance = axios.create({
        baseURL: `${process.env.VUE_APP_API_URL}${url}`,

    });

    return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');