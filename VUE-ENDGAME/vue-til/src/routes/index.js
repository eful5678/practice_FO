import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


//라우딩 정보
const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},

	],
});

router.beforeEach((to, from, next) => {
	console.log(to);
	console.log(from);
	next();
})

export default router;