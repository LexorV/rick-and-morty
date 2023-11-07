import {
    defineStore
} from "pinia";
import axios from 'axios';
import {
    API
} from "@/services/constants"
import {
    useSystemStore
} from "./SystemStore";

export const useEpisodeStore = defineStore("EpisodeStore", {
    state: () => ({
        name:'',
        air_date: new Date(),
        characters: [],
        charactersNumber: []
    }),
    getters: {},
    actions: {
        async getEpisode(id) {
            const systemStore = useSystemStore()
            systemStore.isLoading = true
            try {
                const res = await axios.get(`${API}episode/${id}`);
                const {name, air_date, characters } = res.data;
                this.name = name;
                this.air_date = air_date;
                const charactersNumber = characters.map((el) => el.replace(/[^0-9]/g,"")) 
                const listCharacters = await axios.get(`${API}character/${charactersNumber}`)
                this.charactersNumber = charactersNumber
                this.characters = listCharacters.data

            } catch (err) {
                console.log(err)
            } finally {
                systemStore.isLoading = false
            }
        },
    },
});