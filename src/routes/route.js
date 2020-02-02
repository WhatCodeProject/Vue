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
            component :  () => import('../views/BasicForUser')
        }
    ]
});

export {router}