<template>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-center">
            <ul class="uk-navbar-nav">
                <!--                <li class="uk-active"><a href="">Menu 1</a></li>-->
                <li v-for="link in links">
                    <router-link :to="link.href">{{ link.name }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    name: "Main",
                    href: "/"
                },
                {
                    name: "Blog",
                    href: "/blog"
                },
                {
                    name: "Create Post",
                    href: "/create"
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
