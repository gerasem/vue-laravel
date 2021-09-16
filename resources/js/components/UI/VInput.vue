<template>
    <div class="uk-margin">
        <input :value="value" @input="" class="uk-input" type="text" placeholder="Title">
    </div>
</template>

<script>
export default {
    name: "v-input",
    props: {
        value: [String, Number]
    }
}
</script>

<style scoped>

</style>
