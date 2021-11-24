import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index'
import About from '../views/About'
import Articles from '../views/Articles'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Index,
        meta: {
            title: 'Home',
            keepAlive: true,
            requiresAuth: false
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About Me',
            keepAlive: true,
            requiresAuth: false
        }
    },
    {
        path: '/articles',
        name: 'Articles',
        component: Articles,
        meta: {
            title: 'Articles',
            keepAlive: true,
            requiresAuth: false
        }
    },
    // {
    //     // 会匹配所有路径
    //     path: '/:pathMatch(.*)*',
    //     name: 'Windmill',
    //     component: () =>
    //         import ('../views/windmill.vue'),
    //     meta: {
    //         title: '哎呀页面不见了-' + name
    //     }
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
