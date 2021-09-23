<template>
    <div class="post uk-card uk-card-default">
        <div class="uk-card-header">
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">{{ post.title }}</h3>
                <p class="uk-text-meta uk-margin-remove-top">
                    <time datetime="2016-04-01T19:00">{{ post.date | formatDate }}</time>
                </p>
            </div>
        </div>
        <div class="uk-card-body">
            <p>{{ post.body.length >= 100 ? post.body.slice(0, 100) + ' ...' : post.body }}</p>
        </div>
        <div class="uk-card-footer">
            <router-link :to="'/post/' + post.id" class="uk-button uk-button-text">Read more</router-link>
            <span class="trash"
                  @click="$emit('remove-')"
                  uk-icon="trash"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        },
    }
}
</script>

<style scoped>
.post {
    display: block;
    margin: 10px 0;
}

.trash {
    float: right;
}
</style>
