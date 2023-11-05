<template>
    <main class="main">
        <SearchForm />
        <h1> Главная страница</h1>
    </main>
</template>

<script>
import SearchForm from '@/components/main/SearchForm.vue'
import { usePersonsStore } from '@/stores'
export default {
    name: 'MainPage',
    components: {
        SearchForm

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