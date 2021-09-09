import vueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(vueRouter)

import Index from './views/Index'
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
    }
]

export default new vueRouter( {
    mode: "history",
    routes
})
