import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: []
    },
    getters: {
        getCategories(state) {
            return state.categories
        }
    },
    actions: {
        ajaxCategoriesFromDB(context) {
            axios
                .get("api/category")
                .then(res => {
                    console.log(res.data.categories)
                })
                .catch(err => console.log('Error', err))
        }
    }
})
