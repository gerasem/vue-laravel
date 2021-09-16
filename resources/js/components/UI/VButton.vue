<template>
    <button @click.prevent="$emit('click-button')" class="uk-button">
        <span v-if="loading" class="loader" uk-spinner></span>
        <span v-else>
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'v-button',
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        test() {
            console.log('test')
        }
    }
}
</script>

<style scoped>

</style>
