import { instance } from './index'

// login, signin
// 회원가입 API

function registerUser(userData) {
    // const url = 'http://localhost:3000/signup';
    // return axios.post(url, userData);

    return instance.post('signup', userData);

}

// 로그인 API
function loginUser(userData) {
    return instance.post('login', userData);
}

export {
    registerUser,
    loginUser
};