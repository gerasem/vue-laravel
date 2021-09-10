import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
        posts: []
    },
    getters: {
        getCategories({categories}) {
            return categories
        },
        getPosts({posts}) {
            return posts
        },
    },
    actions: {
        ajaxCategoriesFromDB({commit}) {
            axios.get("api/category")
                .then(response => {
                    commit('getCategoriesFromStore', response.data.categories)
                })
                .catch(err => console.log('Error', err))
        },
        ajaxPostsFromDB({commit}) {
            axios.get('/api/posts')
                .then(response => {
                    commit('getPostsFromStore', response.data)
                })
                .catch(err => console.log('Error', err))
        }
    },
    mutations: {
        getCategoriesFromStore(state, data) {
            return state.categories = data
        },
        getPostsFromStore(state, data) {
            return state.posts = data
        }
    }
})
