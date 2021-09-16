<template>
    <div>
        <form>
            <fieldset class="uk-fieldset">
                <legend class="uk-legend">Create Post</legend>
                <div class="uk-alert-danger" uk-alert v-if="error">
                    <p>Error</p>
                </div>

                <div class="uk-margin">
                    <input v-model="form.title" class="uk-input" type="text" placeholder="Title">
                </div>

                <div class="uk-margin">
                    <textarea v-model="form.body" class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
                </div>
                <p uk-margin>
                    <v-button
                        :loading="loading"
                        @click-button="store"
                        class="uk-button-primary"
                    >
                        Create Post
                    </v-button>
                </p>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {
            title: "",
            body: "",
        },
        loading: false,
        error: false
    }),
    methods: {
        store() {
            this.loading = true
            axios.post('/api/posts', this.form, {
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(response => {
                    if (response.data.status) {
                        this.$router.push('/post/' + response.data.post.id)
                    } else {
                        this.loading = false
                        this.error = true
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>
