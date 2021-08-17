import vueRouter from "vue-router"
import Vue from "vue"

Vue.use(vueRouter);

import Index from "./views/Index"
import Catalog from "./views/Catalog"

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/main",
        component: Index
    },
    {
        path: "/catalog",
        component: Catalog
    },
];

export default new vueRouter({
    mode: 'history',
    routes
})
