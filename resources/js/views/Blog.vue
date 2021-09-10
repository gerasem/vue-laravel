<template>
    <div>
        <Categories/>
        <h1>Blog</h1>
        <loader v-if="loading"></loader>
        <div v-else>
            <PostPreview v-for="post in getPosts" :key="post.id"
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
import Categories from "../components/Categories";

export default {
    components: {
        Loader,
        PostPreview,
        Categories
    },
    data: () => ({
        loading: true,
    }),
    mounted() {
        //DB Connection
        this.$store.dispatch('ajaxPostsFromDB')
        this.loading = false
    },
    computed: {
        //get all Posts
        getPosts() {
            return this.$store.getters.getPosts
        }
    },
}
</script>

<style scoped>

</style>
