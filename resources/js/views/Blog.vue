<template>
    <div>
        <h1>Blog</h1>
        <loader v-if="loading"></loader>
        <div v-else>
            <PostPreview v-for="post in posts" :key="post.id"
                         :title="post.title"
                         :body="post.body"
                         :date="post.created_at"
                         :id="post.id"
            />
        </div>
    </div>
</template>

<script>
import Loader from "../components/Loader"
import PostPreview from "../components/blog/PostPreview";
import axios from "axios"

export default {
    components: {
        Loader,
        PostPreview
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
                    this.loading = false
                })
        }
    }
}
</script>

<style scoped>

</style>
