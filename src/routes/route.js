import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'rooms',
            component: () => import('../views/Rooms')
        },
        {
            path: '/room/:id',
            name: 'room',
            component: () => import('../views/CodeShare')
        },
        {
            path:'/login',
            component :  () => import('../views/Login')
        },
        {
            path:'/register',
            component: () => import('../views/Register')
        },
        {
            path:'/home',
            component: () => import('../views/Home')
        },
        {
            path:'/chat',
            component: () => import('../views/Chat')
        },
        {
            path:'/TeamRoom',
            component: () => import('../views/TeamRoom')
        },
        {
            path:'/CodeRoom',
            component: () => import('../views/CodeRoom')
        },
    ]
});

export {router}