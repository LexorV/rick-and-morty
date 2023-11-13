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
            onePerson: {},
            location: '',
        }
    },
    methods: {
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