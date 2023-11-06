<template>
    <main class="main">
        <SearchForm />
        <h1> Главная страница</h1>
        <BoardPerson/>
    </main>
</template>

<script>
import SearchForm from '@/components/main/SearchForm.vue'
import { usePersonsStore } from '@/stores'
import BoardPerson from '@/components/main/BoardPerson.vue'
export default {
    name: 'MainPage',
    components: {
        SearchForm,
        BoardPerson

    },
    mounted() {
        this.personsStore.getPersons()
    },
    data () {
        return {
            personsStore: usePersonsStore()
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>