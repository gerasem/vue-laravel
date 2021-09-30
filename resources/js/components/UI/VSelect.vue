<template>
    <select class="v-select uk-select" @change="changeOption">
        <option disabled value="">Choose Filter</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: "VSelect",
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('changeOption', event.target.value)
        }
    }
}
</script>

<style scoped>
.v-select {
    margin-bottom: 40px;
}
</style>
