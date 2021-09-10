<template>
    <div>
        <h3>Categories</h3>
        <ul class="uk-list" v-for="category in getCategories" :key="category.id">
            <li>{{ category.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted() {
        //DB Connection
        this.$store.dispatch('ajaxCategoriesFromDB')
    },
    computed: {
        //get all Categories
        getCategories() {
            return this.$store.getters.getCategories
        }
    }
}
</script>

<style scoped>

</style>
