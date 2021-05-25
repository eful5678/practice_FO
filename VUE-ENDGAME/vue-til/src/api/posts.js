import { posts } from './index';

// 학습 노트 조작과 관려된 CRUD API 함수 파일

// 학습노트 데이터 조회 API
function fetchPosts() {
    return posts.get('/');
}

// 학습노트 데이터 생성
function createPost(postData) {
    return posts.post('/', postData);
}

export { fetchPosts, createPost };