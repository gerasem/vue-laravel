<template>
    <div>
        <nav >
            <router-link v-for="link in links" :to="link.href">{{ link.name }}</router-link>
        </nav>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        name: "Main",
                        href: "/main",
                    },
                    {
                        name: "Catalog",
                        href: "/catalog",
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
