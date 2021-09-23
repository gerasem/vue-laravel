import vueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(vueRouter)

import Index from './views/Index'
import Test from "./views/Test";
const PostIndex = () => import ('./views/PostIndex')
const CreatePost = () => import ('./views/CreatePost')

const routes = [
    {
        path: "/",
        component: Index,
    },
    {
        path: "/blog",
        component: () => import('./views/Blog'),
    },
    {
        path: "/post/:id",
        component: PostIndex
    },
    {
        path: "/create",
        component: CreatePost
    },
    {
        path: "/test",
        component: Test
    },
]

export default new vueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})
