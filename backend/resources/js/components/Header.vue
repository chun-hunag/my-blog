<template>
    <div id="header-wrapper">
        <div id="header-nav">
            <router-link to="/" class="header-link">Home</router-link>
            <router-link to="/about" class="header-link">About</router-link>
            <router-link to="/articles" class="header-link">Articles</router-link>
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
    width: 100%;
    max-width: 1100px;
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
    color: gray;
    text-decoration:none;
}

#header-search-input {
    border-radius: 8px;
}

</style>
