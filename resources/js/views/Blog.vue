<template>
    <div>
        <h1>Blog</h1>
        <loader v-if="loading"></loader>
        <div v-else>
            <div class="post uk-card uk-card-default uk-card-body uk-width-1-2@m" v-for="post in posts">
                <h3 class="uk-card-title">{{ post.title }}</h3>
                <p class="uk-text-meta uk-margin-remove-top">
                    <time>{{ post.created_at }}</time>
                </p>
                <p>{{ post.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from "../components/Loader"
import axios from "axios"

export default {
    components: {
        Loader
    },
    data: () => ({
        loading: true,
        posts: []
    }),
    mounted() {
        this.loadPosts()
    },
    methods: {
        loadPosts() {
            axios.get('/api/posts')
                .then(response => {
                    this.posts = response.data
                    setTimeout(() => {
                        this.loading = false
                    }, 500)
                })
        }
    }
}
</script>

<style scoped>
.post {
    margin: 10px 0;
}
</style>
