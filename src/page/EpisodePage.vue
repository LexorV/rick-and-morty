<template>
    <div>
        <h2>{{ name }}</h2>
        <span> Дата премьеры: {{  air_date }}</span>
        <h3> Персонажи</h3>
        <ul class="list__character">
            <li v-for="(item, index) of characters" 
                :key="item.id">
                <router-link :to="'/character/' + charactersNumber[index]" exact >
                    <img class='picture' :src="item.image" alt="Картинка">
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import { API } from "@/services/constants";
import { useSystemStore } from '@/stores';
export default {
    data () {
        return {
            name: '',
            air_date: new Date(),
            characters: [],
            charactersNumber: [],
            systemStore: useSystemStore(),
        }
    },
    mounted () {
        this.getEpisode(this.$route.params.id)
    },
    methods: {
        async getEpisode(id) {
            this.systemStore.setIsloading()
            try {
                const res = await axios.get(`${API}episode/${id}`);
                const { name, air_date, characters } = res.data;
                this.name = name;
                this.air_date = air_date;
                const charactersNumber = characters.map((el) => el.replace(/[^0-9]/g, ""))
                const listCharacters = await axios.get(`${API}character/${charactersNumber}`)
                this.charactersNumber = charactersNumber
                this.characters = listCharacters.data
            } catch (err) {
                console.log(err)
            } finally {
                this.systemStore.setIsloading()
            }
        },
    }
    }
</script>

<style lang="scss" scoped>
.list__character {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}
.picture {
    @include picture
}

</style>