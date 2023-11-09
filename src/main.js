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
import EpisodePage from '@/page/EpisodePage'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const router = createRouter({
    routes: [{
        path: '/',
        component: MainPage
    },
    {
        path: '/character/:id',
        component: CharacterPage
    },
    {
        path: '/episode/:id',
        component: EpisodePage
    },
    

],
    history: createWebHistory()
})


createApp(App)
    .use(router)
    .use(createPinia().use(piniaPluginPersistedstate))
    .use(VueAxios, axios)
    .mount('#app')