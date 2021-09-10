import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: []
    },
    getters: {
        getCategories({categories}) {
            return categories
        }
    },
    actions: {
        ajaxCategoriesFromDB({commit}) {
            axios
                .get("api/category")
                .then(res => {
                    commit('getCategories', res.data.categories)
                })
                .catch(err => console.log('Error', err))
        }
    },
    mutations: {
        getCategories(state, data) {
            return state.categories = data
        }
    }
})
