<template>
    <div id="wrapper">
        <div id="body-wrapper">
            <Header/>
            <div id="content-wrapper">
                <Sidebar/>
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Index from "./views/Index";
import About from "./views/About";
import Articles from "./views/Articles"
export default {
    components: {
        Header,
        Sidebar,
        Index,
        About,
        Articles
    },
    name: "App.vue",
    currentComponent: 'Index'
}
</script>

<style scoped>
/* Toggle Styles */

#wrapper {
    height: 100vh;
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled {
    padding-left: 250px;
}

#body-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

#content-wrapper {
    height: 75vh;
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: row;
}

</style>
