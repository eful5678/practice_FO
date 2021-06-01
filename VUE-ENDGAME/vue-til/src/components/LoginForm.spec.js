// import { testMatch } from '../../jest.config';
// import { sum } from './math';

// sum(10, 20); // 30

// describe('math.js', () => {
//     test('10 + 20 = 30', () => {
//         const result = sum(10, 20);
//         expect(result).not.toBe(30); // 기대되는 값의 예상
//     });
// })

import { shallowMount } from '@vue/test-utils'
import { testMatch } from '../../jest.config';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

// describe('LoginForm.vue', () => {
//     test('should render', () => {
//         // const instance = new Vue(LoginForm).$mount();
//         const wrapper = shallowMount(LoginForm);

//         expect(wrapper.vm.username).toBe('d');
//     })
// })

// describe('LoginForm.vue', () => {
//     test('ID는 이메일 형식이어야 한다.', () => {
//         const wrapper = shallowMount(LoginForm, {
//             data() {
//                 return {
//                     username: 'test@abc.com',
//                 }
//             }
//         });
//         const idInput = wrapper.find('#username');
//         // console.log(idInput.html());
//         console.log('input box value : ' + idInput.element.value);
//         console.log(wrapper.vm.isUsernameValid);

//     })
// })

describe('LoginForm.vue', () => {
    test('ID가 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: 'test',
                }
            }
        })
        const warningText = wrapper.find('.warning');
        console.log(warningText.html());
        expect(warningText.exists()).toBeTruthy();
    })

    test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: 'test',
                    password: '',
                }
            }
        })
        const button = wrapper.find('button');
        // button.element.disabled
        expect(button.element.disabled).toBeTruthy();
    })
})