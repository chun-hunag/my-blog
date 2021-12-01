<template>
    <div id="about-wrapper">
        <Markdown :source='source' />
    </div>
</template>

<script>
import Markdown from 'vue3-markdown-it';

export default {
    name: "About",
    components: {
        Markdown
    },
    data() {
        return{
            source: "# Test \n---\n## 12345",

        }
    },
}
</script>

<style scoped>

</style>
