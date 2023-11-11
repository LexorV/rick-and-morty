<template>
    <div>
        <PersonTemplate :isPage=true :person="onePerson">
            <p> Местоположение: {{ location }} </p>
        </PersonTemplate>
    </div>
</template>

<script>
import PersonTemplate from '@/components/template/PersonTemplate';
import { usePersonsStore, useSystemStore } from '@/stores';
import { API } from "@/services/constants";
import axios from 'axios';

export default {
    components: {
        PersonTemplate
    },
    mounted() {
        this.getOnePerson(this.$route.params.id)
    },
    data() {
        return {
            personsStore: usePersonsStore(),
            systemStore: useSystemStore(),
            name: '',
            air_date: new Date(),
            onePerson: {},
            characters: [],
            charactersNumber: [],
            location: '',
        }
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
        async getOnePerson(id) {
            this.systemStore.setIsloading()
            try {
                const res = await axios.get(`${API}character/${id}`);
                this.onePerson = res.data;
                this.location = Object.assign(res.data.location.name);
            } catch (err) {
                console.log(err)
            } finally {
                this.systemStore.setIsloading()
            }
        },

    }
}
</script>

<style lang="scss" scoped></style>