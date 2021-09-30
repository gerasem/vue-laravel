<template>
    <div>
        <Categories/>
        <h1>Blog</h1>

        <VSelect
            v-model="selectedSort"
            :options="sortOptions"
            @changeOption="optionFromSelect"
        />

        <loader v-if="loading"></loader>
        <div v-else>
            <PostPreview v-for="post in sortPosts"
                         :key="post.id"
                         :post="post"
            />
        </div>
    </div>
</template>

<script>
import Loader from "../components/Loader"
import PostPreview from "../components/blog/PostPreview";
import Categories from "../components/Categories";
import VSelect from "../components/UI/VSelect";

export default {
    components: {
        VSelect,
        Loader,
        PostPreview,
        Categories
    },
    data: () => ({
        loading: true,
        selectedSort: 'title',
        sortOptions: [
            {value: "title", name: "Title"},
            {value: "body", name: "Body"},
            {value: "date", name: "Date"},
        ]
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
        },
        sortPosts: function () {
            return [...this.getPosts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
            })
        }
    },
    methods: {
        optionFromSelect(option) {
            this.selectedSort = option
        }
    },
    /*    watch: {
            selectedSort(newValue) {
                console.log(newValue)
            }
        }*/

}
</script>

<style scoped>

</style>
