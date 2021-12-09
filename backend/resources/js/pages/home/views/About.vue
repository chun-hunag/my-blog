<template>
    <div id="about-wrapper">
        <div id="about-title">About Me</div>
        <Markdown :source="source" />
    </div>
</template>

<script>
import Markdown from 'vue3-markdown-it';
// import selfIntroduction from '/statics/markdown/self-introduction.md';

export default {
    name: "About",
    components: {
        Markdown
    },
    data() {
        return{
            path: '/statics/markdown/self-introduction.md',
            source: ''
        }
    },
    setup() {
        function readSelfIntroductionAndSetSource(path) {
            return fetch(path)
                .then(function(response) {
                    return response.text();
                }).then(data => this.source = data);
        }

        return {
            readSelfIntroductionAndSetSource
        };
    },
    created() {
        this.readSelfIntroductionAndSetSource(this.path);
    }
}
</script>

<style scoped>
#about-wrapper {
    width: 100%;
}

#about-title {
    width: 100%;
    text-align: center;
    font-size: 64px;
}

</style>
