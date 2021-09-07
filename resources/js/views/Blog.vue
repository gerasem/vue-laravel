<template>
    <div>
        <h1>Blog</h1>
        <loader v-if="loading"></loader>
        <div style="display: flex; flex-wrap: wrap;" v-else>
            <post v-for="post in posts"
                  :title="post.title"
                  :body="post.body"
                  :date="post.created_at"
            />
        </div>
    </div>
</template>

<script>
import Loader from "../components/Loader"
import Post from "../components/blog/Post";
import axios from "axios"

export default {
    components: {
        Loader,
        Post
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

</style>
