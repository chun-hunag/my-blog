<template>
    <div id="article-wrapper">
        <div id="article-title">{{article.title}}</div>
        <Markdown :source="source" />
    </div>
</template>

<script>
import Markdown from "vue3-markdown-it";
export default {
    components: {
        Markdown
    },
    data() {
        return{
            article: {
                'title': 'i am article title',
                'source': '### Test previewContent\n* 1234\n* 45678'
            }
        }
    },
    name: "Article"
}
</script>

<style scoped>
#article-wrapper {
    width: 100%;
}

#article-title {
    width: 100%;
    text-align: center;
    font-size: 64px;
}
@media (max-width: 415px) {
    #article-title {
        width: 100%;
        text-align: center;
        font-size: 32px;
    }
}
</style>
