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
import CharacterPage from '@/page/CharacterPage'


const router = createRouter({
    routes: [{
        path: '/',
        component: MainPage
    },
    {
        path: '/character/:id',
        component: CharacterPage
    },
    

],
    history: createWebHistory()
})


createApp(App)
    .use(router)
    .use(createPinia())
    .use(VueAxios, axios)
    .mount('#app')