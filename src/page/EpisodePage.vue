<template>
    <div>
        <h2>{{ episodeStore.name }}</h2>
        <span> Дата премьеры: {{  episodeStore.air_date }}</span>
        <h3> Персонажи</h3>
        <ul class="list__character">
            <li v-for="(item, index) of episodeStore.characters" 
                :key="item.id">
                <router-link :to="'/character/' + episodeStore.charactersNumber[index]" exact >
                    <img class='picture' :src="item.image" alt="Картинка">
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
import { useEpisodeStore } from '@/stores'
export default {
    props: {
        episode: {
            type: Object,
            default: () => {}
        },
    },
    data () {
        return {
            episodeStore: useEpisodeStore()
        }
    },
    mounted () {
        this.episodeStore.getEpisode(this.$route.params.id)
    },
        computed: {
        generateCharacter() {
            return this.person.episode.map((el) => el.replace(/[^0-9]/g,""))
        }
    },
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