<template>
    <div class="post uk-card uk-card-default uk-width-1-2@m">
        <div class="uk-card-header">
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">{{ title }}</h3>
                <p class="uk-text-meta uk-margin-remove-top">
                    <time datetime="2016-04-01T19:00">{{ date }}</time>
                </p>
            </div>
        </div>
        <div class="uk-card-body">
            <p>{{ body }}</p>
        </div>
        <div class="uk-card-footer">
            <router-link :to="'/post/' + id" class="uk-button uk-button-text">Read more</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'NULL'
        },
        body: {
            type: String,
            default: 'NULL'
        },
        date: {
            type: String,
            default: 'NULL'
        },
        id: {
            type: Number,
            default: 1
        },
    }
}
</script>

<style scoped>

</style>
