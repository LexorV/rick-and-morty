import {
    createApp
} from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
    createRouter,
    createWebHistory
} from 'vue-router'
import {
    createPinia
} from "pinia";
import MainPage from '@/page/MainPage'


const router = createRouter({
    routes: [{
        path: '/',
        component: MainPage
    }, ],
    history: createWebHistory()
})


createApp(App)
    .use(router)
    .use(createPinia())
    .use(VueAxios, axios)
    .mount('#app')