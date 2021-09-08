import vueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(vueRouter)

const Index = () => import ('./views/Index')
const Blog = () => import ('./views/Blog')
const PostIndex = () => import ('./views/PostIndex')
const CreatePost = () => import ('./views/CreatePost')

const routes = [
    {
        path: "/",
        component: Index,
    },
    {
        path: "/blog",
        component: Blog,
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
