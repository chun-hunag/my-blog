<template>
    <div id="header-wrapper">
        <div id="header-nav">
            <div class="header-link">
                <router-link to="/">Home</router-link>
            </div>
            <div class="header-link">
                <router-link to="/about">About</router-link>
            </div>
            <div class="header-link">
                <router-link to="/articles">Articles</router-link>
            </div>
        </div>
        <div id="header-search">
            <input id="header-search-input" name="search-column" placeholder="search ...">
        </div>
    </div>
</template>

<script>
export default {
    name: "Header.vue"
}
</script>

<style scoped>

#header-wrapper {
    display: flex;
    flex-direction: row;
    height: 10vh;
    max-height: 72px;
    border-bottom: 2px solid #F5F5F5;
}

@media (max-width: 415px) {
    #header-wrapper {
        display: none;
    }
}

#header-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
}

#header-search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30%;
}

#header-search-input {
    max-height: 32px;
    max-width: 200px;
}

.header-link {
    margin-left: 2rem;
    margin-right: 2rem;
}

</style>
