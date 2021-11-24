<template>
    <div id="sidebar-wrapper" v-show="isShow">
        <div id="sidebar-info">
            <div id="sidebar-logo-wrapper">
                <img id="sidebar-logo" src="https://i.epochtimes.com/assets/uploads/2021/08/id13156667-shutterstock_376153318-600x400.jpg">
            </div>
            <div id="sidebar-blog-name"> Blog name</div>
            <div id="sidebar-murmur"> You reap what you sow </div>
            <div id="contact">
                <div class="contact-logo" @click="newTab(contact.github)">
                    <img class="contact-logo" src="/statics/icons/GitHub.png">
                </div>
                <div class="contact-logo" @click="newTab(contact.linkedin)">
                    <img class="contact-logo" src="/statics/icons/Linkedin.png">
                </div>
            </div>
        </div>
        <div id="sidebar-tag" >
            <div><strong>Tags</strong></div>
            <div id="tag-list">
                <div id="tag" v-for="tag in tags">
                    {{tag}}
                </div>
            </div>

        </div>
        <div id="sidebar-recent-post">
            <div><strong>Recent Post</strong></div>
            <div id="recent-post-list">
                <div id="post" v-for="post in posts" @click="readArticle(post.url)">
                    {{post.title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar.vue",
    data() {
        return{
            contact: {
                github: "https://github.com/chun-hunag",
                linkedin: "https://www.linkedin.com/in/%E4%BF%8A%E7%91%9D-%E9%BB%83-554b02120/"
            },
            tags: [
                'Design Pattern', 'Algorithms', 'Data Structure', 'HTTP', 'PHP', 'Java', 'Laravel', 'Investment'
            ],
            posts: [
                {
                    'title': 'i am post a.'
                },
                {
                    'title': 'i am post b.'
                },
                {
                    'title': 'i am post c.'
                },
                {
                    'title': 'i am post d.'
                },
                {
                    'title': 'i am post eeeeeeeeeeeeeeeeeeeeee.'
                }
            ]
        }
    },
    setup() {
        function newTab($url) {
            window.open($url, '_blank');
        }

        function readArticle($url) {

        }

        return {
            newTab, readArticle
        }
    },
    computed: {
        isShow() {
            return this.$route.name === "Home" || this.$route.name === "Articles"
        }
    }
}
</script>

<style scoped>

#sidebar-wrapper {
    height: inherit;
    margin-top: 40px;
    max-width: 320px;
    width: 100%;
    background-color: #FAFAFA;
}
@media (max-width: 415px) {
    #sidebar-wrapper {
        display: none;
    }
}

/* Info */
#sidebar-info {
    height: 30%;
    max-height: 320px;
    text-align: center;
    border-bottom: 2mm groove #f9fafb;
    margin-left: 2rem;
    margin-right: 2rem;
}

#sidebar-logo-wrapper {
}

#sidebar-logo {
    max-width: 120px;
    height: auto;
    border-radius: 50%;
}
#sidebar-blog-name {
    height: 10%;
}

#sidebar-murmur {
    height: 20%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}

#contact {
    height: 30%;
    display: flex;
    align-content: center;
    justify-content: center;
}

.contact-logo {
    max-width: 28px;
    max-height: 28px;
    border-radius: 50%;
    margin: 4px
}

/* tag */
#sidebar-tag {
    height: 30%;
    max-height: 320px;
    text-align: center;
    border-bottom: 2mm groove #f9fafb;
    margin-left: 2rem;
    margin-right: 2rem;
}

#tag-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#tag {
    margin: 4px;
    padding: 2px;
    border: 2px solid silver;
    color: gray;
}

/* recent-post */
#sidebar-recent-post {
    height: 30%;
    max-height: 320px;
    text-align: center;
    border-bottom: 2mm groove #f9fafb;
    margin-left: 2rem;
    margin-right: 2rem;
}

#recent-post-list {
    display: flex;
    flex-direction: column;
}

#post {
    color: gray;
    border-bottom: 1px solid #a0aec0;
}

</style>
