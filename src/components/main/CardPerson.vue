<template>
    <li class="card">
        <PersonTemplate :person="person">
            <h2>Учавствуеет в следующих эпизодах:</h2>
            <ul>
                <li v-for="(item, index) of generateEpisode" 
                :key="index">
                <router-link class="link" :to="'episode/' + item">
                Эпизод {{ item }}</router-link></li>
            </ul>
        </PersonTemplate>
    </li>
</template>

<script>
import PersonTemplate from '@/components/template/PersonTemplate'
export default {
    components: {
        PersonTemplate
    },
    data () {
        return {
            episode: []
        }
    },
    computed: {
        generateEpisode() {
            return this.person.episode.slice(0, 5).map((el) => el.replace(/[^0-9]/g,""))
        }
    },
    props: {
        person: {
            type: Object,
            default: () => {}
        }
    },
}
</script>

<style lang="scss" scoped>
.card {
    background-color: rgb(216, 216, 228);
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
}
.link {
    font-size: 20px;
    @include link
}

</style>