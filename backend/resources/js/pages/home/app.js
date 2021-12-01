
import { createApp } from 'vue'
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import 'highlight.js/styles/monokai.css';
import "bootstrap"
import router from './router'
const app = createApp(App);

app.use(router);
// mount the app to the DOM
app.mount('#app');
require('./bootstrap');
