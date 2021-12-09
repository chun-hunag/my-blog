<template>
    <div id="index-wrapper">
        <div id="article" v-for="article in articles">
            <div id="title">{{article.title}}</div>
            <div id="markdown-wrapper">
                <Markdown :source="article.previewContent" />
            </div>
            <div id="tags-wrapper">
                <div id="tag" v-for="tag in article.tags">
                    {{tag}}
                </div>
            </div>
            <div id="date">
                {{timestampToDate(article.date)}} released
            </div>
        </div>
    </div>
</template>
<script>

import Markdown from 'vue3-markdown-it';
export default {
    components: {
        Markdown
    },
    data() {
        return {
            articles: [
                {
                    'title': 'article title 1',
                    'previewContent': '### Test previewContent\n* 1234\n* 45678',
                    'date': 1639057015,
                    'tags': [
                        'tag1', 'tag2', 'tag3', 'tag4', 'tag5'
                    ]
                },
                {
                    'title': 'article title 2',
                    'previewContent': '### Test previewContent',
                    'date': 1639057015,
                    'tags': [
                        'tag1', 'tag2', 'tag3', 'tag4', 'tag5'
                    ]
                },
                {
                    'title': 'article title 3',
                    'previewContent': '### Test previewContent',
                    'date': 1639057015,
                    'tags': [
                        'tag1', 'tag2', 'tag3', 'tag4', 'tag5'
                    ]
                },
                {
                    'title': 'article title 4',
                    'previewContent': '### Test previewContent',
                    'date': 1639057015,
                    'tags': [
                        'tag1', 'tag2', 'tag3', 'tag4', 'tag5'
                    ]
                }
            ]
        };
    },
    setup() {
        function timestampToDate(timestamp) {
            let date = new Date(timestamp * 1000);
            let year = date.getFullYear();
            let month = date.getMonth() + 1
            let day = date.getDate();
            return year + '/' + month + '/' + day;
        }

        return {
            timestampToDate
        };
    }
}
</script>

<style scoped>
#index-wrapper {
    width: 100%;
    max-height: 644px;
    padding: 20px;
}

#article {
    border-bottom: 1px solid #a0aec0;
}

#tags-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#date {
    color: gray;
    font-style: italic;
}

#title {
    text-align: center;
    color: black;
    font-size: 32px;
}

#tag {
    margin: 8px;
    padding: 2px;
    border: 2px solid silver;
    color: gray;
    font-size: 16px;
}

@media (max-width: 600px) {
    #title {
        text-align: center;
        color: black;
        font-size: 24px;
    }

    #tag {
        margin: 6px;
        padding: 2px;
        border: 2px solid silver;
        color: gray;
        font-size: 12px;
    }
}

@media (max-width: 415px) {
    #title {
        text-align: center;
        color: black;
        font-size: 16px;
    }

    #tag {
        margin: 4px;
        padding: 2px;
        border: 2px solid silver;
        color: gray;
        font-size: 8px;
    }
}

</style>
