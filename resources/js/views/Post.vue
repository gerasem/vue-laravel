<template>
    <div>
        <Loader v-if="loading"/>
        <div v-else-if="!loading && !notFound">
            <h1>{{ post.title }}
                <span class="uk-badge">{{ post.created_at | formatDate }}</span>
            </h1>
            <p class="uk-text-lead">
                {{ post.body }}
            </p>
        </div>
        <div v-if="notFound">
            <div class="uk-alert-danger" uk-alert>
                <h3>Error 404</h3>
                <p>Post not found</p>
            </div>
        </div>

    </div>
</template>

<script>
import Loader from "../components/Loader";
import axios from "axios"

export default {
    components: {
        Loader
    },
    data: () => ({
        loading: true,
        post: [],
        notFound: false
    }),
    mounted() {
        this.loadPost(this.$route.params.id)
    },
    methods: {
        loadPost(id) {
            axios.get('/api/posts/' + id)
                .then(response => {
                    this.post = response.data
                    this.loading = false
                })
                .catch(error => {
                    this.notFound = true
                    this.loading = false
                })
        }
    }
}
</script>

<style scoped>

</style>
